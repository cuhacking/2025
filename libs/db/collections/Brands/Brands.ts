import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload/types'
import { navAccordions } from '@/db/collections/navAccordions'
import { getOrUploadMedia } from '@/db/seed'
import { Payload } from 'payload'

const SOCIAL_MEDIA_PLATFORMS = [
  { key: 'github', domain: 'github.com', label: 'GitHub' },
  { key: 'linkedin', domain: 'linkedin.com', label: 'LinkedIn' },
  { key: 'instagram', domain: 'instagram.com', label: 'Instagram' },
  { key: 'discord', domain: 'discord.gg', label: 'Discord' },
  { key: 'behance', domain: 'behance.net', label: 'Behance' },
  { key: 'figma', domain: 'figma.com', label: 'Figma' },
  { key: 'linktree', domain: 'linktr.ee', label: 'Linktree' },
] as const

const generateSocialLinks: CollectionBeforeChangeHook = async ({ data }) => {
  SOCIAL_MEDIA_PLATFORMS.forEach(({ key, domain }) => {
    const handle = data[key]
    if (handle) {
      const sanitizedHandle = handle.replace(/^(https?:\/\/)?(www\.)?/, '')

      if (sanitizedHandle.includes(domain)) {
        const extractedHandle = sanitizedHandle.replace(new RegExp(`^${domain}/?`), '')

        // if (!extractedHandle || extractedHandle.includes('/')) {
        //   throw new Error(`Invalid ${key} URL format. Only usernames or profile handles are allowed.`)
        // }

        data[`${key}Url`] = `https://${domain}/${extractedHandle}`
        data[key] = extractedHandle
      }
      else {
        // throw new Error(`Invalid ${key} URL. Expected a link from ${domain}.`)
      }
    }
  })

  return data
}

const socialMediaFields = SOCIAL_MEDIA_PLATFORMS.map(({ key, label,
  // domain
}) => ({
  name: key,
  type: 'text',
  label,
  required: false,
  admin: { position: 'sidebar' },
  // validate: validateSocialMediaHandle(label, domain),
}))

export const Brands: CollectionConfig = {
  slug: 'brands',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'symbol', 'description', 'id', 'updatedAt', 'createdAt'],
    group: navAccordions.categories,
  },
  versions: {
    drafts: true,
    maxPerDoc: 3,
  },
  hooks: {
    beforeChange: [generateSocialLinks],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Name' },
    { name: 'description', type: 'textarea', required: false, label: 'Description' },
    { name: 'domain', type: 'text', required: false, admin: { position: 'sidebar' } },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      required: false,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: false,
        },
        {
          name: 'link',
          type: 'text',
          required: false,
        },
      ],
    },
    { name: 'email', type: 'email', label: 'Email Address', required: false },
    { name: 'phone', type: 'number', label: 'Phone Number', required: false },
    { name: 'location', type: 'text', label: 'Location', required: false },
    { name: 'symbol', type: 'upload', relationTo: 'media', label: 'Symbol', required: false },
    { name: 'wordmark', type: 'upload', relationTo: 'media', label: 'Wordmark', required: false },
    ...socialMediaFields,
  ],
}


