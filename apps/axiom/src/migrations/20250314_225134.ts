import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_events_type" ADD VALUE 'ceremony' BEFORE 'workshop';
  ALTER TYPE "public"."enum_events_type" ADD VALUE 'hackathon' BEFORE 'food';
  ALTER TYPE "public"."enum_events_type" ADD VALUE 'fun' BEFORE 'food';
  CREATE TABLE IF NOT EXISTS "challenges_blocks_info_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "challenges_blocks_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'getDetails()',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "challenges_blocks_resources_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "challenges_blocks_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'getResources()',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "challenges" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"path_title" varchar,
  	"title" varchar,
  	"sponsor_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "challenge_prize_prize_for_position" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenge_prize_miscellaneous_prizes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenge_prize" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "challenge_prize_prize_for_position" CASCADE;
  DROP TABLE "challenge_prize_miscellaneous_prizes" CASCADE;
  DROP TABLE "challenge_prize" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_challenge_prize_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_challenge_prize_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "challenges_id" integer;
  DO $$ BEGIN
   ALTER TABLE "challenges_blocks_info_bullets" ADD CONSTRAINT "challenges_blocks_info_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenges_blocks_info"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenges_blocks_info" ADD CONSTRAINT "challenges_blocks_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenges_blocks_resources_buttons" ADD CONSTRAINT "challenges_blocks_resources_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenges_blocks_resources"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenges_blocks_resources" ADD CONSTRAINT "challenges_blocks_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenges" ADD CONSTRAINT "challenges_sponsor_id_brands_id_fk" FOREIGN KEY ("sponsor_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "challenges_blocks_info_bullets_order_idx" ON "challenges_blocks_info_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_info_bullets_parent_id_idx" ON "challenges_blocks_info_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_info_order_idx" ON "challenges_blocks_info" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_info_parent_id_idx" ON "challenges_blocks_info" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_info_path_idx" ON "challenges_blocks_info" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_resources_buttons_order_idx" ON "challenges_blocks_resources_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_resources_buttons_parent_id_idx" ON "challenges_blocks_resources_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_resources_order_idx" ON "challenges_blocks_resources" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_resources_parent_id_idx" ON "challenges_blocks_resources" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenges_blocks_resources_path_idx" ON "challenges_blocks_resources" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "challenges_sponsor_idx" ON "challenges" USING btree ("sponsor_id");
  CREATE INDEX IF NOT EXISTS "challenges_updated_at_idx" ON "challenges" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenges_created_at_idx" ON "challenges" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenges_fk" FOREIGN KEY ("challenges_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenges_id_idx" ON "payload_locked_documents_rels" USING btree ("challenges_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "challenge_prize_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "challenge_prize_prize_for_position" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"position" numeric,
  	"prize_money" numeric,
  	"other_prize" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "challenge_prize_miscellaneous_prizes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"prize_money" numeric,
  	"other_prize" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "challenge_prize" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formatted_title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "challenges_blocks_info_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenges_blocks_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenges_blocks_resources_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenges_blocks_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenges" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "challenges_blocks_info_bullets" CASCADE;
  DROP TABLE "challenges_blocks_info" CASCADE;
  DROP TABLE "challenges_blocks_resources_buttons" CASCADE;
  DROP TABLE "challenges_blocks_resources" CASCADE;
  DROP TABLE "challenges" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_challenges_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_challenges_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "challenge_prize_id" integer;
  DO $$ BEGIN
   ALTER TABLE "challenge_prize_prize_for_position" ADD CONSTRAINT "challenge_prize_prize_for_position_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenge_prize"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenge_prize_miscellaneous_prizes" ADD CONSTRAINT "challenge_prize_miscellaneous_prizes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenge_prize"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "challenge_prize_prize_for_position_order_idx" ON "challenge_prize_prize_for_position" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenge_prize_prize_for_position_parent_id_idx" ON "challenge_prize_prize_for_position" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_miscellaneous_prizes_order_idx" ON "challenge_prize_miscellaneous_prizes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenge_prize_miscellaneous_prizes_parent_id_idx" ON "challenge_prize_miscellaneous_prizes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_updated_at_idx" ON "challenge_prize" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenge_prize_created_at_idx" ON "challenge_prize" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_prize_fk" FOREIGN KEY ("challenge_prize_id") REFERENCES "public"."challenge_prize"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenge_prize_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_prize_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "challenges_id";
  ALTER TABLE "public"."events_type" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_events_type";
  CREATE TYPE "public"."enum_events_type" AS ENUM('workshop', 'networking', 'social', 'food', 'other');
  ALTER TABLE "public"."events_type" ALTER COLUMN "value" SET DATA TYPE "public"."enum_events_type" USING "value"::"public"."enum_events_type";`)
}
