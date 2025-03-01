import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";

export const githubOAuth = OAuth2Plugin({
  strategyName: "github",
  enabled:
    typeof process.env.GITHUB_CLIENT_ID === "string" &&
    typeof process.env.GITHUB_CLIENT_SECRET === "string",
  clientId: process.env.GITHUB_CLIENT_ID || "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  authorizePath: "/oauth/github",
  callbackPath: "/oauth/github/callback",
  authCollection: "users",
  subFieldName: 'githubSub',
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  providerAuthorizationUrl: "https://github.com/login/oauth/authorize",
  serverURL: process.env.NEXT_PUBLIC_URL || "http://localhost:8000",
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

    console.log(user)

    const userSocials = await fetch(
      "https://api.github.com/user/social_accounts",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    const socials = await userSocials.json()

    console.log(socials)

    const userEmails = await fetch(
      "https://api.github.com/user/emails",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    const emails = await userEmails.json()

    console.log(emails)

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

