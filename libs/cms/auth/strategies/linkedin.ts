import { Payload, PayloadRequest } from "payload";
import { OAuth2Plugin } from "payload-oauth2";
import { linkedinStrategyConfig } from "@/cms/auth/config";
import { generateEmail } from "@/cms/utils";
import { getOrUploadMedia } from "@/db/seed";

async function fetchLinkedInProfileData(accessToken: string) {
  try {
    const headers = { Authorization: `Bearer ${accessToken}` };

    const response = await fetch(
      `https://api.linkedin.com/v2/me?projection=(id,vanityName,profilePicture(displayImage~:playableStreams))`,
      { headers },
    );

    if (!response.ok)
      throw new Error(
        `Failed to fetch LinkedIn profile: ${response.statusText}`,
      );

    const data = await response.json();
    const imageStreams =
      data?.profilePicture?.["displayImage~"]?.elements || [];
    const imageUrl = imageStreams.length
      ? imageStreams[imageStreams.length - 1]?.identifiers?.[0]?.identifier
      : null;

    return {
      id: data.id,
      vanityName: data.vanityName,
      imageUrl,
    };
  } catch (error) {
    console.error(`⚠ Error fetching LinkedIn profile: ${error.message}`);
    return { id: null, vanityName: null, imageUrl: null };
  }
}

export const linkedinOAuth = OAuth2Plugin({
  useEmailAsIdentity: true,
  scopes: ["openid", "email", "profile", "r_basicprofile"],
  getUserInfo: async (accessToken: string, req: PayloadRequest) => {
    const headers = { Authorization: `Bearer ${accessToken}` };

    const user = await fetch(
      "https://api.linkedin.com/v2/userinfo?fields=email_verified,name,locale,given_name,family_name,email",
      { headers },
    ).then((res) => res.json());

      const { id, vanityName, imageUrl } =
        await fetchLinkedInProfileData(accessToken);

const existingUserByEmail = await req.payload.find({
  collection: "users",
  where: {
    email: {
      equals: user?.email,
    },
  },
  limit: 1,
});

      const hackathonResult = await req.payload.find({
        collection: "hackathons",
        where: { year: { equals: 2025 } },
        pagination: false,
      });

      const hackathon = hackathonResult.docs[0] || null;

      const groupResult = await req.payload.find({
        collection: "groups",
        where: { name: { equals: "Hacker" } },
        pagination: false,
      });

      const group = groupResult.docs[0] || null;

  const filename = `${user.given_name.toLowerCase()}-${user.family_name.toLowerCase()}-avatar.png`;
  const avatarId = imageUrl
    ? await getOrUploadMedia(
        req.payload,
        req,
        imageUrl,
        filename,
        `${user.given_name} ${user.family_name}'s avatar`,
      )
    : null;

if (existingUserByEmail.docs.length === 0 || existingUserByEmail.docs[0].avatar === null) {
  await req.payload.sendEmail({
    to: user.email,
    subject: "Welcome to cuHacking 2025",
    html: await generateEmail(),
  });

return {
  email: user.email,
  hackathons: hackathon ? hackathon.id : undefined ,
  group: group ? group.id : undefined,
  firstName: user.given_name,
  lastName: user.family_name,
  preferredDisplayName: user.name,
  avatar: avatarId,
  linkedinId: id,
  linkedinVanity: vanityName,
  linkedinEmailVerified: user.email_verified,
  linkedinLocale: user.locale,
};
}

return {
  email: existingUserByEmail.docs[0].email || user.email,
  firstName: user.given_name,
  lastName: user.family_name,
  preferredDisplayName: user.name,
  avatar: avatarId || existingUserByEmail.docs[0]?.avatar,
  linkedinId: id,
  linkedinVanity: vanityName,
  linkedinEmailVerified: user.email_verified,
  linkedinLocale: user.locale,
};
  },
  ...linkedinStrategyConfig,
});
