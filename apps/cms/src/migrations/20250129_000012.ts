import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "base_event" ALTER COLUMN "start" DROP NOT NULL;
  ALTER TABLE "base_event" ALTER COLUMN "end" DROP NOT NULL;
  ALTER TABLE "base_event" ALTER COLUMN "date_time" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "base_event" ALTER COLUMN "start" SET NOT NULL;
  ALTER TABLE "base_event" ALTER COLUMN "end" SET NOT NULL;
  ALTER TABLE "base_event" ALTER COLUMN "date_time" SET NOT NULL;`)
}
