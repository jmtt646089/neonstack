
import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();
console.log(process.env.DATABASE_URL);

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  driver: 'neon',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schemaFilter: ['public', 'neon_auth'],
});
