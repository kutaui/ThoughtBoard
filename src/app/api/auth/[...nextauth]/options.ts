import GitHub from 'next-auth/providers/GitHub';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/db';

export const options = {
    adapter: DrizzleAdapter(db),
    providers: [GitHub({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || ''
    })],

    callbacks: {
// @ts-ignore
        async session({session, user}) {
            session.user.id = user.id
            return session
        },
    }

};