export async function seedBrands(payload: Payload, req: any) {
  payload.logger.info("📸 Uploading brand logos & inserting brands...");
  await Promise.all(
[
  {
    name: 'cuHacking',
    description: 'Carleton University\'s Official Hackathon',
    symbol:
      'https://avatars.githubusercontent.com/u/29588588?s=400&u=8b806db4b4a6277abc155ed5d290dcfe6a6e7598&v=4',
    domain: 'cuhacking.ca',
    links: [
      { name: 'Website', link: 'cuhacking.ca' },
      { name: 'Portal', link: 'portal.cuhacking.ca' },
      { name: 'Design', link: 'design.cuhacking.ca/' },
      { name: 'Architecture', link: 'arch.cuhacking.ca/view/index' },
      {
        name: 'Graph',
        link: 'graph.cuhacking.ca/#/projects/all?groupByFolder=true',
      },
      {
        name: 'Tooling',
        link: 'docs.cuhacking.ca/contribution-guidelines/coding-standards/tooling',
      },
      { name: 'ESLint', link: 'eslint.cuhacking.ca/rules' },
      { name: 'Discord', link: 'discord.gg/h2cQqF9aZf' },
      { name: 'Instagram', link: 'instagram.com/cuhacking/' },
      {
        name: 'LinkedIn',
        link: 'www.linkedin.com/company/cuhacking/',
      },
      { name: 'Linktree', link: 'linktr.ee/cuhacking_' },
      {
        name: 'Brand',
        link: 'www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1',
      },
      {
        name: 'Project Board',
        link: 'github.com/orgs/cuhacking/projects/4',
      },
      { name: 'GitHub', link: 'github.com/cuhacking/2025' },
    ],
    github: 'github.com/cuhacking/2025',
    linkedin: 'www.linkedin.com/company/cuhacking/',
    discord: 'discord.gg/h2cQqF9aZf',
    instagram: 'instagram.com/cuhacking/',
    linktree: 'linktr.ee/cuhacking_',
    figma: 'figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1',
    email: 'info@cuhacking.ca'
  },
  {
    name: 'Carleton Computer Science Society',
    description:
      'Student-run society for Computer Science at Carleton University',
    symbol:
      'https://carleton.ca/brand/wp-content/uploads/brand-logo-800w-1.jpg',
    domain: 'ccss.carleton.ca',
  },
  {
    name: 'Software Engineering Student Association',
    description:
      'University of Ottawa\'s Software Engineering Student Association',
    symbol:
      'https://www.uottawasesa.ca/static/media/logo.dc06f1167afbfbe0b7cf.png',
    domain: 'www.uottawasesa.ca',
  },
  {
    name: 'Carleton University',
    description: 'One of Canada\'s leading universities',
    symbol:
      'https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg',
    domain: 'carleton.ca',
  },
  {
    name: 'University of Ottawa',
    description: 'Canada\'s university for bilingual education',
    symbol:
      'https://images.seeklogo.com/logo-png/35/1/university-of-ottawa-logo-png_seeklogo-356159.png',
    domain: 'uottawa.ca/en',
  },
  {
    name: 'QNX',
    description: 'High-Performance Embedded Solutions. Accelerate embedded systems development with a secure Real-Time OS, hypervisor, and development tools.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_qnx.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19xbnguc3ZnIiwiaWF0IjoxNzQxNTQ5ODExLCJleHAiOjE3NzMwODU4MTF9.YyGXf3jxoc3Vru8aqt-lKhbuz5XcjTfvJz2-AKvdWcg',
    domain: 'blackberry.qnx.com',
    linkedin: "https://www.linkedin.com/company/qnx/",
  },
  {
    name: 'FullScript',
    description:
      'A platform for health professionals to support patient wellness',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_fullscript.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19mdWxsc2NyaXB0LnN2ZyIsImlhdCI6MTc0MTU0OTkwNCwiZXhwIjoxNzczMDg1OTA0fQ.zld_As2FzgzbH5vSALX74tGmjqKD6ATc3rfZFM-uvKw',
    domain: 'fullscript.com',
    linkedin: 'https://www.linkedin.com/company/fullscript/',
  },
  {
    name: 'CSE',
    description:
      'Communications Security Establishment Canada (CSE) is the national cryptologic agency, providing the Government of Canada with information technology security and foreign signals intelligence.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_cse.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19jc2Uuc3ZnIiwiaWF0IjoxNzQxNTQ5OTE1LCJleHAiOjE3NzMwODU5MTV9.Q6J53IKzhn7YXLTsOz9ZOlKO53DqHv0jK82pKrkAjjM',
    domain: 'cse-cst.gc.ca/en',
    linkedin: 'https://www.linkedin.com/company/cse-cst',
  },
  {
    name: 'Gadget',
    description:
      'Gadet is the JS development and hosting platform with everything you need to build and run web apps with ease, stitched together from the start.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_gadget.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19nYWRnZXQuc3ZnIiwiaWF0IjoxNzQxNTQ5OTI4LCJleHAiOjE3NzMwODU5Mjh9.rjzLSGZNnAS7Z5GYOZYDORSzE5TgRSTwg6Ot8xV7emA',
    domain: 'gadget.dev',
    linkedin: 'https://www.linkedin.com/company/gadget-dev',
    github: 'https://github.com/gadget-inc'
  },
  {
    name: 'NordVPN',
    description:
      'NordVPN is a leading VPN service offering robust encryption, a large global network of servers, and advanced features to protect user privacy and bypass geo-restrictions.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_nordvpn.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19ub3JkdnBuLnN2ZyIsImlhdCI6MTc0MTU1MDExMCwiZXhwIjoxNzczMDg2MTEwfQ.bBjslV0gXGl8M38EGewv-UAcMut8K4CsLVQ4cy5htkA',
    domain: 'nordvpn.com',
    linkedin: 'https://www.linkedin.com/company/nord-vpn/',
  },
  {
    name: 'NordPass',
    description:
      'Unlock the ease of cybersecurity with our trusted password manager',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_nordpass.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19ub3JkcGFzcy5zdmciLCJpYXQiOjE3NDE1NTAxMjIsImV4cCI6MTc3MzA4NjEyMn0.bDz9Y-OpmJTsUnrqvl80_ByrPCl_8vo8ON3MKwlzdT0',
    domain: 'nordpass.com',
    linkedin: 'https://www.linkedin.com/company/nordpass/',
  },
  {
    name: 'incogni',
    description:
      'The most comprehensive personal information removal service on the market.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_incogni.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19pbmNvZ25pLnN2ZyIsImlhdCI6MTc0MTU1MDA3OCwiZXhwIjoxNzczMDg2MDc4fQ._eSKS_9tcBE-t5ZrWQ0wt3e4CvAnwdNBbta5DzC1fp0',
    domain: 'incogni.com',
    linkedin: 'https://www.linkedin.com/company/incogni/',
  },
  {
    name: 'Saily',
    description:
      'Saily is an eSIM service that lets you stay connected wherever you go',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_saily.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19zYWlseS5zdmciLCJpYXQiOjE3NDE1NTAwOTUsImV4cCI6MTc3MzA4NjA5NX0.KA5QRMwD_rP3T77jQmoY4Z0bC0nyxN7v1k0i_cIh2qg',
    domain: 'saily.com',
    linkedin: 'https://www.linkedin.com/company/sailyworld/',
  },
  {
    name: 'The Merry Dairy',
    description:
      'Ottawa\'s home for nut-free and peanut-free premium ice cream & frozen custard',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_merry_dairy.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19tZXJyeV9kYWlyeS5zdmciLCJpYXQiOjE3NDE1NTAxNDEsImV4cCI6MTc3MzA4NjE0MX0.PRf1GoYrEjNZfnTiIePxndEpmtzJb48OmnpAZzl4Sa0',
    domain: 'themerrydairy.com',
    linkedin: 'https://www.linkedin.com/company/themerrydairy/',
  },
  {
    name: 'Beeceptor',
    description:
      'An API mocking, debugging, and testing platform that lets developers create mock API endpoints, inspect HTTP traffic, and simulate API responses in real time.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_beeceptor.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19iZWVjZXB0b3Iuc3ZnIiwiaWF0IjoxNzQxNTUwMTUwLCJleHAiOjE3NzMwODYxNTB9.Oogud2f23arShtXQhYxfVCElM3EtHNkUnm4iFDhcoTY',
    domain: 'beeceptor.com',
    linkedin: 'https://www.linkedin.com/company/beeceptor/',
  },
  {
    name: 'Wolfram',
    description:
      '"A computational intelligence company offering products like Mathematica and Wolfram|Alpha, providing advanced knowledge-based programming tools.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_wolfram.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb193b2xmcmFtLnN2ZyIsImlhdCI6MTc0MTU1MDE3NCwiZXhwIjoxNzczMDg2MTc0fQ.xwtrtdtHtrcIufgEQiv48Ne9hbcvCffPCmixrqTWABs',
    domain: 'www.wolfram.com',
    linkedin: 'https://www.linkedin.com/company/wolfram-research/',
  },
  {
    name: 'MLH',
    description:
      '',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_mlh.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19tbGguc3ZnIiwiaWF0IjoxNzQxNTUwMTkwLCJleHAiOjE3NzMwODYxOTB9.z_giiKmYs6rHE8FiLX6D1RJwooHDn93pI3NK8tt9ajQ',
    domain: 'mlh.io',
    linkedin: 'https://www.linkedin.com/company/major-league-hacking/',
  },
  {
    name: 'StandOut Stickers',
    description:
      '',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_standout_sticker.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19zdGFuZG91dF9zdGlja2VyLnN2ZyIsImlhdCI6MTc0MTU1MDE5OCwiZXhwIjoxNzczMDg2MTk4fQ.VC0wa9QdKh7BiLclutZj4oeuoRrmmdVIUaScrHW4sW0',
    domain: 'www.standoutstickers.com',
    linkedin: 'https://www.linkedin.com/company/standout-stickers-inc/',
  },
  {
    name: 'Red Bull',
    description:
      'A global leader in energy drinks, fueling performance and creativity with its iconic beverages and sponsorship of extreme sports and cultural events.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_redbull.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19yZWRidWxsLnN2ZyIsImlhdCI6MTc0MTU1MDIxNCwiZXhwIjoxNzczMDg2MjE0fQ.VrssAe2hQup9OUkSwK-0mVwzOwdgQ1ZPmh4hPOLLMRs',
    domain: 'www.redbull.com',
    linkedin: 'https://www.linkedin.com/company/red-bull/',
  },
  {
    name: 'KEFC',
    description:
      'The Kostiuk Engineering Funding Collective is a way for your affiliated club, group, or society to receive funding.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_kefc.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19rZWZjLnN2ZyIsImlhdCI6MTc0MTU1MDIzMSwiZXhwIjoxNzczMDg2MjMxfQ.1bibkqrkFzNymVhH_Wv-DXj8LotA1IQ9tAAhsIb0_rE',
    domain: '',
    linkedin: '',
  },
  {
    name: 'Faculty Of Science',
    description:
      'Carleton University’s Faculty of Science is a thriving community of researchers engaged in cutting-edge, world-class scientific inquiry.',
    symbol:
      'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_carleton_faculty_of_science.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19jYXJsZXRvbl9mYWN1bHR5X29mX3NjaWVuY2Uuc3ZnIiwiaWF0IjoxNzQxNjgzOTMyLCJleHAiOjE3NzMyMTk5MzJ9.CavtztkugYCFpyhYS7U2ahd7E2MomHMfTfQS7fl-ci0',
    domain: 'science.carleton.ca',
    linkedin: 'https://www.linkedin.com/in/carletonscience/',
  },
  {
    name: 'Tail\'ed',
    description: 'Tail\'ed is a free platform that connects young tech talent with opportunities—like events, coding challenges, and internships—to jumpstart their careers.',
    symbol: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-partners/cuhacking_6_partner_logo_tailed.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXBhcnRuZXJzL2N1aGFja2luZ182X3BhcnRuZXJfbG9nb190YWlsZWQuc3ZnIiwiaWF0IjoxNzQxNjg5MDk3LCJleHAiOjE3NzMyMjUwOTd9.CE-8StZTRnLyKlRG0fRF_3Ok8aUSZUsqZdkne5W9Je4',
    domain: 'tailed.ca',
    linkedin: 'https://www.linkedin.com/company/tailed/',
  },
  {
    name: 'IEEE Carleton',
    description: '',
    symbol: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-partners/cuhacking_6_partner_logo_ieee_carleton.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXBhcnRuZXJzL2N1aGFja2luZ182X3BhcnRuZXJfbG9nb19pZWVlX2NhcmxldG9uLnN2ZyIsImlhdCI6MTc0MTY5MDI0MiwiZXhwIjoxNzczMjI2MjQyfQ.C70G0Kdyj1F4otvc9wnj7QS3KJGueMIT4T8YMqA9_fc',
    domain: 'www.ieeecarleton.ca',
  },
  {
    name: 'Sesa',
    description: '',
    symbol: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-partners/cuhacking_6_partner_logo_sesa.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXBhcnRuZXJzL2N1aGFja2luZ182X3BhcnRuZXJfbG9nb19zZXNhLnN2ZyIsImlhdCI6MTc0MTY5MDM0NCwiZXhwIjoxNzczMjI2MzQ0fQ.6unIBrU_R8qLoJtUB3H6EnX2NEBIyQBrWQJXqrmfTWQ',
    domain: 'www.uottawasesa.ca',
  },
  {
    name: 'CAIS',
    description: '',
    symbol: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-partners/cuhacking_6_partner_logo_cais.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXBhcnRuZXJzL2N1aGFja2luZ182X3BhcnRuZXJfbG9nb19jYWlzLnN2ZyIsImlhdCI6MTc0MTY5MDUyNywiZXhwIjoxNzczMjI2NTI3fQ.WW1cZ3maSu_wEcD5fXyt0aNWL9c5RR4RdmLbQPSvPQA',
    domain: 'carletonai.com',
  },
  {
    name: 'Google',
    description: 'Google',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    domain: 'google.com',
  },
  {
    name: 'LinkedIn',
    description: 'LinkedIn',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
    domain: 'linkedin.com',
  },
  {
    name: 'Facebook',
    description: 'Facebook',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',
    domain: 'facebook.com',
  },
  {
    name: 'Discord',
    description: 'Discord',
    symbol: 'https://www.svgrepo.com/show/353655/discord-icon.svg',
    domain: 'discord.com',
  },
  {
    name: 'Instagram',
    description: 'Instagram',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    domain: 'instagram.com',
  },
  {
    name: 'Behance',
    description: 'Behance',
    symbol: 'https://cdn.worldvectorlogo.com/logos/behance-1.svg',
    domain: 'behance.net',
  },
  {
    name: 'Figma',
    description: 'Figma',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    domain: 'figma.com',
  },
  {
    name: 'LinkTree',
    description: 'LinkTree',
    symbol: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linktree-logo-icon.png',
    domain: 'linktr.ee',
  },
  {
    name: 'GitHub',
    description: 'GitHub',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    domain: 'github.com',
  },
].map(async (brand) => {
      const symbol = await getOrUploadMedia(
        payload,
        req,
        brand.symbol,
        `${brand.name.replace(/ /g, "-").toLowerCase()}-logo-symbol`,
        `${brand.name} Logo`,
      );

      await payload.create({
        collection: "brands",
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
          email: brand.email || null
        },
      });
      payload.logger.info(`✅ Inserted brand: ${brand.name}`);
    }),
  );
}
