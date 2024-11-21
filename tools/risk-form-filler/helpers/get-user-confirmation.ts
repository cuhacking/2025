import process from 'node:process'

import readline from 'node:readline'

export async function getUserConfirmation(prompt: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const answer = await new Promise<string>((resolve) => {
    rl.question(prompt, (response) => {
      rl.close()
      resolve(response.trim().toLowerCase())
    })
  })

  return answer === 'yes' || answer === 'y'
}
