import { gaurdAgainstInvalidGetIssueParams, getAllGitHubIssues, getIssueTemplateNames } from '../services/get-issue-templates.js'
import { getAccessToken } from '../services/auth.js'

export async function getAllIssues(req: Record<string, any>) {
  const params = req.query
  if (!gaurdAgainstInvalidGetIssueParams(params)) {
    return // SEND AN ERROR HERE --> TODO effective error handling!!
  }

  const { discordID } = params
  const accessToken = await getAccessToken(discordID)
  // ADD LOGIC HERE TO GET A SINGLE ISSUE
  const allIssues = await getAllGitHubIssues(accessToken)
  if (!allIssues) // TODO Better error handling
    return
    // Get all the issue template names
  const formatedIssues = getIssueTemplateNames(allIssues)
  return formatedIssues
}
