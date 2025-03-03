// https://discord.com/developers/docs/topics/oauth2
import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";
import { discordStrategyConfig } from "@/cms/auth/config"

export const discordOAuth = OAuth2Plugin({
  useEmailAsIdentity: true,
  scopes: [
    "identify",
    "email",
    "openid"
  ],
  getUserInfo: async (accessToken: string, req: PayloadRequest) => {
    const response = await fetch(
      `https://discord.com/api/v10`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    const user = await response.json();

    return {
      // email: user.email,
      // firstName: user.given_name,
      // lastName: user.family_name,
      // displayName: user.name,
      // mediaUrl: user.picture,
      // discordSub: user.sub,
    };
  },
  ...discordStrategyConfig,
});
