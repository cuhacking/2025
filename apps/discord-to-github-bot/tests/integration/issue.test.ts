import request from 'supertest'
import app from '@src/server'
import { describe, expect, it } from 'vitest'

describe('get-issue template integration tests', () => {
  it('should send an object back of all issues', async () => {
    const res = await request(app).get('/api/issues?discordID=123')
    expect(res.body).toStrictEqual([
      'architectural-design-record--adr-.md',
      'bug_report.md',
      'feature-improvement.md',
      'task.md',
    ])
  })
  it ('should return the content of a bug issue', async () => {
    const res = await request(app).get('/api/issue?discordID=123&issueName=bug_report.md')
    expect(res.body).toEqual(
      'EXAMPLE OF A BUG REPORT CONTENT, INCOMPLETE FOR THE DEMO',
    )
  })
})
