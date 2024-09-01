import { describe, expect, it } from 'vitest'
import { getAllIssues, getIssue } from '@services/get-issue-templates'

describe('retrieving issue tests', () => {
  it('should recieve the name of all issue tempaltes', () => {
    const res = getAllIssues()
    expect(res).toBe(['architectural-design-record--adr-.md', 'bug_report.md', 'feature-improvement.md', 'task.md'])
  })
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
})
