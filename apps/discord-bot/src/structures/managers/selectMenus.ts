import type { DiscordClient } from 'discord.js'
import type { SelectMenu } from '../../types.js'
import { fileReader } from '../../utils/fileReader.js'

export async function SelectMenuManager(client: DiscordClient, rootPath: string): Promise<void> {
  const selectMenuFiles: Array<string> = fileReader(`${rootPath}/interactions/selectMenus`)
  if (!selectMenuFiles.length)
    return

  for (const selectMenuFile of selectMenuFiles) {
    const selectMenu: SelectMenu = (await import(`file:///${selectMenuFile}`))?.Menu
    if (!selectMenu)
      continue

    if (!selectMenu.ignore && selectMenu.name)
      client.selectMenus?.set(selectMenu.name, selectMenu)
  };
}
