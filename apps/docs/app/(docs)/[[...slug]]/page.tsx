/* eslint-disable react/no-nested-components */
import type { ReactNode } from 'react'
import Link from 'fumadocs-core/link'
import { Callout } from 'fumadocs-ui/components/callout'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultComponents from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { source } from '../../../source'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page)
    notFound()

  const MDX = page.data.body

  const netlifyLogo = (
    <div className="w-24 dark:text-white text-black">
      <svg
        viewBox="0 0 512 209"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current" // Add fill-current here for Tailwind
        role="img"
        aria-label="Netlify Logo"
      >
        <title>Netlify Logo</title>
        <g clipPath="url(#clip0_236_77)">
          <path d="M117.436 207.036V154.604L118.529 153.51H129.452L130.545 154.604V207.036L129.452 208.13H118.529L117.436 207.036Z" />
          <path d="M117.436 53.5225V1.09339L118.529 0H129.452L130.545 1.09339V53.5225L129.452 54.6159H118.529L117.436 53.5225Z" />
          <path d="M69.9539 169.238H68.4094L60.6869 161.512V159.967L78.7201 141.938L86.8976 141.942L87.9948 143.031V151.209L69.9539 169.238Z" />
          <path d="M69.9462 38.8917H68.4017L60.6792 46.6181V48.1626L78.7124 66.192L86.8899 66.1882L87.9871 65.0986V56.9212L69.9462 38.8917Z" />
          <path d="M1.09339 97.5104H75.3711L76.4645 98.6038V109.526L75.3711 110.62H1.09339L0 109.526V98.6038L1.09339 97.5104Z" />
          <path d="M440.999 97.5104H510.91L512.004 98.6038V109.526L510.91 110.62H436.633L435.539 109.526L439.905 98.6038L440.999 97.5104Z" />
          <path d="M212.056 108.727L210.963 109.821H177.079L175.986 110.914C175.986 113.101 178.173 119.657 186.916 119.657C190.196 119.657 193.472 118.564 194.566 116.377L195.659 115.284H208.776L209.869 116.377C208.776 122.934 203.313 132.774 186.916 132.774C168.336 132.774 159.589 119.657 159.589 104.357C159.589 89.0576 168.332 75.9408 185.822 75.9408C203.313 75.9408 212.056 89.0576 212.056 104.357V108.731V108.727ZM195.659 97.7971C195.659 96.7037 194.566 89.0538 185.822 89.0538C177.079 89.0538 175.986 96.7037 175.986 97.7971L177.079 98.8905H194.566L195.659 97.7971Z" />
          <path d="M242.66 115.284C242.66 117.47 243.753 118.564 245.94 118.564H255.776L256.87 119.657V130.587L255.776 131.681H245.94C236.103 131.681 227.36 127.307 227.36 115.284V91.2368L226.266 90.1434H218.617L217.523 89.05V78.1199L218.617 77.0265H226.266L227.36 75.9332V66.0965L228.453 65.0031H241.57L242.663 66.0965V75.9332L243.757 77.0265H255.78L256.874 78.1199V89.05L255.78 90.1434H243.757L242.663 91.2368V115.284H242.66Z" />
          <path d="M283.1 131.681H269.983L268.889 130.587V56.2636L269.983 55.1702H283.1L284.193 56.2636V130.587L283.1 131.681Z" />
          <path d="M312.61 68.2871H299.493L298.399 67.1937V56.2636L299.493 55.1702H312.61L313.703 56.2636V67.1937L312.61 68.2871ZM312.61 131.681H299.493L298.399 130.587V78.1237L299.493 77.0304H312.61L313.703 78.1237V130.587L312.61 131.681Z" />
          <path d="M363.98 56.2636V67.1937L362.886 68.2871H353.05C350.863 68.2871 349.769 69.3805 349.769 71.5672V75.9408L350.863 77.0342H361.793L362.886 78.1276V89.0576L361.793 90.151H350.863L349.769 91.2444V130.591L348.676 131.684H335.559L334.466 130.591V91.2444L333.372 90.151H325.723L324.629 89.0576V78.1276L325.723 77.0342H333.372L334.466 75.9408V71.5672C334.466 59.5438 343.209 55.1702 353.046 55.1702H362.882L363.976 56.2636H363.98Z" />
          <path d="M404.42 132.774C400.046 143.704 395.677 150.261 380.373 150.261H374.906L373.813 149.167V138.237L374.906 137.144H380.373C385.836 137.144 386.929 136.05 388.023 132.77V131.677L370.536 89.05V78.1199L371.63 77.0265H381.466L382.56 78.1199L395.677 115.284H396.77L409.887 78.1199L410.98 77.0265H420.817L421.91 78.1199V89.05L404.424 132.77L404.42 132.774Z" />
          <path d="M135.454 131.681L134.361 130.587L134.368 98.9172C134.368 93.4541 132.22 89.2182 125.625 89.0806C122.234 88.9926 118.354 89.0729 114.209 89.2488L113.59 89.8834L113.598 130.587L112.504 131.681H99.3913L98.2979 130.587V77.5388L99.3913 76.4454L128.901 76.1778C143.685 76.1778 149.668 86.3356 149.668 97.8009V130.587L148.575 131.681H135.454Z" />
        </g>
        <defs>
          <clipPath id="clip0_236_77">
            <rect width="512" height="208.126" fill="current" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )

  const footer = (
    <>
      <a
        href="https://github.com/cuhacking/2025/graphs/contributors"
        target="_blank"
        rel="noreferrer noopener"
        className="text-xs text-center"
      >
        Made with 💚 for Hackers by Hackers
      </a>
      <a
        href="https://netlify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex hover:scale-110 duration-300 transition text-cyan-500 text-green-700 dark:text-cyan-300 dark:hover:text-green-500 justify-center items-center gap-x-3"
      >
        <span className="text-[12px]">Sponsored by</span>
        {netlifyLogo}
      </a>
    </>
  )

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      /* lastUpdate={new Date()} */
      editOnGithub={{
        owner: 'cuhacking',
        repo: '2025',
        sha: 'main',
        path: `apps/docs/content/docs/${page.file.path}`,
      }}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{
          ...defaultComponents,
          Tab,
          Tabs,
          InstallTabs: ({
            items,
            children,
          }: {
            items: string[]
            children: ReactNode
          }) => (
            <Tabs items={items} id="package-manager">
              {children}
            </Tabs>
          ),
          Step,
          Steps,
          Callout,
          Link,
        }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page)
    notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
