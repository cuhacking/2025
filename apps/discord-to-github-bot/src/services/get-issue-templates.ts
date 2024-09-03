import { Octokit } from '@octokit/core'
import { GITHUB_CONFIGS } from '@src/constants.js'

export async function getAllGitHubIssues(accessToken: string) {
  if (!accessToken)
    return
  try {
    const octokit = new Octokit({ auth: accessToken })
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: GITHUB_CONFIGS.OWNER,
      repo: GITHUB_CONFIGS.REPO,
      path: GITHUB_CONFIGS.ISSUE_TEMPLATE_PATH,
      accessToken,
    })
    return response
  }
  catch {
    throw new Error('An error')
  }
}

export function gaurdAgainstInvalidGetIssueParams(obj: any): obj is { discordID: string } {
  if (typeof obj !== 'object' || obj === null)
    return false

  return (
    typeof obj === 'object'
    && obj !== null
    && typeof obj.discordID === 'string'
  )
}

export function getIssue(issueTemplate: string) {
  return issueTemplate
}

export function getIssueTemplateNames(allIssues: GitHubAPIRepoContentResponse[]): string[] {
  return allIssues.map((issue) => {
    return issue.name
  })
}
