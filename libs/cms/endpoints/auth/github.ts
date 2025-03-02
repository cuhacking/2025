import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";
import { baseConfig, githubStrategyConfig } from "@/cms/endpoints/auth/config";

export const githubOAuth = OAuth2Plugin({
  ...baseConfig,
  ...githubStrategyConfig,
  useEmailAsIdentity: true,
  scopes: [
    "user",
  ],
  getUserInfo: async (accessToken: string, req: PayloadRequest) => {
    const response = await fetch(
      "https://api.github.com/user", // fetch query params not possible
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    const user = await response.json();

    const userSocials = await fetch(
      "https://api.github.com/user/social_accounts",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    const socials = await userSocials.json()

    const userEmails = await fetch(
      "https://api.github.com/user/emails",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    const emails = await userEmails.json()

    return {
      email: emails[0].email,
      github: user.login,
      githubId: user.id,
      githubAvatarUrl: user.avatar_url,
      githubType: user.type,
      githubUrl: user.url,
      githubHtmlUrl: user.html_url,
      githubName: user.name,
      githubBlog: user.blog,
      githubLocation: user.location,
      githubHireable: user.hireable,
      githubPublicRepos: user.public_repos,
      githubLinkedIn: socials[0]?.url,
      githubInstagram: socials[2]?.url,
      githubEmail: emails[0]?.email
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

