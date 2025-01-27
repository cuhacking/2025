#!/usr/bin/env node

import { spawn } from 'node:child_process'

const env = { ...process.env }

// If running the web server then prerender pages
if (process.argv.slice(-2).join(' ') === 'node index.js') {
  await exec('npx next build --experimental-build-mode generate')
}

// launch application
await exec(process.argv.slice(2).join(' '))

function exec(command) {
  const child = spawn(command, { shell: true, stdio: 'inherit', env })
  return new Promise((resolve, reject) => {
    child.on('exit', code => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`${command} failed rc=${code}`))
      }
    })
  })
}
