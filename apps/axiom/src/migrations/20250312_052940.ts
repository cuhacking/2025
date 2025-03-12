import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "2025_website_header_links" RENAME COLUMN "text" TO "name";
  ALTER TABLE "_2025_v_version_website_header_links" RENAME COLUMN "text" TO "name";
  ALTER TABLE "2025" ADD COLUMN "website_title" varchar;
  ALTER TABLE "2025" ADD COLUMN "website_organization" varchar;
  ALTER TABLE "2025" ADD COLUMN "website_date" varchar;
  ALTER TABLE "2025" ADD COLUMN "website_button_text" varchar;
  ALTER TABLE "2025" ADD COLUMN "website_link" varchar;
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';
  ALTER TABLE "users" ADD COLUMN "hackathons_id" integer;
  ALTER TABLE "_users_v" ADD COLUMN "version_hackathons_id" integer;
  ALTER TABLE "_2025_v" ADD COLUMN "version_website_title" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_website_organization" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_website_date" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_website_button_text" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_website_link" varchar;
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_hackathons_id_hackathons_id_fk" FOREIGN KEY ("hackathons_id") REFERENCES "public"."hackathons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_version_hackathons_id_hackathons_id_fk" FOREIGN KEY ("version_hackathons_id") REFERENCES "public"."hackathons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_hackathons_idx" ON "users" USING btree ("hackathons_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_hackathons_idx" ON "_users_v" USING btree ("version_hackathons_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "2025_website_header_links" RENAME COLUMN "name" TO "text";
  ALTER TABLE "_2025_v_version_website_header_links" RENAME COLUMN "name" TO "text";
  ALTER TABLE "users" DROP CONSTRAINT "users_hackathons_id_hackathons_id_fk";
  
  ALTER TABLE "_users_v" DROP CONSTRAINT "_users_v_version_hackathons_id_hackathons_id_fk";
  
  DROP INDEX IF EXISTS "users_hackathons_idx";
  DROP INDEX IF EXISTS "_users_v_version_version_hackathons_idx";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "website_title";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "website_organization";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "website_date";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "website_button_text";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "website_link";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "hackathons_id";
  ALTER TABLE "_users_v" DROP COLUMN IF EXISTS "version_hackathons_id";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_website_title";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_website_organization";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_website_date";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_website_button_text";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_website_link";`)
}
