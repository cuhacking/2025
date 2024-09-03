import { Router } from 'express'
import { getAllIssues } from '../controllers/issue-controller.js'

const issueRouter = Router()

issueRouter.get('/issues', (req, res) => {
  res.send(getAllIssues(req))
})

export default issueRouter
