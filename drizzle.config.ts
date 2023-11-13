import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config({
    path: '.env.local',
});


export default {
    schema: './src/db/schema',
    out: './drizzle',
    driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        uri: process.env.DATABASE_URL!,
    },
} satisfies Config;