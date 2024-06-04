import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret : "RullyOetamaPalingGanteng12345",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { username } = credentials as {
          username: string;
        };

        const user = await db.user.findUnique({
          where: { username: username },
        });

        // findout user from db
        if (!user) {
          throw new Error("username is invalid");
        }

        return {
          id: `${user.id}`,
          name: `${user.username}`,
          email : `${user.email}`
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (!user) return token;

      return {
        ...token,
        id: user.id,
        username : user.name
      };
    },
    async session({ session, token }) {
      return {
        ...session,
        user : {
          ...session.user,
          id: token.id,
          username : token.name
        }
      };
    },
  },
};
