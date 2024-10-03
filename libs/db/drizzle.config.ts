import { defineConfig } from 'drizzle-kit'

// import { envWebsiteDb } from "@cuhacking/env";

export default defineConfig({
  dialect: 'postgresql',
  schema: './libs/db/src/schema/index.ts',
  out: './drizzle',
  dbCredentials: {
    url: `postgresql://postgres:password@localhost:5432/hackathon`,
  },
})
