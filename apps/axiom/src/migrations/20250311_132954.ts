import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "emails_body_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"button_text" varchar
  );
  
  ALTER TABLE "emails" ADD COLUMN "body_second_button_text" varchar;
  ALTER TABLE "emails" ADD COLUMN "body_second_button_link" varchar;
  DO $$ BEGIN
   ALTER TABLE "emails_body_events" ADD CONSTRAINT "emails_body_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."emails"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "emails_body_events_order_idx" ON "emails_body_events" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "emails_body_events_parent_id_idx" ON "emails_body_events" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "emails_body_events" CASCADE;
  ALTER TABLE "emails" DROP COLUMN IF EXISTS "body_second_button_text";
  ALTER TABLE "emails" DROP COLUMN IF EXISTS "body_second_button_link";`)
}
