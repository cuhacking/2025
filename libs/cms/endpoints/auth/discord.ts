// https://discord.com/developers/docs/topics/oauth2
import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";

export const discordOAuth = OAuth2Plugin({
  strategyName: "discord",
  enabled:
    typeof process.env.DISCORD_CLIENT_ID === "string" &&
    typeof process.env.DISCORD_CLIENT_SECRET === "string",
  clientId: process.env.DISCORD_CLIENT_ID || "",
  clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
  authorizePath: "/oauth2/authorize",
  callbackPath: "/oauth/discord/callback",
  authCollection: "users",
  subFieldName: 'discordSub',
  tokenEndpoint: "https://discord.com/api/oauth2/token",
  providerAuthorizationUrl: "https://discord.com/oauth2/authorize",
  serverURL: process.env.NEXT_PUBLIC_URL || "http://localhost:8000",
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
      email: user.email,
      // firstName: user.given_name,
      // lastName: user.family_name,
      // displayName: user.name,
      // mediaUrl: user.picture,
      // discordSub: user.sub,
    };
  },
  successRedirect: (req: PayloadRequest, accessToken?: string) => {
    return "/admin";
  },
  failureRedirect: (req, err) => {
    req.payload.logger.error(err);
    return "/admin/login";
  },
});
