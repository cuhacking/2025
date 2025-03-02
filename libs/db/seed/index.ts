/* eslint-disable node/prefer-global/process */
/* eslint-disable node/prefer-global/buffer */
import type { File, Payload, PayloadRequest } from 'payload'
import { brandSeedData } from '@/db/collections/Brands'
import { seedEmails } from '@/db/collections/models'
import { userData } from '@/db/collections/models/Users'

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

  const uploadedImages = new Map<string, File>()

  async function getOrUploadMedia(url: string | undefined, filename: string, alt: string): Promise<File | null> {
    if (!url)
      return null
    if (uploadedImages.has(url)) {
      log(`🔄 Reusing cached image: ${filename}`)
      return uploadedImages.get(url) || null
    }

    try {
      const file = await uploadFileByURL(payload, req, { url, filename, alt })
      uploadedImages.set(url, file)
      return file
    }
    catch (error) {
      log(`⚠ Failed to upload ${filename}: ${error instanceof Error ? error.message : 'Unknown error'}`)
      return null
    }
  }

  async function clearCollection(collection: string, exclude?: string) {
    log(`🗑 Clearing existing ${collection}...`)
    const whereClause = exclude ? { email: { not_equals: exclude } } : {}
    await payload.db.deleteMany({ collection, where: whereClause, req })
    log(`✅ Existing ${collection} cleared.`)
  }

  await clearCollection('brands')
  await clearCollection('users', process.env.LOCAL_DEV_EMAIL_ADDRESS)

  log('📸 Uploading brand logos & inserting brands...')

  // await seedBrands(payload)

  // async function seedEmails(payload: Payload) {
  //   try {
  //
  await Promise.all(
    brandSeedData.map(async (brand) => {
      const symbol = await getOrUploadMedia(brand.symbol, `${brand.name.replace(/ /g, '-').toLowerCase()}-logo-symbol`, `${brand.name} Logo`)

      await payload.create({
        collection: 'brands',
        data: {
          name: brand.name,
          description: brand.description,
          symbol: symbol?.id || null,
          domain: brand.domain || null,
          links: brand.links || [],
          github: brand.github,
          linkedin: brand.linkedin,
          discord: brand.discord,
          instagram: brand.instagram,
          linktree: brand.linktree,
          figma: brand.figma,
        },
      })
      log(`✅ Inserted brand: ${brand.name}`)
    }),
  )

  //   }
  //   catch (error) {
  //     console.error('Error seeding brand data:', error)
  //   }
  // }

  log('📸 Uploading user avatars & inserting users...')
  await Promise.all(
    userData.map(async (user) => {
      const media = await getOrUploadMedia(user.mediaUrl, `${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}-avatar.png`, `${user.firstName} ${user.lastName}'s avatar`)
      await payload.create({
        collection: 'users',
        data: {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          displayName: user.displayName,
          pronouns: user.pronouns,
          avatar: media?.id || null,
          linkedIn: user.linkedIn || undefined,
          discord: user.discord || undefined,
          github: user.github || undefined,
          behance: user.behance || undefined,
          website: user.website || undefined,
          dietaryRestrictions: user.dietaryRestrictions || undefined,
          allergies: user.allergies || undefined,
          tshirtSize: user.tshirtSize,
          emergencyContactFullName: user.emergencyContactFullName || undefined,
          emergencyContactCellPhone: user.emergencyContactCellPhone || undefined,
          emergencyContactEmailAddress: user.emergencyContactEmailAddress || undefined,
        },
      })
      log(`✅ Inserted user: ${user.firstName} ${user.lastName}`)
    }),
  )

  await seedEmails(payload)

  log('🎉 Database seeded successfully! 🌱🐧')
  return { message: 'Database seeded successfully!', logs }
}

/**
 * Fetches an image from a URL and uploads it to PayloadCMS.
 */
async function uploadFileByURL(
  payload: Payload,
  req: PayloadRequest,
  { url, filename, alt }: { url: string, filename: string, alt?: string },
): Promise<File> {
  payload.logger.info(`📥 Fetching image from URL: ${url}`)
  const res = await fetch(url, { method: 'GET' })

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
    data: { alt: alt || filename },
  })

  payload.logger.info(`✅ Successfully uploaded ${filename}`)
  return uploadedFile
}
