import * as pulumi from '@pulumi/pulumi'
import * as netlify from 'netlify'

const netlifyConfig = new pulumi.Config('netlify')
const TEAM_SLUG = netlifyConfig.require('defaultTeamSlug')
export const sites = netlify.getSitesOutput({ teamSlug: TEAM_SLUG })

export const tableStyle = {
  chars: {
    'top': '═',
    'top-mid': '╤',
    'top-left': '╔',
    'top-right': '╗',
    'bottom': '═',
    'bottom-mid': '╧',
    'bottom-left': '╚',
    'bottom-right': '╝',
    'left': '║',
    'left-mid': '╟',
    'mid': '─',
    'mid-mid': '┼',
    'right': '║',
    'right-mid': '╢',
    'middle': '│',
  },
  style: {
    head: ['blue', 'bold'],
    // compact: true,
  },
  // wordWrap: true,
};


export const emojiMap: Record<string, string> = {
  email: "✉",
  arch: "🏛",
  graph: "🕸",
  axiom: "⌨",
  portal: "🌀",
  website: "📢",
  eslint: "🧹",
  docs: "📚",
  design: "💅",
  slides: "🖼",
};

// export const siteBuildSettings = netlify.SiteBuildSettings.get(
//   "docs.cuhacking.ca",
//   "145253b1-4fa5-4f73-9dcd-e6aae94dec64",
// );

  // { key: "buildCommand", header: "Build Command" },
  // { key: "deployPreviews", header: "Deploy Previews" },
  // { key: "branchDeployAllBranches", header: "Branch Deploy All Branches" },
  // { key: "stopBuilds", header: "Stop Builds" },
  // { key: "prettyUrls", header: "Pretty URLs" },
  // { key: "productionBranch", header: "Production Branch" },
  // { key: "functionsRegion", header: "Functions Region" },
  // { key: "buildImage", header: "Build Image" },
  // { key: "urn", header: "URN" },
  // { key: "lastUpdated", header: "Last Updated" }, // output<string>
  // { key: "siteId", header: "Site ID" },
  // { key: "branchDeployBranches", header: "Branch Deploy Branches" },
  // { key: "functionsDirectory", header: "Functions Directory" }, // output<string>
  // { key: "wafPolicyId", header: "WAF Policy ID" }, // output<string>
