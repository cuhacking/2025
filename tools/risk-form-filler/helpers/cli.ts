import process from 'node:process'
import readline from 'node:readline'

async function promptUser(question: string, input: NodeJS.ReadableStream = process.stdin, output: NodeJS.WritableStream = process.stdout): Promise<string> {
  const rl = readline.createInterface({ input, output })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

export async function runCLI() {
  console.log(promptUser('Is this information correct? Otherwise change the input file... (yes/y to proceed): '))
}
