import { describe, expect, it } from 'vitest'
import { verifyCorrectMessage } from '@services/slash-command-verification'

describe('slash commands tests', () => {
  it('should identify message as a slash command to create an issue', () => {
    const message = '/create-issue'
    const res = verifyCorrectMessage(message)
    expect(res).toBe('create-issue')
  })
  it('should identify message as a slash command to retrieve all issue templates', () => {
    const message = '/issue-templates'
    const res = verifyCorrectMessage(message)
    expect(res).toBe('retrieve-issue-templates')
  })
  it ('should identify message as a non-special slash command', () => {
    const message = '/nothing'
    const res = verifyCorrectMessage(message)
    expect(res).toBe('command not found')
  })
})
