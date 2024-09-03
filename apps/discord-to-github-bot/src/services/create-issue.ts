import type { GitHubIssue } from '@src/types/github-issue.js'

export function gaurdAgainstInvalidIssues(obj: any): obj is GitHubIssue {
  // List of valid keys for GitHubIssue
  const validKeys: Array<keyof GitHubIssue> = [
    'title',
    'labels',
    'body',
    'milestone',
    'assignees',
  ]

  // Check that obj is an object and not null
  if (typeof obj !== 'object' || obj === null) {
    return false
  }

  // Check that all keys in obj are valid GitHubIssue keys
  const objKeys = Object.keys(obj) as (keyof GitHubIssue)[]
  if (!objKeys.every(key => validKeys.includes(key))) {
    return false
  }

  return (
    typeof obj === 'object'
    && obj !== null
    && typeof obj.title === 'string'
    && obj.title.length !== 0
    && Array.isArray(obj.labels)
    && obj.labels.every((label: any) => typeof label === 'string')
    && typeof obj.body === 'string'
    && obj.body.length !== 0
    && (!obj.milestone || typeof obj.milestone === 'number')
    && Array.isArray(obj.assignees)
    && obj.assignees.every((assignee: any) => typeof assignee === 'string')
  )
}

export function createIssue(issueContent: object) {
  return issueContent
}
