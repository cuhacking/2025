import { promptUser } from './cli'
import { createMockStreams } from './mock-cli'

async function testCLI() {
  const { stdin, stdout } = createMockStreams(['yes'])
  await promptUser('What is your name? ', stdin, stdout)
}

testCLI().catch(err => console.error(err))
