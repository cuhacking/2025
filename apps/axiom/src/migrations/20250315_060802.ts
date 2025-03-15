import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_events_type" ADD VALUE 'techtalk';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."events_type" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_events_type";
  CREATE TYPE "public"."enum_events_type" AS ENUM('ceremony', 'workshop', 'networking', 'social', 'hackathon', 'fun', 'food', 'other');
  ALTER TABLE "public"."events_type" ALTER COLUMN "value" SET DATA TYPE "public"."enum_events_type" USING "value"::"public"."enum_events_type";`)
}
