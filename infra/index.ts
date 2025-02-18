/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
import * as pulumi from '@pulumi/pulumi'
import chalk from 'chalk'
import Table from 'cli-table3'
import * as netlify from 'netlify'
import { emojiMap, sites, tableStyle } from './config'

const tableFields = [
  {
    key: 'domain',
    isStatic: true,
  },
  { key: 'baseDirectory' },
  { key: 'packageDirectory' },
  { key: 'publishDirectory' },
  { key: 'buildCommand' },
  {
    key: 'id',
    isStatic: true,
  },
  { key: 'deployPreviews' },
]

const table = new Table({
  ...tableStyle,
})

table.push([
  {
    content: chalk.bold.yellowBright('🌐 Project'),
    rowSpan: 2,
    hAlign: 'center',
    vAlign: 'center',
  },
  {
    content: chalk.bold.bgYellow.black('📂 Directory'),
    colSpan: 3,
    hAlign: 'center',
    vAlign: 'center',
  },
  // {
  //   content: chalk.bold.bgRedBright.black("🏗 Build\nCommand"),
  //   rowSpan: 2,
  //   hAlign: "center",
  //   vAlign: "center",
  // },
  {
    content: chalk.bold.whiteBright('ID'),
    rowSpan: 2,
    hAlign: 'center',
    vAlign: 'center',
  },
  {
    content: chalk.bold.bgRedBright.black('👀 Deploy\nPreviews'),
    rowSpan: 2,
    hAlign: 'center',
    vAlign: 'center',
  },
])

table.push([
  {
    content: chalk.bold.bgCyan.black('🛖 Base'),
    hAlign: 'center',
    vAlign: 'center',
  },
  {
    content: chalk.bold.bgGreen.black('📦 Package'),
    hAlign: 'center',
    vAlign: 'center',
  },
  {
    content: chalk.bold.bgMagenta.black('🚢 Publish'),
    hAlign: 'center',
    vAlign: 'center',
  },
])

sites.sites.apply((siteList) => {
  siteList.forEach((site, index) => {
    const siteBuildSettings = netlify.SiteBuildSettings.get(site.name, site.id)

    const dynamicPropertyValues = Object.fromEntries(
      tableFields
        .filter(field => !field.isStatic)
        .map(field => [field.key, (siteBuildSettings as any)[field.key]]),
    )

    pulumi.all(dynamicPropertyValues).apply((siteSettings) => {
      const emoji = Object.keys(emojiMap).find(key => site.name.includes(key))
        ? emojiMap[
          Object.keys(emojiMap).find(key => site.name.includes(key))!
        ]
        : '🌐'

      table.push([
        {
          content: `${emoji} ${chalk.bold.underline.yellow(site.customDomain)}`,
        },
        {
          content: chalk.blueBright(siteSettings.baseDirectory ?? 'N/A'),
        },
        {
          content: chalk.greenBright(siteSettings.packageDirectory ?? 'N/A'),
        },
        {
          content: chalk.magentaBright(siteSettings.publishDirectory ?? 'N/A'),
        },
        { content: chalk.white(`'${site.id}'`) },
        // {content: chalk.cyanBright(`${siteSettings.buildCommand}`)},
        {
          content: siteSettings.deployPreviews ? '✅' : '❎',
          hAlign: 'center',
          vAlign: 'center',
        },
      ])

      if (table.length === siteList.length + 2) {
        const headerRows = table.slice(0, 2)
        const remainingRows = table.slice(2)

        remainingRows.sort((a, b) => {
          const aContent
            = Array.isArray(a)
              && a[0]
              && typeof a[0] === 'object'
              && 'content' in a[0]
              ? String(a[0].content)
              : ''
          const bContent
            = Array.isArray(b)
              && b[0]
              && typeof b[0] === 'object'
              && 'content' in b[0]
              ? String(b[0].content)
              : ''

          if (aContent < bContent)
            return -1
          if (aContent > bContent)
            return 1
          return 0
        })

        const sortedTable = headerRows.concat(remainingRows)

        console.log(sortedTable.toString())
      }
    })
  })
})

export const siteBuildSettings = netlify.SiteBuildSettings.get(
  'docs.cuhacking.ca',
  '6a63ed7a-054a-4f6a-a0dc-6ac1c5b29720',
)
