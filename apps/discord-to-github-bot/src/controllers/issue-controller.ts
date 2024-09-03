import { gaurdAgainstInvalidGetIssueParams, getAllGitHubIssues } from '../services/get-issue-templates.js'
import { getAccessToken } from '../services/auth.js'

export async function getAllIssues(req: Record<string, any>) {
  const params = req.query
  if (!gaurdAgainstInvalidGetIssueParams(params)) {
    return
  }

  const { discordID } = params
  const accessToken = getAccessToken(discordID)
  const allIssues = getAllGitHubIssues(accessToken)
  return allIssues
}
