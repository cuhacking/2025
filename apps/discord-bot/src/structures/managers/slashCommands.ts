import type { DiscordClient } from 'discord.js'
import type { ContextMenu, SlashCommand, SlashCommandOptions } from '../../types.js'
import { ApplicationCommandType, REST, Routes } from 'discord.js'
import { fileReader } from '../../utils/fileReader.js'

export async function SlashManager(client: DiscordClient, rootPath: string): Promise<void> {
  const allSlashCommandsFiles = fileReader(`${rootPath}/interactions/slashCommands`)
  const allContextMenusFiles = fileReader(`${rootPath}/interactions/contextMenus`)
  const rest: REST = new REST({ version: '10' }).setToken(client.token)

  interface GlobalCommandArray {
    name: string
    nsfw?: boolean
    type: ApplicationCommandType
    description?: string
    options?: Array<SlashCommandOptions>
  };

  interface GuildCommandObjects {
    [key: string]: Array<{
      name: string
      nsfw?: boolean
      description?: string
      type: ApplicationCommandType
      options?: Array<SlashCommandOptions>
    }>
  };

  const guildCommandsObject: GuildCommandObjects = {}
  const globalCommandsArray: Array<GlobalCommandArray> = []

  if (allSlashCommandsFiles.length > 0) {
    for (const slashCommandFile of allSlashCommandsFiles) {
      const slashCommand: SlashCommand | undefined = (await import(`file:///${slashCommandFile}`))?.Slash
      if (!slashCommand)
        continue

      if (slashCommand?.ignore || !slashCommand?.name || !slashCommand.description)
        continue
      client.slashCommands?.set(slashCommand.name, slashCommand)

      if (slashCommand.guilds && Array.isArray(slashCommand.guilds)) {
        for (const guild of slashCommand.guilds) {
          if (!guildCommandsObject[guild])
            guildCommandsObject[guild] = []

          guildCommandsObject[guild].push({
            name: slashCommand.name,
            nsfw: slashCommand.nsfw ?? false,
            description: slashCommand.description,
            type: ApplicationCommandType.ChatInput,
            options: slashCommand.options ?? [],
          })
        };
      }
      else {
        globalCommandsArray.push({
          name: slashCommand.name,
          nsfw: slashCommand.nsfw ?? false,
          description: slashCommand.description,
          type: ApplicationCommandType.ChatInput,
          options: slashCommand.options ?? [],
        })
      }
    };
  };

  if (allContextMenusFiles.length > 0) {
    for (const contextMenuFile of allContextMenusFiles) {
      const contextMenu: ContextMenu | undefined = (await import(`file:///${contextMenuFile}`))?.Context
      if (!contextMenu)
        continue

      if (contextMenu?.ignore || !contextMenu?.name || !contextMenu?.type)
        continue
      client.contextMenus?.set(contextMenu.name, contextMenu)

      if (contextMenu.guilds && Array.isArray(contextMenu.guilds)) {
        for (const guild of contextMenu.guilds) {
          if (!guildCommandsObject[guild])
            guildCommandsObject[guild] = []

          guildCommandsObject[guild].push({
            name: contextMenu.name,
            type: contextMenu.type,
          })
        };
      }

      else {
        globalCommandsArray.push({
          name: contextMenu.name,
          type: contextMenu.type,
        })
      }
    };
  };

  // try {
  await rest.put(Routes.applicationCommands(client.application.id), {
    body: globalCommandsArray,
  })

  for (const guildObject of Object.entries(guildCommandsObject)) {
    await rest.put(Routes.applicationGuildCommands(client.application.id, guildObject[0]), {
      body: guildObject[1],
    })
  };
  // }
  // catch (error: unknown) {
  //   console.log(error)
  // };
}
