import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "users_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_users_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_id" integer
  );
  
  ALTER TABLE "users" DROP CONSTRAINT "users_events_id_events_id_fk";
  
  ALTER TABLE "_users_v" DROP CONSTRAINT "_users_v_version_events_id_events_id_fk";
  
  DROP INDEX IF EXISTS "users_events_idx";
  DROP INDEX IF EXISTS "_users_v_version_version_events_idx";
  DO $$ BEGIN
   ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v_rels" ADD CONSTRAINT "_users_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_users_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v_rels" ADD CONSTRAINT "_users_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_rels_order_idx" ON "users_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_rels_parent_idx" ON "users_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_rels_path_idx" ON "users_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "users_rels_events_id_idx" ON "users_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "_users_v_rels_order_idx" ON "_users_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_users_v_rels_parent_idx" ON "_users_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_users_v_rels_path_idx" ON "_users_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_users_v_rels_events_id_idx" ON "_users_v_rels" USING btree ("events_id");
  ALTER TABLE "users" DROP COLUMN IF EXISTS "events_id";
  ALTER TABLE "_users_v" DROP COLUMN IF EXISTS "version_events_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_users_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_rels" CASCADE;
  DROP TABLE "_users_v_rels" CASCADE;
  ALTER TABLE "users" ADD COLUMN "events_id" integer;
  ALTER TABLE "_users_v" ADD COLUMN "version_events_id" integer;
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_events_id_events_id_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_version_events_id_events_id_fk" FOREIGN KEY ("version_events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_events_idx" ON "users" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_events_idx" ON "_users_v" USING btree ("version_events_id");`)
}
