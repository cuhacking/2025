import type { DiscordClient } from 'discord.js'
import type { ButtonCommand, ClientEvent, ContextMenu, MessageCommand, ModalForm, SelectMenu, SlashCommand } from './types.js'
import { dirname } from 'node:path'
import { Client, GatewayIntentBits, Partials } from 'discord.js'
import JSONdb from 'simple-json-db'
import { BOT_TOKEN } from './config.js'
import { ButtonManager } from './structures/managers/buttonCommands.js'
import { EventManager } from './structures/managers/events.js'
import { MessageCMDManager } from './structures/managers/messageCommands.js'
import { ModalManager } from './structures/managers/modalForms.js'
import { SelectMenuManager } from './structures/managers/selectMenus.js'
import { SlashManager } from './structures/managers/slashCommands.js'

const __dirname: string = dirname(import.meta.url)
export const rootPath = __dirname;

(async (): Promise<void> => {
  const client: DiscordClient = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent, // Only for bots with message content intent access.
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildInvites,
    ],
    partials: [Partials.Channel],
  })

  client.cooldownDB = new JSONdb('./cooldownDB.json')

  client.messageCommands = new Map<string, MessageCommand>()
  client.messageCommands_Aliases = new Map<string, string>()
  client.events = new Map<string, ClientEvent>()
  client.buttonCommands = new Map<string, ButtonCommand>()
  client.selectMenus = new Map<string, SelectMenu>()
  client.modalForms = new Map<string, ModalForm>()
  client.contextMenus = new Map<string, ContextMenu>()
  client.slashCommands = new Map<string, SlashCommand>()

  await MessageCMDManager(client, __dirname)
  await EventManager(client, __dirname)
  await ButtonManager(client, __dirname)
  await SelectMenuManager(client, __dirname)
  await ModalManager(client, __dirname)
  await client.login(BOT_TOKEN)
  await SlashManager(client, __dirname) // Includes context menu handling as they belong to same command type.
})()
