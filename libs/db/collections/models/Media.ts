import type { CollectionConfig, Payload } from 'payload'

import { navAccordions } from '@/db/collections/navAccordions'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    group: navAccordions.categories,
    defaultColumns: [
      'filename',
      'alt',
      'prefix',
      'mimeType',
      'filesize',
      'updatedAt',
      'createdAt',
      'id',
    ],
    pagination: {
      defaultLimit: 50,
      limits: [10, 20, 50],
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    displayPreview: true,
   focalPoint: true,
  },
}

export async function seedMedia(payload: Payload) {
    payload.logger.info("📸 Uploading media...");
  try {
    await Promise.all(
      mediaSeedData.map(async (media) => {
  const res = await fetch(media.url, { method: 'GET' })

const contentType = res.headers.get("content-type") || "application/octet-stream";

  const data = await res.arrayBuffer()

        await payload.create({
    collection: 'media',
    file: {
      name: media.filename,
      data: Buffer.from(data),
      mimetype: contentType,
      size: data.byteLength,
    },
    data: { alt: media.alt || media.filename },
        })
      }),
    )
    payload.logger.info("📸 Media uploaded!");
  }
  catch (error) {
    console.error('Error seeding media data:', error)
  }
}

export const mediaSeedData = [
  {
alt: "cuHacking 2025 Symbol White",
    url: "https://github.com/user-attachments/assets/dd5a291f-146d-4dc5-b9e8-32bd43ca0df5",
    filename: "cuhacking-symbol-white.png"
  },
  {
alt: "cuHacking 2025 Symbol Green",
    url: "https://github.com/user-attachments/assets/ac2cf41b-61a7-4009-a9fd-937050ee763d",
    filename: "cuhacking-symbol-green.png"
  },
  {
alt: "cuHacking 2025 Symbol Teal",
    url: "https://github.com/user-attachments/assets/9c9a4171-1d3e-4f17-9158-8fe7daa51e5a",
    filename: "cuhacking-symbol-teal.png"
  },
  {
alt: "cuHacking 2025 Symbol Sky",
    url: "https://github.com/user-attachments/assets/a015ce79-8735-46d5-9598-0a33eeed0628",
    filename: "cuhacking-symbol-sky.png"
  },
  {
alt: "cuHacking 2025 Symbol Blue",
    url: "https://github.com/user-attachments/assets/48ab646b-790a-46ef-bd36-4f968d445602",
    filename: "cuhacking-symbol-blue.png"
  },
  {
alt: "cuHacking 2025 Symbol Purple",
    url: "https://github.com/user-attachments/assets/c91ce1ca-b8b7-40d4-91a8-1217d42bce6f",
    filename: "cuhacking-symbol-purple.png"
  },
  {
alt: "cuHacking 2025 Symbol Lilac",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/keycap-logo/cuhacking_keycap_logo_lilac.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9rZXljYXAtbG9nby9jdWhhY2tpbmdfa2V5Y2FwX2xvZ29fbGlsYWMuc3ZnIiwiaWF0IjoxNzQxNjA4NDc4LCJleHAiOjE3NzMxNDQ0Nzh9.tDHIKBckiRGDZ9esn_rEASqVSXMwiGQcZRrbXY6aDv4",
    filename: "cuhacking-symbol-lilac.svg"
  },
  {
alt: "cuHacking 2025 Symbol Pink",
    url: "https://github.com/user-attachments/assets/b4067d69-22b4-4819-9541-aff88418826d",
    filename: "cuhacking-symbol-pink.png"
  },
  {
alt: "cuHacking 2025 Symbol Red",
    url: "https://github.com/user-attachments/assets/c63ced75-bf94-4510-9dad-17ca47b9f7b0",
    filename: "cuhacking-symbol-red.png"
  },
  {
alt: "cuHacking 2025 Symbol Orange",
    url: "https://github.com/user-attachments/assets/84742531-fbca-4c4c-8206-e543a82cb287",
    filename: "cuhacking-symbol-orange.png"
  },
  {
alt: "cuHacking 2025 Symbol Brown",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/keycap-logo/cuhacking_keycap_logo_brown.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9rZXljYXAtbG9nby9jdWhhY2tpbmdfa2V5Y2FwX2xvZ29fYnJvd24uc3ZnIiwiaWF0IjoxNzQxNjA4NTM0LCJleHAiOjE3NzMxNDQ1MzR9.l10NJlpS1skOuBKRsMMJ9eUAu2uZCKRAsPxBfFEDQ9M,",
    filename: "cuhacking-symbol-brown.svg"
  },
  {
alt: "cuHacking 2025 Symbol Yellow",
url: "https://github.com/user-attachments/assets/2fe04bd8-3e5e-481f-97d2-646faab32276",
filename: "cuhacking-symbol-yellow.png",
  },
  {
alt: "cuHacking 2025 Symbol Grayscale",
    url: "https://github.com/user-attachments/assets/164d52be-5a96-436b-b92d-f2aebd16a7d2",
    filename: "cuhacking-symbol-grayscale.png"
  },
  {
alt: "cuHacking 2025 Wordmark Green",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/green-wordmark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9ncmVlbi13b3JkbWFyay5wbmciLCJpYXQiOjE3NDE2MDg2NDAsImV4cCI6MTc3MzE0NDY0MH0.ZqTQ45xe83RBXjE6_Vv7qJcaRUQZTceujO7Lbnvtr0A",
    filename: "cuhacking-wordmark-green.png"
  },
  {
alt: "cuHacking 2025 Wordmark Grayscale",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/grayscale-wordmark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9ncmF5c2NhbGUtd29yZG1hcmsucG5nIiwiaWF0IjoxNzQxNjA4NzI5LCJleHAiOjE3NzMxNDQ3Mjl9.4-x1bvmsAqehQKBw_xq5BWunJtY3MN0ujkt_8Rbn_8g",
    filename: "cuhacking-wordmark-grayscale.png"
  },
  {
alt: "cuHacking 2025 Portal Background Left",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/portal/cuhacking_portal_bg_left.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9wb3J0YWwvY3VoYWNraW5nX3BvcnRhbF9iZ19sZWZ0LnBuZyIsImlhdCI6MTc0MTYwODgxOCwiZXhwIjoxNzczMTQ0ODE4fQ.iXoFKxFzhq0H8ihnNUiZIFlGcL1BlJqoWlVTukSxBT4",
    filename: "cuhacking_2025_portal_bg_left.png"
  },
  {
alt: "cuHacking 2025 Portal Background Login",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/portal/cuhacking_portal_bg_login.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9wb3J0YWwvY3VoYWNraW5nX3BvcnRhbF9iZ19sb2dpbi5wbmciLCJpYXQiOjE3NDE2MDg4OTQsImV4cCI6MTc3MzE0NDg5NH0.bQGqwtwpIXNN-4VzMvWFE7xGYUIrNh6KlmL5n9Cu7SA",
    filename: "cuhacking_2025_bg_login.png"
  },
  {
alt: "cuHacking 2025 Portal Background Right",
    url: "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/portal/cuhacking_portal_bg_right.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9wb3J0YWwvY3VoYWNraW5nX3BvcnRhbF9iZ19yaWdodC5wbmciLCJpYXQiOjE3NDE2MDg4NjYsImV4cCI6MTc3MzE0NDg2Nn0.hMetoFmYTTQcXCGiyduVQ27dwm2gOXZ38Juqag--GwA",
    filename: "cuhacking_2025_bg_right.png"
  }
]
