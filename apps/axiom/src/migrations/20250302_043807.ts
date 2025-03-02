import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_dietary_restrictions" AS ENUM('vegetarian', 'vegan', 'halal', 'kosher', 'pescatarian', 'dairy-free', 'gluten-free', 'shellfish-free', 'nut-free', 'keto', 'low-lactose', 'low-carb', 'paleo', 'high-protein', 'raw-vegan', 'whole30', 'fasting', 'other');
  CREATE TYPE "public"."enum_users_allergies" AS ENUM('peanuts', 'tree-nuts', 'dairy', 'gluten', 'shellfish', 'fish', 'soy', 'eggs', 'red-meat', 'corn', 'sulfites', 'fruits', 'vegetables', 'caffeine', 'honey', 'other');
  CREATE TYPE "public"."enum_users_pronouns" AS ENUM('he/him', 'she/her', 'they/them', 'other');
  CREATE TYPE "public"."enum_users_tshirt_size" AS ENUM('xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TABLE IF NOT EXISTS "brands_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "brands" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"domain" varchar,
  	"email" varchar,
  	"phone" numeric,
  	"location" varchar,
  	"symbol_id" integer,
  	"wordmark_id" integer,
  	"github" varchar,
  	"linkedin" varchar,
  	"instagram" varchar,
  	"discord" varchar,
  	"behance" varchar,
  	"figma" varchar,
  	"linktree" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"prefix" varchar DEFAULT 'media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "emails" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"body_text" varchar NOT NULL,
  	"body_button_text" varchar NOT NULL,
  	"body_button_link" varchar NOT NULL,
  	"body_footer" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users_dietary_restrictions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_dietary_restrictions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users_allergies" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_allergies",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar,
  	"middle_name" varchar,
  	"last_name" varchar,
  	"display_name" varchar,
  	"pronouns" "enum_users_pronouns",
  	"avatar_id" integer,
  	"linkedin" varchar,
  	"discord" varchar,
  	"github" varchar,
  	"behance" varchar,
  	"website" varchar,
  	"tshirt_size" "enum_users_tshirt_size",
  	"emergency_contact_full_name" varchar,
  	"emergency_contact_cell" varchar,
  	"emergency_contact_email_address" varchar,
  	"linkedin_sub" varchar,
  	"linkedin_id" varchar,
  	"linkedin_email_verified" varchar,
  	"linkedin_locale" varchar,
  	"github_id" varchar,
  	"github_avatar_url" varchar,
  	"github_type" varchar,
  	"github_url" varchar,
  	"github_html_url" varchar,
  	"github_name" varchar,
  	"github_blog" varchar,
  	"github_location" varchar,
  	"github_hireable" varchar,
  	"github_public_repos" varchar,
  	"github_linked_in" varchar,
  	"github_instagram" varchar,
  	"github_email" varchar,
  	"google_sub" varchar,
  	"google_email_verified" varchar,
  	"github_sub" varchar,
  	"discord_sub" varchar,
  	"sub" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"brands_id" integer,
  	"media_id" integer,
  	"emails_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "website" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"links" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "social_links" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "social_links_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"brands_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "brands_links" ADD CONSTRAINT "brands_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "brands" ADD CONSTRAINT "brands_symbol_id_media_id_fk" FOREIGN KEY ("symbol_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "brands" ADD CONSTRAINT "brands_wordmark_id_media_id_fk" FOREIGN KEY ("wordmark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_dietary_restrictions" ADD CONSTRAINT "users_dietary_restrictions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_allergies" ADD CONSTRAINT "users_allergies_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_emails_fk" FOREIGN KEY ("emails_id") REFERENCES "public"."emails"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "social_links_rels" ADD CONSTRAINT "social_links_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."social_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "social_links_rels" ADD CONSTRAINT "social_links_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "brands_links_order_idx" ON "brands_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "brands_links_parent_id_idx" ON "brands_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "brands_symbol_idx" ON "brands" USING btree ("symbol_id");
  CREATE INDEX IF NOT EXISTS "brands_wordmark_idx" ON "brands" USING btree ("wordmark_id");
  CREATE INDEX IF NOT EXISTS "brands_updated_at_idx" ON "brands" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "brands_created_at_idx" ON "brands" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "emails_updated_at_idx" ON "emails" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "emails_created_at_idx" ON "emails" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_dietary_restrictions_order_idx" ON "users_dietary_restrictions" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_dietary_restrictions_parent_idx" ON "users_dietary_restrictions" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_allergies_order_idx" ON "users_allergies" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_allergies_parent_idx" ON "users_allergies" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX IF NOT EXISTS "users_github_sub_idx" ON "users" USING btree ("github_sub");
  CREATE INDEX IF NOT EXISTS "users_discord_sub_idx" ON "users" USING btree ("discord_sub");
  CREATE INDEX IF NOT EXISTS "users_sub_idx" ON "users" USING btree ("sub");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_brands_id_idx" ON "payload_locked_documents_rels" USING btree ("brands_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_emails_id_idx" ON "payload_locked_documents_rels" USING btree ("emails_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "social_links_rels_order_idx" ON "social_links_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "social_links_rels_parent_idx" ON "social_links_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "social_links_rels_path_idx" ON "social_links_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "social_links_rels_brands_id_idx" ON "social_links_rels" USING btree ("brands_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "brands_links" CASCADE;
  DROP TABLE "brands" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "emails" CASCADE;
  DROP TABLE "users_dietary_restrictions" CASCADE;
  DROP TABLE "users_allergies" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "website" CASCADE;
  DROP TABLE "social_links" CASCADE;
  DROP TABLE "social_links_rels" CASCADE;
  DROP TYPE "public"."enum_users_dietary_restrictions";
  DROP TYPE "public"."enum_users_allergies";
  DROP TYPE "public"."enum_users_pronouns";
  DROP TYPE "public"."enum_users_tshirt_size";`)
}
