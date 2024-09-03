import process from 'node:process'
import { z } from 'zod'
import aws from 'aws-sdk'
import {
  protectedProcedure,
} from '~/server/api/trpc'

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const ses = new aws.SES({ apiVersion: '2010-12-01' })

export const subscribeToNewsletterRouter = protectedProcedure
  .input(
    z.object({
      email: z.string().email(),
    }),
  )
  .mutation(async ({ input }) => {
    const { email } = input
    const params = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: { Data: 'Thanks for subscribing to our newsletter!' },
        },
        Subject: {
          Data: 'Welcome to CuHack Newsletter',
        },
      },
      Source: process.env.EMAIL_SOURCE,
    }

    try {
      await ses.sendEmail(params).promise()
      return { success: true }
    }
    catch (error) {
      console.error('Error sending email:', error)
      throw new Error('Failed to send email. Please try again later.')
    }
  })
