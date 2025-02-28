/* eslint-disable node/prefer-global/process */
import type { Block, GlobalConfig } from 'payload'

export const Header: Block = {
  slug: 'Header',
  imageURL: '',
  imageAltText: 'A nice thumbnail',
  fields: [
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ],
}

export const Website: GlobalConfig = {
  slug: 'website',
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: `${process.env.CUHACKING_2025_WEBSITE_LOCAL_URL}`,
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 320,
          height: 568,
        },
      ],
    },
  },
  fields: [
    // {
    //   name: 'header',
    //   type: 'blocks',
    //   blocks: [
    //     Header,
    //   ],
    // },
    {
      name: 'links',
      type: 'text',
      defaultValue: async ({ req }) => {
        const res = await req.payload.find({
          collection: 'brands',
          where: { name: { equals: 'cuHacking' } },
          select: { links: true },
        })

        return res?.docs[0].github || ''
      },
    },
  ],
}
