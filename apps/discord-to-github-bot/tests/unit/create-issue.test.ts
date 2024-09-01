import { describe, expect, it } from 'vitest'
import { createIssue, isValidIssue } from '@services/create-issue'

describe('create an issue test', () => {
  it('should return true to signal that this is a valid issue format', () => {
    const mockIssue = { title: 'bug', body: 'this is a mock issue', labels: ['bug'] }
    const res = isValidIssue(mockIssue)
    expect(res).toBe(true)
  })

  it('should return false because there is no title', () => {
    const mockIssue = { title: '', body: 'this is a mock issue', labels: [''] } //
    const res = isValidIssue(mockIssue)
    expect(res).toBe(false)
  })

  it('should return false because the keys are invalid', () => {
    const mockIssue = { title: '', content: 'this is a mock issue', labels: [''] } //
    const res = isValidIssue(mockIssue)
    expect(res).toBe(false)
  })

  it('should return successfully create an issue', () => {
    const mockIssue = { title: 'bug', body: 'this is a mock issue', labels: ['bug'] }
    const res = createIssue(mockIssue)
    expect(res.message).toBe('Issue created')
  })
})
