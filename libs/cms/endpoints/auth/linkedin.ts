// learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2
import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";
import { baseConfig, linkedinStrategyConfig } from "@/cms/endpoints/auth/config";

export const linkedinOAuth = OAuth2Plugin({
  ...baseConfig,
  ...linkedinStrategyConfig,
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

