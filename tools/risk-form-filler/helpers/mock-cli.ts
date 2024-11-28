import { Readable, Writable } from 'node:stream'

export function createMockStreams(inputs: string[]): { stdin: Readable, stdout: Writable, output: string[] } {
  const output: string[] = []

  const stdin = new Readable({
    read() {
      if (inputs.length > 0) {
        this.push(`${inputs.shift()}\n`)
      }
      else {
        this.push(null)
      }
    },
  })

  const stdout = new Writable({
    write(chunk, _encoding, callback) {
      output.push(chunk.toString())
      callback()
    },
  })

  return { stdin, stdout, output }
}
