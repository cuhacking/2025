import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_organization_sponsor_sponsorship_type" AS ENUM('inKind', 'monetary');
  CREATE TABLE IF NOT EXISTS "organization_sponsor" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"organization_id" integer NOT NULL,
  	"sponsor_id" integer NOT NULL,
  	"sponsorship_type" "enum_organization_sponsor_sponsorship_type",
  	"in_kind_offer" varchar,
  	"money_recieved" numeric,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "general_event" RENAME COLUMN "general_information_id" TO "event_id";
  ALTER TABLE "general_event" DROP CONSTRAINT "general_event_general_information_id_base_event_id_fk";
  
  ALTER TABLE "user_to_event" DROP CONSTRAINT "user_to_event_event_id_base_event_id_fk";
  
  ALTER TABLE "host_to_event" DROP CONSTRAINT "host_to_event_event_id_base_event_id_fk";
  
  DROP INDEX IF EXISTS "general_event_general_information_idx";
  ALTER TABLE "sponsor_to_event" ALTER COLUMN "event_id" DROP NOT NULL;
  ALTER TABLE "sponsor_to_event" ALTER COLUMN "sponsor_id" DROP NOT NULL;
  ALTER TABLE "base_event" ADD COLUMN "start" timestamp(3) with time zone NOT NULL;
  ALTER TABLE "base_event" ADD COLUMN "end" timestamp(3) with time zone NOT NULL;
  ALTER TABLE "general_event" ADD COLUMN "has_judging" boolean;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "organization_sponsor_id" integer;
  DO $$ BEGIN
   ALTER TABLE "organization_sponsor" ADD CONSTRAINT "organization_sponsor_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "organization_sponsor" ADD CONSTRAINT "organization_sponsor_sponsor_id_sponsor_id_fk" FOREIGN KEY ("sponsor_id") REFERENCES "public"."sponsor"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "organization_sponsor_organization_idx" ON "organization_sponsor" USING btree ("organization_id");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_sponsor_idx" ON "organization_sponsor" USING btree ("sponsor_id");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_updated_at_idx" ON "organization_sponsor" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_created_at_idx" ON "organization_sponsor" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "general_event" ADD CONSTRAINT "general_event_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_event" ADD CONSTRAINT "user_to_event_event_id_general_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."general_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "host_to_event" ADD CONSTRAINT "host_to_event_event_id_general_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."general_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_organization_sponsor_fk" FOREIGN KEY ("organization_sponsor_id") REFERENCES "public"."organization_sponsor"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "general_event_event_idx" ON "general_event" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_organization_sponsor_id_idx" ON "payload_locked_documents_rels" USING btree ("organization_sponsor_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "organization_sponsor" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "organization_sponsor" CASCADE;
  ALTER TABLE "general_event" DROP CONSTRAINT "general_event_event_id_base_event_id_fk";
  
  ALTER TABLE "user_to_event" DROP CONSTRAINT "user_to_event_event_id_general_event_id_fk";
  
  ALTER TABLE "host_to_event" DROP CONSTRAINT "host_to_event_event_id_general_event_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_organization_sponsor_fk";
  
  DROP INDEX IF EXISTS "general_event_event_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_organization_sponsor_id_idx";
  ALTER TABLE "sponsor_to_event" ALTER COLUMN "event_id" SET NOT NULL;
  ALTER TABLE "sponsor_to_event" ALTER COLUMN "sponsor_id" SET NOT NULL;
  ALTER TABLE "general_event" ADD COLUMN "general_information_id" integer;
  DO $$ BEGIN
   ALTER TABLE "general_event" ADD CONSTRAINT "general_event_general_information_id_base_event_id_fk" FOREIGN KEY ("general_information_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_event" ADD CONSTRAINT "user_to_event_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "host_to_event" ADD CONSTRAINT "host_to_event_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "general_event_general_information_idx" ON "general_event" USING btree ("general_information_id");
  ALTER TABLE "base_event" DROP COLUMN IF EXISTS "start";
  ALTER TABLE "base_event" DROP COLUMN IF EXISTS "end";
  ALTER TABLE "general_event" DROP COLUMN IF EXISTS "event_id";
  ALTER TABLE "general_event" DROP COLUMN IF EXISTS "has_judging";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "organization_sponsor_id";
  DROP TYPE "public"."enum_organization_sponsor_sponsorship_type";`)
}
