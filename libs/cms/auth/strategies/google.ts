import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";
import { googleStrategyConfig } from "@/cms/auth/config"

export const googleOAuth = OAuth2Plugin({
  useEmailAsIdentity: true,
  scopes: [
    "openid",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],

getUserInfo: async (accessToken: string, req: PayloadRequest) => {
  const response = await fetch(
     // https://cloud.google.com/identity-platform/docs/reference/rest/v1/UserInfo
    "https://www.googleapis.com/oauth2/v3/userinfo",
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  const user = await response.json();

const existingUser = await req.payload.find({
        collection: 'users',
        where: {
          email: {
            equals: req.user?.email,
          },
        },
        limit: 1,
      })

      if (!existingUser.docs || existingUser.docs.length === 0) {
      }

        // console.log('Creating new user for:', req.user)

        // const newUser = await req.payload.create({
        //   collection: 'users',
        //   data: {
        //     email: req.user?.email,
        //     displayName: req.user?.displayName,
        //     mediaUrl: req.user?.photoUrl
        //     // roles: ['hacker'],
        //   },
        // })
        // return {
        //   ...newUser,
        //   // roles: ['customer'],
        // }

//   console.log('Found existing user:', existingUser.docs[0])
//       const userFromDB = existingUser.docs[0]

  return {
    email: user.email,
    googleEmail: user.email,
      googleEmailVerified: user.email_verified,
  };
},
  // getToken: async (code: string, req: PayloadRequest) => {
  //   const redirectUri = `${process.env.CUHACKING_2025_AXIOM_PUBLIC_URL || "http://localhost:8000"}/api/users/oauth/google/callback`;
  //   const token = await defaultGetToken(
  //     "https://oauth2.googleapis.com/token",
  //     process.env.GOOGLE_CLIENT_ID || "",
  //     process.env.GOOGLE_CLIENT_SECRET || "",
  //     redirectUri,
  //     code,
  //   );

  //   ////////////////////////////////////////////////////////////////////////////
  //   // Consider this section afterToken hook
  //   ////////////////////////////////////////////////////////////////////////////
  //   // req.payload.logger.info(`Received token: ${token} 👀`);
  //   if (req.user) {
  //     req.payload.update({
  //       collection: "users",
  //       data: {
  //   email: req.user?.email,
  //   firstName: req.user.given_name,
  //   lastName: req.user.family_name,
  //     mediaUrl: req.user.photoUrl,
  //     googleSub: req.user.sub,
  //     googleEmailVerified: req.user.email_verified,
  //       },
  //     });
  //   };

  //   return token;
  // },
  ...googleStrategyConfig,
});
