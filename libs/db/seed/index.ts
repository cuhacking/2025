/* eslint-disable node/prefer-global/buffer */
import type { File, Payload, PayloadRequest } from 'payload'
import { brandData } from './Brands'
import { userData } from './Users'

export async function seed({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<{ message: string, logs: string[] }> {
  const logs: string[] = []
  const log = (message: string) => {
    payload.logger.info(message)
    logs.push(message)
  }

  log('🌱 Seeding database...')

  log('🗑 Clearing existing brands...')
  await payload.db.deleteMany({ collection: 'brands', where: {}, req })
  log('✅ Existing brands cleared.')

  log('📸 Uploading brand logos...')
  const uploadedBrandMedia = await Promise.all(
    brandData.map(async (brand) => {
      try {
        const file = await uploadFileByURL(payload, req, {
          url: brand.mediaUrl,
          filename: `${brand.name.replace(/ /g, '-').toLowerCase()}-logo.png`,
          alt: `${brand.name} Logo`,
        })
        log(`✅ Logo uploaded for ${brand.name}.`)
        return file
      }
      catch (error) {
        log(
          `⚠ Failed to upload logo for ${brand.name}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
        return null
      }
    }),
  )

  log('📝 Inserting new brands...')
  await Promise.all(
    brandData.map(async (brand, index) => {
      await payload.create({
        collection: 'brands',
        data: {
          name: brand.name,
          description: brand.description,
          media: uploadedBrandMedia[index]
            ? uploadedBrandMedia[index].id
            : null,
          links: brand.links,
          relatedBrands: [],
        },
      })
      log(`✅ Inserted brand: ${brand.name}`)
    }),
  )

  log('🗑 Clearing existing users...')
  await payload.db.deleteMany({
    collection: 'users',
    where: {
      email: { not_equals: 'hasithde24@gmail.com' },
    },
    req,
  })
  log('✅ Existing users cleared.')

  log('📸 Uploading user profile pictures...')
  const uploadedUserMedia = await Promise.all(
    userData.map(async (user) => {
      if (!user.mediaUrl)
        return null
      try {
        const file = await uploadFileByURL(payload, req, {
          url: user.mediaUrl,
          filename: `${user.firstName.toLowerCase()}-profile.png`,
          alt: `${user.firstName}'s Profile Picture`,
        })
        log(`✅ Profile picture uploaded for ${user.firstName}.`)
        return file
      }
      catch (error) {
        log(
          `⚠ Failed to upload profile picture for ${user.firstName}: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`,
        )
        return null
      }
    }),
  )

  log('📝 Inserting new users...')
  await Promise.all(
    userData.map(async (user, index) => {
      await payload.create({
        collection: 'users',
        data: {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          middleName: user.middleName,
          lastName: user.lastName,
          preferredName: user.preferredName,
          pronouns: user.pronouns,
          avatar: uploadedUserMedia[index] ? uploadedUserMedia[index].id : null,
          brandRelation: user.brandRelation,
          linkedIn: user.linkedIn,
          discord: user.discord,
          github: user.github,
          behance: user.behance,
          website: user.website,
          dietaryRestrictions: user.dietaryRestrictions,
          allergies: user.allergies,
          tshirtSize: user.tshirtSize,
          name: user.name,
          emergencyPreferredName: user.emergencyPreferredName,
          phone: user.phone,
          emergencyEmail: user.emergencyEmail,
        },
      })
      log(`✅ Inserted user: ${user.firstName} ${user.lastName}`)
    }),
  )

  log('🎉 Database seeded successfully! 🌱🐧')
  return { message: 'Database seeded successfully!', logs }
}

/**
 * Function to fetch an image from a URL and upload it to PayloadCMS.
 */
async function uploadFileByURL(
  payload: Payload,
  req: PayloadRequest,
  { url, filename, alt }: { url: string, filename: string, alt?: string },
): Promise<File> {
  payload.logger.info(`📥 Fetching image from URL: ${url}`)

  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  const uploadedFile = await payload.create({
    collection: 'media',
    file: {
      name: filename,
      data: Buffer.from(data),
      mimetype: 'image/png',
      size: data.byteLength,
    },
    data: {
      alt: alt || filename,
    },
  })

  payload.logger.info(`✅ Successfully uploaded ${filename}`)
  return uploadedFile
}
