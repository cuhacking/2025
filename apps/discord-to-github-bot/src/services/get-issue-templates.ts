import { Octokit } from '@octokit/core'
import { GITHUB_CONFIGS } from '@src/constants'
import type { OctokitRepoContentResponse } from '@src/types/github-issue'

export async function getAllGitHubIssues(accessToken: string) {
  if (!accessToken)
    return
  try {
    const octokit = new Octokit({ auth: accessToken })
    // Integration tests
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: GITHUB_CONFIGS.OWNER,
      repo: GITHUB_CONFIGS.REPO,
      path: GITHUB_CONFIGS.ISSUE_TEMPLATE_PATH,
      accessToken,
    })
    return response
  }
  catch {
    throw new Error('AN ERROR') // TODO better error handling
  }
}

export function gaurdAgainstInvalidGetIssueParams(obj: any): obj is { discordID: string } {
  if (typeof obj !== 'object' || obj === null)
    return false
  return (
    typeof obj === 'object'
    && obj !== null
    && typeof obj.discordID === 'string'
    && (obj.issueName === undefined || typeof obj.issueName === 'string')
  )
}

export function getIssue(issueTemplate: string) {
  return issueTemplate
}

export function getIssueTemplateNames(allIssues: OctokitRepoContentResponse): string[] {
  const issueData = allIssues.data

  if (!Array.isArray(issueData))
    return []

  // a map of the issue names in an array
  return issueData.map((issue) => {
    return issue.name
  })
}
