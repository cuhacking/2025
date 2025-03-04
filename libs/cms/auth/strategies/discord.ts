// https://discord.com/developers/docs/topics/oauth2
import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";
import { discordStrategyConfig } from "@/cms/auth/config"

export const discordOAuth = OAuth2Plugin({
  useEmailAsIdentity: true,
  scopes: [
    "identify",
    "email",
  ],
  getUserInfo: async (accessToken: string, req: PayloadRequest) => {
    const response = await fetch(
      `https://discord.com/api/v10/users/@me`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    console.log(accessToken)
    const user = await response.json();

    return {
      email: user.email,
      discordUsername: user.username,
      discordVerified: user.verified,
      discordDiscriminator: user.discriminator,
      discordId: user.id,
      discordGlobalName: user.global_name,
      discordLocale: user.locale,
    };
  },
  ...discordStrategyConfig,
});
