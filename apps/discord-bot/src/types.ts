import type { AnySelectMenuInteraction, ApplicationCommandOptionType, ApplicationCommandType, AutocompleteInteraction, ButtonInteraction, ChatInputCommandInteraction, DiscordClient, Message, MessageContextMenuCommandInteraction, ModalSubmitInteraction, UserContextMenuCommandInteraction } from 'discord.js'
import type JSONdb from 'simple-json-db'

// Main Types
declare module 'discord.js' {
  export interface DiscordClient extends Client<true> {
    cooldownDB?: JSONdb
    messageCommands?: Map<string, MessageCommand>
    messageCommands_Aliases?: Map<string, string>
    events?: Map<string, ClientEvent>
    buttonCommands?: Map<string, ButtonCommand>
    selectMenus?: Map<string, SelectMenu>
    modalForms?: Map<string, ModalForm>
    slashCommands?: Map<string, SlashCommand>
    contextMenus?: Map<string, ContextMenu>
  }
}; // Extends Discord.js Client to allow for the Map caches.

export interface CommandOptions {
  allowInDms?: boolean
  allClientPermissions?: Array<bigint>
  allUserPermissions?: Array<bigint>
  anyClientPermissions?: Array<bigint>
  anyUserPermissions?: Array<bigint>
  channelCooldown?: number
  globalCooldown?: number
  guildCooldown?: number
  onlyChannels?: Array<string>
  onlyGuilds?: Array<string>
  onlyRoles?: Array<string>
  onlyUsers?: Array<string>
  ownerOnly?: boolean

  returnErrors?: boolean
  returnAllClientPermissionsError?: boolean
  returnAllUserPermissionsError?: boolean
  returnAnyClientPermissionsError?: boolean
  returnAnyUserPermissionsError?: boolean
  returnChannelCooldownError?: boolean
  returnGlobalCooldownError?: boolean
  returnGuildCooldownError?: boolean
  returnOnlyChannelsError?: boolean
  returnOnlyGuildsError?: boolean
  returnOnlyRolesError?: boolean
  returnOnlyUsersError?: boolean
  returnOwnerOnlyError?: boolean
}; // All the applicable command options

export interface MessageCommand extends CommandOptions {
  name: string
  aliases?: Array<string>
  allowBots?: boolean
  ignore?: boolean
  run: (client: DiscordClient, message: Message, args: Array<string>) => Promise<void> | void
}; // MessageCommands Interface

export interface ClientEvent {
  name: string
  runOnce?: boolean
  customEvent?: boolean
  ignore?: boolean
  run: (...args: any[]) => Promise<void> | void
}; // Events Interface

export interface ButtonCommand extends CommandOptions {
  name: string
  ignore?: boolean
  run: (interaction: ButtonInteraction<'cached'>, client: DiscordClient) => Promise<void> | void
}; // ButtonCommands Interface

export interface SelectMenu extends CommandOptions {
  name: string
  ignore?: boolean
  run: (interaction: AnySelectMenuInteraction<'cached'>, client: DiscordClient) => Promise<void> | void
}; // SelectMenus Interface

export interface ModalForm extends CommandOptions {
  name: string
  ignore?: boolean
  run: (interaction: ModalSubmitInteraction<'cached'>, client: DiscordClient) => Promise<void> | void
}; // ModalForms Interface

export interface SlashCommandOptions {
  name: string
  description: string
  required?: boolean
  autocomplete?: boolean
  choices?: Array<{
    name: string
    value: string
  }>
  type: ApplicationCommandOptionType
  options?: Array<SlashCommandOptions>
}; // Interface for slashCommands options

export interface SlashCommand extends CommandOptions {
  name: string
  description: string
  nsfw?: boolean
  guilds?: Array<string>
  ignore?: boolean
  options?: Array<SlashCommandOptions>
  autocomplete?: (interaction: AutocompleteInteraction<'cached'>, client: DiscordClient) => Promise<void> | void
  run: (interaction: ChatInputCommandInteraction<'cached'>, client: DiscordClient) => Promise<void> | void
}; // SlashCommands Interface

export interface ContextMenu extends CommandOptions {
  name: string
  type: ApplicationCommandType.Message | ApplicationCommandType.User
  guilds?: Array<string>
  ignore?: boolean
  run: (interaction: UserContextMenuCommandInteraction<'cached'> | MessageContextMenuCommandInteraction<'cached'>, client: DiscordClient) => Promise<void> | void
}; // ContextMenus Interface

export type AnyCommand = MessageCommand | ButtonCommand | SelectMenu | ModalForm | SlashCommand | ContextMenu
export type InteractionTypeOptions = 'MessageCommand' | 'SlashCommand' | 'ContextMenu' | 'SelectMenu' | 'Button' | 'ModalForm'
