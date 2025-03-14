import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_portal_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__portal_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "portal" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"login" varchar,
  	"terms_title" varchar DEFAULT 'Legalities',
  	"terms_description" varchar DEFAULT 'YO! Before we get into it, read these please.',
  	"profile" varchar,
  	"registration" varchar,
  	"_status" "enum_portal_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "_portal_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_login" varchar,
  	"version_terms_title" varchar DEFAULT 'Legalities',
  	"version_terms_description" varchar DEFAULT 'YO! Before we get into it, read these please.',
  	"version_profile" varchar,
  	"version_registration" varchar,
  	"version__status" "enum__portal_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "2025_portal_cards" RENAME TO "portal_cards";
  ALTER TABLE "2025_portal_terms_accordion" RENAME TO "portal_terms_accordion";
  ALTER TABLE "_2025_v_version_portal_cards" RENAME TO "_portal_v_version_cards";
  ALTER TABLE "_2025_v_version_portal_terms_accordion" RENAME TO "_portal_v_version_terms_accordion";
  ALTER TABLE "portal_cards" DROP CONSTRAINT "2025_portal_cards_parent_id_fk";
  
  ALTER TABLE "portal_terms_accordion" DROP CONSTRAINT "2025_portal_terms_accordion_parent_id_fk";
  
  ALTER TABLE "_portal_v_version_cards" DROP CONSTRAINT "_2025_v_version_portal_cards_parent_id_fk";
  
  ALTER TABLE "_portal_v_version_terms_accordion" DROP CONSTRAINT "_2025_v_version_portal_terms_accordion_parent_id_fk";
  
  DROP INDEX IF EXISTS "2025_portal_cards_order_idx";
  DROP INDEX IF EXISTS "2025_portal_cards_parent_id_idx";
  DROP INDEX IF EXISTS "2025_portal_terms_accordion_order_idx";
  DROP INDEX IF EXISTS "2025_portal_terms_accordion_parent_id_idx";
  DROP INDEX IF EXISTS "_2025_v_version_portal_cards_order_idx";
  DROP INDEX IF EXISTS "_2025_v_version_portal_cards_parent_id_idx";
  DROP INDEX IF EXISTS "_2025_v_version_portal_terms_accordion_order_idx";
  DROP INDEX IF EXISTS "_2025_v_version_portal_terms_accordion_parent_id_idx";
  CREATE INDEX IF NOT EXISTS "portal__status_idx" ON "portal" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_portal_v_version_version__status_idx" ON "_portal_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_portal_v_created_at_idx" ON "_portal_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_portal_v_updated_at_idx" ON "_portal_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_portal_v_latest_idx" ON "_portal_v" USING btree ("latest");
  DO $$ BEGIN
   ALTER TABLE "portal_cards" ADD CONSTRAINT "portal_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portal"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portal_terms_accordion" ADD CONSTRAINT "portal_terms_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portal"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_portal_v_version_cards" ADD CONSTRAINT "_portal_v_version_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_portal_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_portal_v_version_terms_accordion" ADD CONSTRAINT "_portal_v_version_terms_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_portal_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "portal_cards_order_idx" ON "portal_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portal_cards_parent_id_idx" ON "portal_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portal_terms_accordion_order_idx" ON "portal_terms_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portal_terms_accordion_parent_id_idx" ON "portal_terms_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_portal_v_version_cards_order_idx" ON "_portal_v_version_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_portal_v_version_cards_parent_id_idx" ON "_portal_v_version_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_portal_v_version_terms_accordion_order_idx" ON "_portal_v_version_terms_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_portal_v_version_terms_accordion_parent_id_idx" ON "_portal_v_version_terms_accordion" USING btree ("_parent_id");
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "portal_login";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "portal_terms_title";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "portal_terms_description";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "portal_profile";
  ALTER TABLE "2025" DROP COLUMN IF EXISTS "portal_registration";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_portal_login";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_portal_terms_title";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_portal_terms_description";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_portal_profile";
  ALTER TABLE "_2025_v" DROP COLUMN IF EXISTS "version_portal_registration";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "2025_portal_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "2025_portal_terms_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"checkbox" boolean,
  	"checkbox_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_portal_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_portal_terms_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"checkbox" boolean,
  	"checkbox_label" varchar,
  	"_uuid" varchar
  );
  
  DROP TABLE "portal_cards" CASCADE;
  DROP TABLE "portal_terms_accordion" CASCADE;
  DROP TABLE "portal" CASCADE;
  DROP TABLE "_portal_v_version_cards" CASCADE;
  DROP TABLE "_portal_v_version_terms_accordion" CASCADE;
  DROP TABLE "_portal_v" CASCADE;
  ALTER TABLE "2025" ADD COLUMN "portal_login" varchar;
  ALTER TABLE "2025" ADD COLUMN "portal_terms_title" varchar DEFAULT 'Legalities';
  ALTER TABLE "2025" ADD COLUMN "portal_terms_description" varchar DEFAULT 'YO! Before we get into it, read these please.';
  ALTER TABLE "2025" ADD COLUMN "portal_profile" varchar;
  ALTER TABLE "2025" ADD COLUMN "portal_registration" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_portal_login" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_portal_terms_title" varchar DEFAULT 'Legalities';
  ALTER TABLE "_2025_v" ADD COLUMN "version_portal_terms_description" varchar DEFAULT 'YO! Before we get into it, read these please.';
  ALTER TABLE "_2025_v" ADD COLUMN "version_portal_profile" varchar;
  ALTER TABLE "_2025_v" ADD COLUMN "version_portal_registration" varchar;
  DO $$ BEGIN
   ALTER TABLE "2025_portal_cards" ADD CONSTRAINT "2025_portal_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "2025_portal_terms_accordion" ADD CONSTRAINT "2025_portal_terms_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_portal_cards" ADD CONSTRAINT "_2025_v_version_portal_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_portal_terms_accordion" ADD CONSTRAINT "_2025_v_version_portal_terms_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "2025_portal_cards_order_idx" ON "2025_portal_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_portal_cards_parent_id_idx" ON "2025_portal_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_portal_terms_accordion_order_idx" ON "2025_portal_terms_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_portal_terms_accordion_parent_id_idx" ON "2025_portal_terms_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_cards_order_idx" ON "_2025_v_version_portal_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_cards_parent_id_idx" ON "_2025_v_version_portal_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_terms_accordion_order_idx" ON "_2025_v_version_portal_terms_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_terms_accordion_parent_id_idx" ON "_2025_v_version_portal_terms_accordion" USING btree ("_parent_id");
  DROP TYPE "public"."enum_portal_status";
  DROP TYPE "public"."enum__portal_v_version_status";`)
}
