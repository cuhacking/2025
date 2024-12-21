import { existsSync, readdirSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export function fileReader(dir: string): Array<string> {
  dir = fileURLToPath(dir)
  if (!existsSync(dir))
    return []
  const files: Array<string> = []
  const directoryData = readdirSync(dir)

  for (const file of directoryData) {
    const filePath = join(dir, file)
    const stats = statSync(filePath)

    if (stats.isFile() && extname(filePath) === '.js')
      files.push(filePath)
    else if (stats.isDirectory())
      files.push(...fileReader(`file:///${filePath}`))
  };

  return files
}
