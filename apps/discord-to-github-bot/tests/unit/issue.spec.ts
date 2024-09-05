import { describe, expect, it } from 'vitest'
import { getIssue, getIssueTemplateNames } from '@services/get-issue-templates'
import { gaurdAgainstInvalidIssues } from '@services/create-issue'

describe('retrieving issue tests', () => {
  it('should recieve the issue template for a Bug Report', () => {
    const res = getIssue('bug_report.md')
    expect(res.name).toBe('Bug Report')
  })
  it('should recieve the issue template for an ADR', () => {
    const res = getIssue('bug_report.md')
    expect(res.name).toBe('Bug Report')
  })
  it('should recieve the issue template for a doc', () => {
    const res = getIssue('docs.md')
    expect(res.name).toBe('Docs')
  })
  it('should recieve the issue template for a feature', () => {
    const res = getIssue('feature.md')
    expect(res.name).toBe('feature')
  })
  it('should recieve no issue tempalte', () => {
    const res = getIssue('not-a-real-issue.md')
    expect(res.name).toBe('invalid')
  })

  it('should return an array with all the issue template names', () => {
    const mockIssueTemplates = {
      data:
      [
        {
          name: 'template-1.md',
          content: 'content 1',
          labels: ['label 1'],
        },
        {
          name: 'template-2.md',
          content: 'content 2',
          labels: ['label 1', 'label 2'],
        },
        {
          name: 'template-3.md',
          content: 'content 3',
          labels: ['label 3'],
        },
      ],
    }
    const res = getIssueTemplateNames(mockIssueTemplates)
    expect(res).toStrictEqual(['template-1.md', 'template-2.md', 'template-3.md'])
  })
})

describe('create an issue test', () => {
  it('should return true to signal that this is a valid issue format', () => {
    const mockIssue = { title: 'Found a bug', body: 'I\'m having a problem with this.', labels: ['bug'], assignees: [] }
    const res = gaurdAgainstInvalidIssues(mockIssue)
    expect(res).toBe(true)
  })

  it('should return false because there is no title content', () => {
    const mockIssue = { title: '', body: 'this is a mock issue', labels: [''] }
    const res = gaurdAgainstInvalidIssues(mockIssue)
    expect(res).toBe(false)
  })

  it('should return false because the keys are invalid', () => {
    const mockIssue = { title: '', content: 'this is a mock issue', labels: [''] }
    const res = gaurdAgainstInvalidIssues(mockIssue)
    expect(res).toBe(false)
  })
})
