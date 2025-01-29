import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_user_roles" AS ENUM('organizer', 'generalMember', 'superAdmin', 'volunteer', 'mentor', 'judge', 'sponsorRepresentative');
  CREATE TYPE "public"."enum_user_t_shirt_size" AS ENUM('xs', 's', 'm', 'l', 'xl', 'xxl');
  CREATE TYPE "public"."enum_student_school" AS ENUM('carleton', 'uOttawa', 'other');
  CREATE TYPE "public"."enum_student_level_of_study" AS ENUM('undergraduate', 'graduate', 'phd');
  CREATE TYPE "public"."enum_student_year_standing" AS ENUM('firstYear', 'secondYear', 'thirdYear', 'fourthYear', 'fifthYear', 'graduate');
  CREATE TYPE "public"."enum_base_event_building" AS ENUM('rb', 'pa', 'nn');
  CREATE TYPE "public"."enum_general_event_type" AS ENUM('workshop', 'networking', 'social', 'food', 'other');
  CREATE TYPE "public"."enum_application_response_status" AS ENUM('pending', 'invitationSent', 'rejected', 'rsvpConfirmed', 'rsvpRejected', 'rsvpUnanswered');
  CREATE TYPE "public"."enum_application_question_type" AS ENUM('linkedIn', 'github', 'instagram', 'link', 'longAnswer', 'shortAnswer', 'select', 'number', 'multiSelect', 'fileUpload');
  CREATE TYPE "public"."enum_organization_type" AS ENUM('sponsor', 'cusaClub', 'university');
  CREATE TYPE "public"."enum_organization_sponsor_sponsorship_type" AS ENUM('inKind', 'monetary');
  CREATE TYPE "public"."enum_social_link_platform" AS ENUM('website', 'portal', 'design', 'architecture', 'ESLint', 'discord', 'instagram', 'linkedin', 'linktree', 'figma', 'github-project', 'github-repo');
  CREATE TABLE IF NOT EXISTS "hackathon" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric NOT NULL,
  	"base_event_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "hackathon_event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"event_id" integer,
  	"hackathon_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_user_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"middle_name" varchar,
  	"last_name" varchar NOT NULL,
  	"phone_number" varchar NOT NULL,
  	"t_shirt_size" "enum_user_t_shirt_size" NOT NULL,
  	"dietary_restrictions" varchar,
  	"allergies" varchar,
  	"social_links_linkedin" varchar,
  	"social_links_website" varchar,
  	"social_links_instagram" varchar,
  	"emergency_contact_first_name" varchar NOT NULL,
  	"emergency_contact_middle_name" varchar,
  	"emergency_contact_last_name" varchar NOT NULL,
  	"emergency_contact_email" varchar NOT NULL,
  	"emergency_contact_phone_number" varchar NOT NULL,
  	"emergency_contact_relationship" varchar NOT NULL,
  	"visibility_settings_visible_to_organizers" boolean,
  	"visibility_settings_visible_to_volunteers" boolean,
  	"visibility_settings_visible_to_mentors" boolean,
  	"visibility_settings_visible_to_judges" boolean,
  	"visibility_settings_visible_to_sponsor_reps" boolean,
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
  
  CREATE TABLE IF NOT EXISTS "student" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formatted_title" varchar,
  	"user_id" integer,
  	"school" "enum_student_school",
  	"level_of_study" "enum_student_level_of_study",
  	"major" varchar,
  	"year_standing" "enum_student_year_standing",
  	"resume" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"prefix" varchar DEFAULT 'media-dev',
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
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "base_event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"building" "enum_base_event_building",
  	"room" varchar,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "general_event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formatted_title" varchar,
  	"event_id" integer,
  	"type" "enum_general_event_type",
  	"registration_link" varchar,
  	"attendee_limit" numeric,
  	"has_judging" boolean,
  	"calendar_links_participant" varchar,
  	"calendar_links_mentor" varchar,
  	"calendar_links_sponsor" varchar,
  	"calendar_links_judge" varchar,
  	"calendar_links_volunteer" varchar,
  	"prerequisites_participant" jsonb,
  	"prerequisites_mentor" jsonb,
  	"prerequisites_sponsor" jsonb,
  	"prerequisites_judge" jsonb,
  	"prerequisites_volunteer" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "general_event_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"base_event_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "event_role" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user_to_event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" integer NOT NULL,
  	"event_id" integer NOT NULL,
  	"role_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "challenge" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"judging_id" integer NOT NULL,
  	"event_id" integer NOT NULL,
  	"prize_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "challenge_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"organization_id" integer
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "application_form" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"event_id" integer NOT NULL,
  	"role_id" integer NOT NULL,
  	"acceptance_criteria_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "application_response" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"applicant_id" integer NOT NULL,
  	"status" "enum_application_response_status" DEFAULT 'pending',
  	"related_application_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "application_question_response" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"related_question_id" integer,
  	"related_response_id" integer,
  	"response" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "application_question_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"option" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "application_question" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"placeholder" varchar NOT NULL,
  	"type" "enum_application_question_type",
  	"is_required" boolean,
  	"related_application_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "organization" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_organization_type" NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user_to_organization" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formatted_title" varchar,
  	"user_id" integer,
  	"role" varchar NOT NULL,
  	"organization_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "sponsor" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"base_organization_id" integer,
  	"formatted_title" varchar NOT NULL,
  	"logo_id" integer,
  	"marketting_website" varchar NOT NULL,
  	"hiring_portal" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "sponsor_to_event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formatted_title" varchar,
  	"event_id" integer,
  	"sponsor_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "host_to_event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"formatted_title" varchar,
  	"event_id" integer NOT NULL,
  	"host_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "criteria_rubric_grades" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"level" numeric,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "criteria_rubric" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"general_description" varchar,
  	"weight" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "criteria" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
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
  	"hackathon_id" integer,
  	"hackathon_event_id" integer,
  	"user_id" integer,
  	"student_id" integer,
  	"media_id" integer,
  	"base_event_id" integer,
  	"general_event_id" integer,
  	"event_role_id" integer,
  	"user_to_event_id" integer,
  	"challenge_id" integer,
  	"challenge_prize_id" integer,
  	"application_form_id" integer,
  	"application_response_id" integer,
  	"application_question_response_id" integer,
  	"application_question_id" integer,
  	"organization_id" integer,
  	"user_to_organization_id" integer,
  	"sponsor_id" integer,
  	"sponsor_to_event_id" integer,
  	"organization_sponsor_id" integer,
  	"host_to_event_id" integer,
  	"criteria_id" integer
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
  	"user_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "social_link" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum_social_link_platform" NOT NULL,
  	"url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "hackathon" ADD CONSTRAINT "hackathon_base_event_id_base_event_id_fk" FOREIGN KEY ("base_event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathon_event" ADD CONSTRAINT "hackathon_event_event_id_general_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."general_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathon_event" ADD CONSTRAINT "hackathon_event_hackathon_id_hackathon_id_fk" FOREIGN KEY ("hackathon_id") REFERENCES "public"."hackathon"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "student" ADD CONSTRAINT "student_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "general_event" ADD CONSTRAINT "general_event_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "general_event_rels" ADD CONSTRAINT "general_event_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."general_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "general_event_rels" ADD CONSTRAINT "general_event_rels_base_event_fk" FOREIGN KEY ("base_event_id") REFERENCES "public"."base_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_event" ADD CONSTRAINT "user_to_event_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_event" ADD CONSTRAINT "user_to_event_event_id_general_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."general_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_event" ADD CONSTRAINT "user_to_event_role_id_event_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."event_role"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenge" ADD CONSTRAINT "challenge_judging_id_criteria_id_fk" FOREIGN KEY ("judging_id") REFERENCES "public"."criteria"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenge" ADD CONSTRAINT "challenge_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenge" ADD CONSTRAINT "challenge_prize_id_challenge_prize_id_fk" FOREIGN KEY ("prize_id") REFERENCES "public"."challenge_prize"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenge_rels" ADD CONSTRAINT "challenge_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."challenge"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenge_rels" ADD CONSTRAINT "challenge_rels_organization_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
  
  DO $$ BEGIN
   ALTER TABLE "application_form" ADD CONSTRAINT "application_form_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_form" ADD CONSTRAINT "application_form_role_id_event_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."event_role"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_form" ADD CONSTRAINT "application_form_acceptance_criteria_id_criteria_id_fk" FOREIGN KEY ("acceptance_criteria_id") REFERENCES "public"."criteria"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_response" ADD CONSTRAINT "application_response_applicant_id_user_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_response" ADD CONSTRAINT "application_response_related_application_id_application_form_id_fk" FOREIGN KEY ("related_application_id") REFERENCES "public"."application_form"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_question_response" ADD CONSTRAINT "application_question_response_related_question_id_application_question_id_fk" FOREIGN KEY ("related_question_id") REFERENCES "public"."application_question"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_question_response" ADD CONSTRAINT "application_question_response_related_response_id_application_response_id_fk" FOREIGN KEY ("related_response_id") REFERENCES "public"."application_response"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_question_options" ADD CONSTRAINT "application_question_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."application_question"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "application_question" ADD CONSTRAINT "application_question_related_application_id_application_form_id_fk" FOREIGN KEY ("related_application_id") REFERENCES "public"."application_form"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_organization" ADD CONSTRAINT "user_to_organization_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_to_organization" ADD CONSTRAINT "user_to_organization_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sponsor" ADD CONSTRAINT "sponsor_base_organization_id_organization_id_fk" FOREIGN KEY ("base_organization_id") REFERENCES "public"."organization"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sponsor" ADD CONSTRAINT "sponsor_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sponsor_to_event" ADD CONSTRAINT "sponsor_to_event_event_id_base_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."base_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sponsor_to_event" ADD CONSTRAINT "sponsor_to_event_sponsor_id_sponsor_id_fk" FOREIGN KEY ("sponsor_id") REFERENCES "public"."sponsor"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
  
  DO $$ BEGIN
   ALTER TABLE "host_to_event" ADD CONSTRAINT "host_to_event_event_id_general_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."general_event"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "host_to_event" ADD CONSTRAINT "host_to_event_host_id_organization_id_fk" FOREIGN KEY ("host_id") REFERENCES "public"."organization"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "criteria_rubric_grades" ADD CONSTRAINT "criteria_rubric_grades_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."criteria_rubric"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "criteria_rubric" ADD CONSTRAINT "criteria_rubric_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."criteria"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hackathon_fk" FOREIGN KEY ("hackathon_id") REFERENCES "public"."hackathon"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hackathon_event_fk" FOREIGN KEY ("hackathon_event_id") REFERENCES "public"."hackathon_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_student_fk" FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_base_event_fk" FOREIGN KEY ("base_event_id") REFERENCES "public"."base_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_general_event_fk" FOREIGN KEY ("general_event_id") REFERENCES "public"."general_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_event_role_fk" FOREIGN KEY ("event_role_id") REFERENCES "public"."event_role"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_to_event_fk" FOREIGN KEY ("user_to_event_id") REFERENCES "public"."user_to_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenge"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_prize_fk" FOREIGN KEY ("challenge_prize_id") REFERENCES "public"."challenge_prize"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_application_form_fk" FOREIGN KEY ("application_form_id") REFERENCES "public"."application_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_application_response_fk" FOREIGN KEY ("application_response_id") REFERENCES "public"."application_response"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_application_question_response_fk" FOREIGN KEY ("application_question_response_id") REFERENCES "public"."application_question_response"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_application_question_fk" FOREIGN KEY ("application_question_id") REFERENCES "public"."application_question"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_organization_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_to_organization_fk" FOREIGN KEY ("user_to_organization_id") REFERENCES "public"."user_to_organization"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sponsor_fk" FOREIGN KEY ("sponsor_id") REFERENCES "public"."sponsor"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sponsor_to_event_fk" FOREIGN KEY ("sponsor_to_event_id") REFERENCES "public"."sponsor_to_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_organization_sponsor_fk" FOREIGN KEY ("organization_sponsor_id") REFERENCES "public"."organization_sponsor"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_host_to_event_fk" FOREIGN KEY ("host_to_event_id") REFERENCES "public"."host_to_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_criteria_fk" FOREIGN KEY ("criteria_id") REFERENCES "public"."criteria"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_user_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "hackathon_year_idx" ON "hackathon" USING btree ("year");
  CREATE UNIQUE INDEX IF NOT EXISTS "hackathon_base_event_idx" ON "hackathon" USING btree ("base_event_id");
  CREATE INDEX IF NOT EXISTS "hackathon_updated_at_idx" ON "hackathon" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "hackathon_created_at_idx" ON "hackathon" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "hackathon_event_event_idx" ON "hackathon_event" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "hackathon_event_hackathon_idx" ON "hackathon_event" USING btree ("hackathon_id");
  CREATE INDEX IF NOT EXISTS "hackathon_event_updated_at_idx" ON "hackathon_event" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "hackathon_event_created_at_idx" ON "hackathon_event" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "user_roles_order_idx" ON "user_roles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "user_roles_parent_idx" ON "user_roles" USING btree ("parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_phone_number_idx" ON "user" USING btree ("phone_number");
  CREATE INDEX IF NOT EXISTS "user_updated_at_idx" ON "user" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_created_at_idx" ON "user" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_email_idx" ON "user" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "student_user_idx" ON "student" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "student_updated_at_idx" ON "student" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "student_created_at_idx" ON "student" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "base_event_updated_at_idx" ON "base_event" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "base_event_created_at_idx" ON "base_event" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "general_event_event_idx" ON "general_event" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "general_event_updated_at_idx" ON "general_event" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "general_event_created_at_idx" ON "general_event" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "general_event_rels_order_idx" ON "general_event_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "general_event_rels_parent_idx" ON "general_event_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "general_event_rels_path_idx" ON "general_event_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "general_event_rels_base_event_id_idx" ON "general_event_rels" USING btree ("base_event_id");
  CREATE INDEX IF NOT EXISTS "event_role_updated_at_idx" ON "event_role" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "event_role_created_at_idx" ON "event_role" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "user_to_event_user_idx" ON "user_to_event" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "user_to_event_event_idx" ON "user_to_event" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "user_to_event_role_idx" ON "user_to_event" USING btree ("role_id");
  CREATE INDEX IF NOT EXISTS "user_to_event_updated_at_idx" ON "user_to_event" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_to_event_created_at_idx" ON "user_to_event" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "challenge_judging_idx" ON "challenge" USING btree ("judging_id");
  CREATE INDEX IF NOT EXISTS "challenge_event_idx" ON "challenge" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_idx" ON "challenge" USING btree ("prize_id");
  CREATE INDEX IF NOT EXISTS "challenge_updated_at_idx" ON "challenge" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenge_created_at_idx" ON "challenge" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "challenge_rels_order_idx" ON "challenge_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "challenge_rels_parent_idx" ON "challenge_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_rels_path_idx" ON "challenge_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "challenge_rels_organization_id_idx" ON "challenge_rels" USING btree ("organization_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_prize_for_position_order_idx" ON "challenge_prize_prize_for_position" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenge_prize_prize_for_position_parent_id_idx" ON "challenge_prize_prize_for_position" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_miscellaneous_prizes_order_idx" ON "challenge_prize_miscellaneous_prizes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenge_prize_miscellaneous_prizes_parent_id_idx" ON "challenge_prize_miscellaneous_prizes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_updated_at_idx" ON "challenge_prize" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenge_prize_created_at_idx" ON "challenge_prize" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "application_form_event_idx" ON "application_form" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "application_form_role_idx" ON "application_form" USING btree ("role_id");
  CREATE INDEX IF NOT EXISTS "application_form_acceptance_criteria_idx" ON "application_form" USING btree ("acceptance_criteria_id");
  CREATE INDEX IF NOT EXISTS "application_form_updated_at_idx" ON "application_form" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "application_form_created_at_idx" ON "application_form" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "application_response_applicant_idx" ON "application_response" USING btree ("applicant_id");
  CREATE INDEX IF NOT EXISTS "application_response_related_application_idx" ON "application_response" USING btree ("related_application_id");
  CREATE INDEX IF NOT EXISTS "application_response_updated_at_idx" ON "application_response" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "application_response_created_at_idx" ON "application_response" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "application_question_response_related_question_idx" ON "application_question_response" USING btree ("related_question_id");
  CREATE INDEX IF NOT EXISTS "application_question_response_related_response_idx" ON "application_question_response" USING btree ("related_response_id");
  CREATE INDEX IF NOT EXISTS "application_question_response_updated_at_idx" ON "application_question_response" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "application_question_response_created_at_idx" ON "application_question_response" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "application_question_options_order_idx" ON "application_question_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "application_question_options_parent_id_idx" ON "application_question_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "application_question_related_application_idx" ON "application_question" USING btree ("related_application_id");
  CREATE INDEX IF NOT EXISTS "application_question_updated_at_idx" ON "application_question" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "application_question_created_at_idx" ON "application_question" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "organization_updated_at_idx" ON "organization" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "organization_created_at_idx" ON "organization" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "user_to_organization_user_idx" ON "user_to_organization" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "user_to_organization_organization_idx" ON "user_to_organization" USING btree ("organization_id");
  CREATE INDEX IF NOT EXISTS "user_to_organization_updated_at_idx" ON "user_to_organization" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_to_organization_created_at_idx" ON "user_to_organization" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "sponsor_base_organization_idx" ON "sponsor" USING btree ("base_organization_id");
  CREATE INDEX IF NOT EXISTS "sponsor_logo_idx" ON "sponsor" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "sponsor_updated_at_idx" ON "sponsor" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "sponsor_created_at_idx" ON "sponsor" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "sponsor_to_event_event_idx" ON "sponsor_to_event" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "sponsor_to_event_sponsor_idx" ON "sponsor_to_event" USING btree ("sponsor_id");
  CREATE INDEX IF NOT EXISTS "sponsor_to_event_updated_at_idx" ON "sponsor_to_event" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "sponsor_to_event_created_at_idx" ON "sponsor_to_event" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_organization_idx" ON "organization_sponsor" USING btree ("organization_id");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_sponsor_idx" ON "organization_sponsor" USING btree ("sponsor_id");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_updated_at_idx" ON "organization_sponsor" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "organization_sponsor_created_at_idx" ON "organization_sponsor" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "host_to_event_event_idx" ON "host_to_event" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "host_to_event_host_idx" ON "host_to_event" USING btree ("host_id");
  CREATE INDEX IF NOT EXISTS "host_to_event_updated_at_idx" ON "host_to_event" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "host_to_event_created_at_idx" ON "host_to_event" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "criteria_rubric_grades_order_idx" ON "criteria_rubric_grades" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "criteria_rubric_grades_parent_id_idx" ON "criteria_rubric_grades" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "criteria_rubric_order_idx" ON "criteria_rubric" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "criteria_rubric_parent_id_idx" ON "criteria_rubric" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "criteria_updated_at_idx" ON "criteria" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "criteria_created_at_idx" ON "criteria" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hackathon_id_idx" ON "payload_locked_documents_rels" USING btree ("hackathon_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hackathon_event_id_idx" ON "payload_locked_documents_rels" USING btree ("hackathon_event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_id_idx" ON "payload_locked_documents_rels" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_student_id_idx" ON "payload_locked_documents_rels" USING btree ("student_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_base_event_id_idx" ON "payload_locked_documents_rels" USING btree ("base_event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_general_event_id_idx" ON "payload_locked_documents_rels" USING btree ("general_event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_event_role_id_idx" ON "payload_locked_documents_rels" USING btree ("event_role_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_to_event_id_idx" ON "payload_locked_documents_rels" USING btree ("user_to_event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenge_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenge_prize_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_prize_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_application_form_id_idx" ON "payload_locked_documents_rels" USING btree ("application_form_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_application_response_id_idx" ON "payload_locked_documents_rels" USING btree ("application_response_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_application_question_response_id_idx" ON "payload_locked_documents_rels" USING btree ("application_question_response_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_application_question_id_idx" ON "payload_locked_documents_rels" USING btree ("application_question_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_organization_id_idx" ON "payload_locked_documents_rels" USING btree ("organization_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_to_organization_id_idx" ON "payload_locked_documents_rels" USING btree ("user_to_organization_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_sponsor_id_idx" ON "payload_locked_documents_rels" USING btree ("sponsor_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_sponsor_to_event_id_idx" ON "payload_locked_documents_rels" USING btree ("sponsor_to_event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_organization_sponsor_id_idx" ON "payload_locked_documents_rels" USING btree ("organization_sponsor_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_host_to_event_id_idx" ON "payload_locked_documents_rels" USING btree ("host_to_event_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_criteria_id_idx" ON "payload_locked_documents_rels" USING btree ("criteria_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_user_id_idx" ON "payload_preferences_rels" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "hackathon" CASCADE;
  DROP TABLE "hackathon_event" CASCADE;
  DROP TABLE "user_roles" CASCADE;
  DROP TABLE "user" CASCADE;
  DROP TABLE "student" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "base_event" CASCADE;
  DROP TABLE "general_event" CASCADE;
  DROP TABLE "general_event_rels" CASCADE;
  DROP TABLE "event_role" CASCADE;
  DROP TABLE "user_to_event" CASCADE;
  DROP TABLE "challenge" CASCADE;
  DROP TABLE "challenge_rels" CASCADE;
  DROP TABLE "challenge_prize_prize_for_position" CASCADE;
  DROP TABLE "challenge_prize_miscellaneous_prizes" CASCADE;
  DROP TABLE "challenge_prize" CASCADE;
  DROP TABLE "application_form" CASCADE;
  DROP TABLE "application_response" CASCADE;
  DROP TABLE "application_question_response" CASCADE;
  DROP TABLE "application_question_options" CASCADE;
  DROP TABLE "application_question" CASCADE;
  DROP TABLE "organization" CASCADE;
  DROP TABLE "user_to_organization" CASCADE;
  DROP TABLE "sponsor" CASCADE;
  DROP TABLE "sponsor_to_event" CASCADE;
  DROP TABLE "organization_sponsor" CASCADE;
  DROP TABLE "host_to_event" CASCADE;
  DROP TABLE "criteria_rubric_grades" CASCADE;
  DROP TABLE "criteria_rubric" CASCADE;
  DROP TABLE "criteria" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "social_link" CASCADE;
  DROP TYPE "public"."enum_user_roles";
  DROP TYPE "public"."enum_user_t_shirt_size";
  DROP TYPE "public"."enum_student_school";
  DROP TYPE "public"."enum_student_level_of_study";
  DROP TYPE "public"."enum_student_year_standing";
  DROP TYPE "public"."enum_base_event_building";
  DROP TYPE "public"."enum_general_event_type";
  DROP TYPE "public"."enum_application_response_status";
  DROP TYPE "public"."enum_application_question_type";
  DROP TYPE "public"."enum_organization_type";
  DROP TYPE "public"."enum_organization_sponsor_sponsorship_type";
  DROP TYPE "public"."enum_social_link_platform";`)
}
