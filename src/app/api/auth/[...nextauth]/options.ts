import Github from 'next-auth/providers/github'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { GithubProfile } from "next-auth/providers/github"
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          role: profile.role ?? "user",
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
}
