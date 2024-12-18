import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand, InteractionTypeOptions } from '../../types.js'

import { allClientPermissionsFN } from './allClientPermissions.js'
import { allUserPermissionsFN } from './allUserPermissions.js'
import { anyClientPermissionsFN } from './anyClientPermissions.js'
import { anyUserPermissionsFN } from './anyUserPermissions.js'
import { channelCooldownFN } from './channelCooldown.js'
import { globalCooldownFN } from './globalCooldown.js'
import { guildCooldownFN } from './guildCooldown.js'
import { onlyChannelsFN } from './onlyChannels.js'
import { onlyGuildsFN } from './onlyGuilds.js'
import { onlyRolesFN } from './onlyRoles.js'
import { onlyUsersFN } from './onlyUsers.js'
import { ownerOnlyFN } from './ownerOnly.js'

export default async (client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand, interactionType: InteractionTypeOptions) => {
  const allClientPermissions: boolean = allClientPermissionsFN(client, message, command)
  const anyClientPermissions: boolean = anyClientPermissionsFN(client, message, command)
  const allUserPermissions: boolean = allUserPermissionsFN(client, message, command)
  const anyUserPermissions: boolean = anyUserPermissionsFN(client, message, command)

  const channelCooldown: boolean = await channelCooldownFN(client, message, command, interactionType)
  const globalCooldown: boolean = await globalCooldownFN(client, message, command, interactionType)
  const guildCooldown: boolean = await guildCooldownFN(client, message, command, interactionType)

  const onlyChannels: boolean = onlyChannelsFN(client, message, command)
  const onlyGuilds: boolean = onlyGuildsFN(client, message, command)
  const onlyRoles: boolean = onlyRolesFN(client, message, command)
  const onlyUsers: boolean = onlyUsersFN(client, message, command)
  const ownerOnly: boolean = ownerOnlyFN(client, message, command)

  const finalCorrection: Array<boolean> = [allClientPermissions, anyClientPermissions, allUserPermissions, anyUserPermissions, channelCooldown, guildCooldown, globalCooldown, onlyChannels, onlyGuilds, onlyRoles, onlyUsers, ownerOnly]
  if (finalCorrection.includes(false))
    return false
  else return true
}
