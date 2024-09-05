import { Router } from 'express'
import { getAllIssues } from '../controllers/issue-controller'

const issueRouter = Router()

issueRouter.get('/issues', async (req, res) => {
  const response = await getAllIssues(req)
  res.status(200).send(response)
})

export default issueRouter
