import GithubProvider from "next-auth/providers/github"
import { env } from "./env"
import { AuthOptions, getServerSession } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),

    ],
}

export const getAuthSession = async() => {
    const session = await getServerSession(authOptions);
    return session;
}



