import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserInformation, User as PrismaUser } from "@prisma/client";
import {
  type User,
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

import { env } from "~/env";
import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"] &
      PrismaUser;
  }
}

const getFirstNameAndLastName = (
  name: string,
): { firstName: string; lastName: string } => {
  const splitName = name.split(" ");
  if (splitName.length === 1) {
    return {
      firstName: splitName[0]!,
      lastName: "",
    };
  }

  if (splitName.length === 2) {
    return {
      firstName: splitName[0]!,
      lastName: splitName[1]!,
    };
  }

  return {
    firstName: name,
    lastName: "",
  };
};

const createUserEventHandler = async (message: { user: User }) => {
  const { user } = message;

  if (!user.name) return;
  const { firstName, lastName } = getFirstNameAndLastName(user.name);

  if (!user.email) return;

  // create a default UserInformation object with all values set to null
  const userInformation: UserInformation = {
    email: user.email,
    id: user.id,
    first_name: firstName,
    last_name: lastName,
    school: null,
    major: null,
    gender: null,
    date_of_birth: null,
    phone_number: null,
    levels_of_study: null,
    userId: user.id,
  };

  try {
    if (typeof user.id !== "string") {
      return;
    }
    //cannot create a link entry to User model at the same time
    await db.userInformation.create({
      data: {
        ...userInformation,
      },
    });

    await db.userInformation.update({
      where: {
        id: user.id, // Use the ID from the created record
      },
      data: {
        user: {
          connect: {
            id: user.id, // Link to the existing User
          },
        },
      },
    });
  } catch (err) {
    console.error(
      "auth.ts::createUserEventHandler - Troubling creating user",
      err,
    );
  }
};

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  events: {
    createUser: createUserEventHandler,
  },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
      strategy: "jwt",
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
