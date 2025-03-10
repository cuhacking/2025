/* eslint-disable node/prefer-global/buffer */
import type { CollectionSlug, File, Payload, PayloadRequest } from 'payload'
import { hardwareSeedData } from '@/db/collections'
import { brandSeedData } from '@/db/collections/Brands'
import { seedEmails, seedHackathons } from '@/db/collections/models'
import { seedMedia } from '@/db/collections/models'
import { userData } from '@/db/collections/models/Users'
import { seedGroups } from '@/db/collections/models'
import { seedOrganizerTeams } from '@/db/collections/OrganizerTeams'

const collections: CollectionSlug[] = [
  'media',
  'users',
  'media',
  'brands',
  'groups',
  'organizerTeams',
  'hardware',
  'emails',
  'forms'
]

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
  if (!url) return null;

  try {
    const existingMedia = await payload.find({
      collection: 'media',
      where: { alt: { equals: alt } },
      limit: 1,
    });

    if (existingMedia.docs.length > 0) {
      const existingFile = existingMedia.docs[0];
      log(`🔄 Reusing existing media from Payload: ${filename} (alt: ${alt})`);
      return existingFile;
    }

    const file = await uploadFileByURL(payload, req, { url, filename, alt });

    uploadedImages.set(url, file);
    return file;
  } catch (error) {
    log(`⚠ Failed to upload ${filename}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return null;
  }
}

  // async function clearCollection(collection: string, exclude?: string) {
  //   log(`🗑 Clearing existing ${collection}...`)
  //   const whereClause = exclude ? { email: { not_equals: exclude } } : {}
  //   await payload.db.deleteMany({ collection, where: whereClause, req })
  //   log(`✅ Existing ${collection} cleared.`)
  // }

  // await clearCollection('brands')
  // await clearCollection('users', process.env.LOCAL_DEV_EMAIL_ADDRESS)

  // await Promise.all(
  //   globals.map(global => payload.updateGlobal({
  //     slug: global,
  //     data: {},
  //     depth: 0,
  //     req,
  //   })),
  // )

  await Promise.all(
    collections.map(collection => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter(collection => Boolean(payload.collections[collection].config.versions))
      .map(collection => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  log('📸 Uploading media...')

seedMedia(payload)
  .then(() => {
  log('📸 Media uploaded!')
    return seedGroups(payload);
  })
  .then(() => {
  log('Groups seeded!')
    return seedOrganizerTeams(payload);
  })
  .then(() => {
  log('Organizer teams seeded!')
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  })

  log('📸 Uploading brand logos & inserting brands...')

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

  log('📸 Uploading user avatars & inserting users...')

  await Promise.all(
    userData.map(async (user) => {
      const media = await getOrUploadMedia(user.mediaUrl, `${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}-avatar.png`, `${user.firstName} ${user.lastName}'s avatar`)

      await payload.create({
        collection: 'users',
        data: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          displayName: user.displayName,
          pronouns: user.pronouns,
          avatar: media?.id || null,
          linkedinHandle: user.linkedinHandle || undefined,
          githubHtmlUrl: user.githubHtmlUrl || undefined,
          website: user.linkedinHandle || undefined,
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

  try {
    await Promise.all(
      hardwareSeedData.map(async (hardware) => {
        const mediaIds = await Promise.all(
          hardware.images.map(async (image, index) => {
            const media = await getOrUploadMedia(
              image.image,
              `${hardware.name.toLowerCase().replace(/\s+/g, '-')}-image-${index}.png`,
              `${hardware.name} Image`,
            )

            return typeof media === 'object' && media !== null ? media.id : media
          }),
        )

        const validMediaObjects = mediaIds
          .filter(id => id)
          .map(id => ({
            id,
            image: { id },
          }))

        const formattedDescription = {
          root: {
            type: 'root',
            children: hardware.description.children.map(child => ({
              ...child,
            })),
          },
        }

        const formattedResources = {
          root: {
            type: 'root',
            children: hardware.resources.children.map(child => ({
              ...child,
            })),
          },
        }

        await payload.create({
          collection: 'hardware',
          data: {
            images: validMediaObjects.length > 0 ? validMediaObjects : undefined,
            name: hardware.name,
            description: formattedDescription,
            resources: formattedResources,
            quantity: hardware.quantity,
            categories: hardware.categories,
          },
        })

        console.log(`✅ Inserted hardware: ${hardware.name}`)
      }),
    )

    console.log('✅ All hardware seed data successfully inserted!')
  }
  catch (error) {
    console.error('❌ Error seeding hardware data:', error)
  }

  await seedEmails(payload)

try {
  await Promise.all(
   [
  {
    title: "cuHacking 6 Registration Form",
    fields: [
      {
        blockName: "We really want to see you there!",
        blockType: "message",
        message: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    mode: "normal",
                    text: "We really want to see you there!",
                    type: "text",
                    style: "",
                    detail: 0,
                  },
                ],
              },
              {
                type: "paragraph",
                children: [],
              },
            ],
          },
        },
      },
      {
        name: "what-challenge-are-you-most-interested-in",
        label: "What challenge are you most interested in?",
        width: 100,
        defaultValue: null,
        required: true,
        blockName: "What challenge are you most interested in?",
        blockType: "select",
        options: [
          { label: "hardware", value: "🤖 Hardware" },
          { label: "ai-ml", value: "🧠 AI/ML" },
          { label: "full-stack", value: "📱 Full-Stack (Mobile and Web)" },
          { label: "cybersecurity", value: "👩‍💻 CyberSecurity" },
        ],
      },
      {
        name: "where-did-you-hear-about-us",
        label: "Where did you hear about us?",
        width: 100,
        defaultValue: null,
        required: true,
        blockName: "Where did you hear about us?",
        blockType: "select",
        options: [
          { label: "instagram", value: "Instagram" },
          { label: "linkedin", value: "LinkedIn" },
          { label: "reddit", value: "Reddit" },
          { label: "discord", value: "Discord Community" },
          { label: "friend-or-word-of-mouth", value: "Friend or Word of Mouth" },
          { label: "university-college-announcement", value: "University/College Announcement" },
          { label: "cuhacking-website", value: "cuHacking Website" },
          { label: "previous-cuhacking-event", value: "Previous cuHacking Event" },
          { label: "mlh", value: "MLH" },
  { label: 'email-newsletter', value: 'Email Newsletter' },
  { label: 'company-recommendation', value: 'Company/Organization Recommendation' },
  { label: 'professor-advisor', value: 'Professor or Academic Advisor' },
  { label: 'other', value: 'Other' },
        ],
      },
      {
        name: "what-workshops-would-you-like-to-see",
        label: "What workshops would you like to see?",
        width: 100,
        defaultValue: null,
        required: true,
        blockName: "What workshops would you like to see?",
        blockType: "select",
        options: [
  { label: 'web-dev', value: 'Intro to Web Development (HTML, CSS, JavaScript)' },
  { label: 'ml-basics', value: 'Machine Learning Basics' },
  { label: 'cybersecurity', value: 'Cybersecurity & Ethical Hacking' },
  { label: 'mobile-apps', value: 'Building Mobile Apps (Flutter/React Native)' },
  { label: 'embedded-systems', value: 'Intro to Embedded Systems' },
  { label: 'game-dev', value: 'Game Development with Unity' },
  { label: 'ui-ux', value: 'UI/UX Design Fundamentals' },
  { label: 'blockchain', value: 'Blockchain & Smart Contracts' },
  { label: 'cloud-devops', value: 'Cloud Computing & DevOps' },
  { label: 'resume-interview', value: 'Resume & Tech Interview Prep' },
  { label: 'data-science', value: 'Data Science & Analytics' },
  { label: 'iot', value: 'Internet of Things (IoT) & Smart Devices' },
  { label: 'competitive-programming', value: 'Competitive Programming & Algorithms' },
  { label: 'quantum-computing', value: 'Quantum Computing Basics' },
        ],
      },
      {
        name: "how-familiar-are-you-with-qnx",
        label: "How familiar are you with QNX?",
        width: 100,
        defaultValue: null,
        required: true,
        blockName: "How familiar are you with QNX?",
        blockType: "select",
        options: [
  { label: '1', value: 'Never heard of it' },
  { label: '2', value: 'I’ve heard of QNX but never used it' },
  { label: '3', value: 'Beginner (Have read about it, but no hands-on experience)' },
  { label: '4', value: 'Intermediate (Have worked on a small project using QNX)' },
  { label: '5', value: 'Advanced (Actively using QNX in development)' },
  { label: '6', value: 'Expert (Deep knowledge of QNX, have built production systems with it)' },
]
      },
      {
name: "first-time-hacker",
label: "What would you tell a first-time hacker?",
width: 100,
defaultValue: null,
required: true,
blockName: "What would you tell a first-time hacker?",
blockType: "textarea"
}
    ],
    submitButtonLabel: "Register",
    confirmationType: "message",
    confirmationMessage: {
      root: {
        type: "root",
        children: [
          {
            type: "paragraph",
            children: [
              {
                mode: "normal",
                text: "Thanks for Registering!",
                type: "text",
                style: "",
                detail: 0,
              },
            ],
          },
        ],
      },
    },
    redirect: {
      url: "",
    },
    emails: [],
  },
].map(async (form) => {
      await payload.create({
        collection: 'forms',
        data: form,
      });


      console.log(`✅ Inserted form: ${form.title}`);
    }),
  );

  console.log('✅ All form seed data successfully inserted!');
} catch (error) {
  console.error('❌ Error seeding form data:', error);
}

  await seedHackathons(payload)

  log('🎉 Database seeded successfully! 🌱🐧')
  return { message: 'Database seeded successfully!', logs }
}

/**
 * Fetches an image from a URL and uploads it to PayloadCMS.
 */
export async function uploadFileByURL(
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
