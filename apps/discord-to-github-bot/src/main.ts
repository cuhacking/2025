import process from 'node:process'
import app from './server'

const port = process.env.DISCORD_TO_GITHUB_PORT || 3333
const server = app.listen(port)

server.on('error', console.error)
