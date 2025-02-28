// learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2
import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";

export const linkedinOAuth = OAuth2Plugin({
  strategyName: "linkedin",
  enabled:
    typeof process.env.LINKEDIN_CLIENT_ID === "string" &&
    typeof process.env.LINKEDIN_CLIENT_SECRET === "string",
  clientId: process.env.LINKEDIN_CLIENT_ID || "",
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
  authorizePath: "/oauth/linkedin",
  callbackPath: "/oauth/linkedin/callback",
  authCollection: "users",
  subFieldName: 'linkedinSub',
  tokenEndpoint: "https://www.linkedin.com/oauth/v2/accessToken",
  providerAuthorizationUrl: "https://www.linkedin.com/oauth/v2/authorization",
  serverURL: process.env.NEXT_PUBLIC_URL || "http://localhost:8000",
  useEmailAsIdentity: true,
  scopes: [
    "openid",
    "email",
    "profile",
    "r_basicprofile",
  ],
  getUserInfo: async (accessToken: string, req: PayloadRequest) => {
    const response = await fetch(
      "https://api.linkedin.com/v2/userinfo?fields=sub,email_verified,name,locale,given_name,family_name,email,picture",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    const user = await response.json();

    const vanityResponse = await fetch(
      "https://api.linkedin.com/v2/me?fields=id,vanityName",
      {headers: {Authorization: `Bearer ${accessToken}`}},
    )

    const userVanity = await vanityResponse.json();

    return {
      email: user.email,
      firstName: user.given_name,
      lastName: user.family_name,
      displayName: user.name,
      mediaUrl: user.picture,
      linkedinSub: user.sub,
      linkedinId: user.id,
      linkedinEmailVerified: user.email_verified,
      linkedinLocale: user.locale,
      linkedin: userVanity.vanityName
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

