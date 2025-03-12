import { PayloadRequest } from "payload";

export const baseConfig = {
  serverURL: process.env.NODE_ENV==="development" ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL,
  authCollection: 'users',
  successRedirect: (req: PayloadRequest, accessToken?: string) => {
const user = req.user;

  const returnURL =  process.env.NODE_ENV === 'development' ? `${process.env.CUHACKING_2025_PORTAL_LOCAL_URL}/login` : `${process.env.CUHACKING_2025_PORTAL_PUBLIC_URL}/login`

  if (user) {
    if (user.id === 1 || user.group?.name === "Organizer") {
      return '/admin'
    }
    else {
      return returnURL
    }
  }

  return "/";
},
  failureRedirect: (req: PayloadRequest, err) => {
    req.payload.logger.error(err);
    return "/";
  },
}

export const githubStrategyConfig = {
  strategyName: "github",
  clientId: process.env.GITHUB_CLIENT_ID || "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  authorizePath: "/oauth/github",
  callbackPath: "/oauth/github/callback",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  providerAuthorizationUrl: "https://github.com/login/oauth/authorize",
  enabled:
    typeof process.env.GITHUB_CLIENT_ID === "string" &&
    typeof process.env.GITHUB_CLIENT_SECRET === "string",
  ...baseConfig
};

export const linkedinStrategyConfig = {
  strategyName: "linkedin",
  clientId: process.env.LINKEDIN_CLIENT_ID || "",
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
  authorizePath: "/oauth/linkedin",
  callbackPath: "/oauth/linkedin/callback",
  tokenEndpoint: "https://www.linkedin.com/oauth/v2/accessToken",
  providerAuthorizationUrl: "https://www.linkedin.com/oauth/v2/authorization",
  enabled:
    typeof process.env.LINKEDIN_CLIENT_ID === "string" &&
    typeof process.env.LINKEDIN_CLIENT_SECRET === "string",
  ...baseConfig
};

export const discordStrategyConfig = {
  strategyName: "discord",
  clientId: process.env.DISCORD_CLIENT_ID || "",
  clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
  authorizePath: "/oauth/discord",
  callbackPath: "/oauth/discord/callback",
  tokenEndpoint: "https://discord.com/api/oauth2/token",
  providerAuthorizationUrl: "https://discord.com/oauth2/authorize",
  enabled:
    typeof process.env.DISCORD_CLIENT_ID === "string" &&
    typeof process.env.DISCORD_CLIENT_SECRET === "string",
  ...baseConfig
};

export const googleStrategyConfig = {
  strategyName: "google",
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  authorizePath: "/oauth/google",
  callbackPath: "/oauth/google/callback",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  providerAuthorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",
  enabled:
    typeof process.env.GOOGLE_CLIENT_ID === "string" &&
    typeof process.env.GOOGLE_CLIENT_SECRET === "string",
  ...baseConfig
};
