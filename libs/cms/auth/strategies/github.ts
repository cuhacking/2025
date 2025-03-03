import { PayloadRequest } from "payload";
import { OAuth2Plugin } from "payload-oauth2";
import { githubStrategyConfig } from "@/cms/auth/config";

export const githubOAuth = OAuth2Plugin({
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

const findBestEmail = async () => {
  let selectedEmail = null;

  for (const emailObj of emails) {
    if (emailObj.verified) {
      const existingUser = await req.payload.find({
        collection: "users",
        where: { email: { equals: emailObj.email } },
      });

      if (existingUser.docs.length > 0) {
        return emailObj.email;
      }

      if (emailObj.primary && !selectedEmail) {
        selectedEmail = emailObj.email;
      } else if (!selectedEmail) {
        selectedEmail = emailObj.email;
      }
    }
  }

  return selectedEmail; // Return the best email found
};

const bestEmail = await findBestEmail();

const linkedinUrl = socials.find(social => social.provider === "linkedin")?.url || null;
const instagramUrl = socials.find(social => social.provider === "instagram")?.url || null;

    return {
      email: bestEmail,
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
 githubLinkedin: linkedinUrl,
  githubInstagram: instagramUrl,
      githubEmail: bestEmail,
    };
  },
  ...githubStrategyConfig
});
