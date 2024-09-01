/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import process from 'node:process'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to discord-to-github-bot!' })
})

const port = process.env.PORT || 3333
const server = app.listen(port, () => {
})
server.on('error', console.error)
