import { PayloadRequest } from "payload";
import { OAuth2Plugin, defaultGetToken } from "payload-oauth2";

export const googleOAuth = OAuth2Plugin({
  enabled:
    typeof process.env.GOOGLE_CLIENT_ID === "string" &&
    typeof process.env.GOOGLE_CLIENT_SECRET === "string",
  strategyName: "google",
  useEmailAsIdentity: true,
  serverURL: process.env.NEXT_PUBLIC_URL || "http://localhost:8000",
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  authorizePath: "/oauth/google",
  callbackPath: "/oauth/google/callback",
  authCollection: "users",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  scopes: [
    "openid",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],
  providerAuthorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",

getUserInfo: async (accessToken: string, req: PayloadRequest) => {
  const response = await fetch(
     // https://cloud.google.com/identity-platform/docs/reference/rest/v1/UserInfo
    "https://www.googleapis.com/oauth2/v3/userinfo",
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  const user = await response.json();

// const existingUser = await req.payload.find({
//         collection: 'users',
//         where: {
//           email: {
//             equals: req.user?.email,
//           },
//         },
//         limit: 1,
//       })

//       if (!existingUser.docs || existingUser.docs.length === 0) {
//         console.log('Creating new user for:', req.user)

//         const newUser = await req.payload.create({
//           collection: 'users',
//           data: {
//             email: req.user?.email,
//             displayName: req.user?.displayName,
//             mediaUrl: req.user?.photoUrl
//             // roles: ['hacker'],
//           },
//         })
//         return {
//           ...newUser,
//           // roles: ['customer'],
//         }
//       }

//   console.log('Found existing user:', existingUser.docs[0])
//       const userFromDB = existingUser.docs[0]

  return {
      email: user.email,
      displayName: user.name,
    firstName: user.given_name,
    lastName: user.family_name,
      mediaUrl: user.photoUrl,
      googleSub: user.sub,
      googleEmailVerified: user.email_verified,
  };
},
  getToken: async (code: string, req: PayloadRequest) => {
    const redirectUri = `${process.env.NEXT_PUBLIC_URL || "http://localhost:8000"}/api/users/oauth/google/callback`;
    const token = await defaultGetToken(
      "https://oauth2.googleapis.com/token",
      process.env.GOOGLE_CLIENT_ID || "",
      process.env.GOOGLE_CLIENT_SECRET || "",
      redirectUri,
      code,
    );

    ////////////////////////////////////////////////////////////////////////////
    // Consider this section afterToken hook
    ////////////////////////////////////////////////////////////////////////////
    // req.payload.logger.info(`Received token: ${token} 👀`);

    if (req.user) {
      req.payload.update({
        collection: "users",
        data: {
    email: req.user?.email,
    firstName: req.user.given_name,
    lastName: req.user.family_name,
      mediaUrl: req.user.photoUrl,
      googleSub: req.user.sub,
      googleEmailVerified: req.user.email_verified,
        },
      });
    };

    return token;
  },

  successRedirect: (req: PayloadRequest, accessToken?: string) => {
    return "/admin";
 // const user = req.user
 //    if (user && Array.isArray(user.roles)) {
 //      if (user.roles.includes('admin')) {
 //        return '/admin'
 //      }
 //    }
 //    return '/' // Default redirect for customers
  },
  failureRedirect: (req, err) => {
    req.payload.logger.error(err);
    return "/admin/login";
  },
});
