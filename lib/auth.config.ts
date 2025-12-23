import { NextAuthConfig, Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import { googleSignIn } from "@/actions/signin";

export const authOptions = {
    providers: [Google],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider == 'google') {
                try {
                    const body = {
                        providerId: account.provider,
                        providerAccountId: account.providerAccountId,
                        accessToken: account.access_token ?? null,
                        refreshToken: account.refresh_token ?? null,
                        accessTokenExpires: account.expires_at
                            ? new Date(account.expires_at * 1000)
                            : null,
                        user: {
                            name: user.name,
                            email: user.email,
                            image: user.image,
                        },
                    }
                    const res = await googleSignIn(body)
                    if (res?.user?.id) {
                        user.id = res.user.id;
                    }
                    if (res.status == "failed") {
                        console.log(res)
                        console.error('Failed signing in with google', res.statusText);
                        return false;
                    }
                } catch (e) {
                    console.error('Error signing in with google', e);
                    return false;
                }
            }
            return true;
        },
        jwt: async ({ token }: { user?: User | AdapterUser; token: JWT }): Promise<JWT> => {
            return token;
        },
        session: async ({ session, token }: { session: Session; token: JWT }): Promise<Session> => {
            if (session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth"
    }
} satisfies NextAuthConfig;
