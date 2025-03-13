import config from '@payload-config'
import { getPayload } from 'payload'

async function deleteUser() {
  const payload = await getPayload({ config })

  const email = process.env.LOCAL_DEV_EMAIL_ADDRESS

  const query = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
  })

  if (query.docs.length > 0) {
    const userId = query.docs[0].id

    await payload.delete({
      collection: 'users',
      id: userId,
    })

    console.log(`User with email ${email} deleted.`)
  }

  else {
    console.log(`User with email ${email} not found.`)
  }

}

deleteUser()
