import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_2025_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_brands_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__brands_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_hardware_categories" AS ENUM('basics', 'parts', 'communication', 'display', 'microcontrollers', 'power', 'cables', 'motorpluscontrol', 'sensors', 'peripheralsplusaccessories', 'miscellaneous', 'vr', 'lottery');
  CREATE TYPE "public"."enum_events_type" AS ENUM('workshop', 'networking', 'social', 'food', 'other');
  CREATE TYPE "public"."enum_users_dietary_restrictions" AS ENUM('vegetarian', 'vegan', 'halal', 'kosher', 'pescatarian', 'dairy_free', 'gluten_free', 'shellfish_free', 'nut_free', 'keto', 'low_lactose', 'low_carb', 'paleo', 'high_protein', 'raw_vegan', 'whole30', 'fasting', 'other');
  CREATE TYPE "public"."enum_users_allergies" AS ENUM('peanuts', 'tree_nuts', 'dairy', 'shellfish', 'fish', 'soy', 'eggs', 'red_meat', 'corn', 'sulfites', 'fruits', 'vegetables', 'sesame', 'honey', 'caffeine', 'other', 'gluten', 'wheat', 'mustard', 'latex');
  CREATE TYPE "public"."enum_users_pronouns" AS ENUM('he/him', 'she/her', 'they/them', 'other');
  CREATE TYPE "public"."enum_users_gender" AS ENUM('male', 'female', 'non-binary', 'transgender', 'genderfluid', 'agender', 'two-spirit', 'other', 'prefer-not-to-say');
  CREATE TYPE "public"."enum_users_tshirt_size" AS ENUM('xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TYPE "public"."enum_users_emergency_contact_relationship" AS ENUM('parent', 'spouse', 'sibling', 'child', 'guardian', 'grandparent', 'auntUncle', 'cousin', 'friend', 'neighbor', 'colleague', 'doctor', 'caregiver', 'legalRepresentative', 'other');
  CREATE TYPE "public"."enum_users_institution" AS ENUM('memorialUniversityOfNewfoundland', 'universityOfPrinceEdwardIsland', 'acadiaUniversity', 'acadiaDivinityCollege', 'atlanticSchoolOfTheology', 'capeBretonUniversity', 'dalhousieUniversity', 'universityOfKingsCollege', 'mountSaintVincentUniversity', 'novaScotiaCollegeOfArtAndDesignUniversityNscad', 'universitSainteanne', 'stFrancisXavierUniversity', 'saintMarysUniversity', 'mountAllisonUniversity', 'universityOfNewBrunswick', 'universitDeMonctonParent', 'stThomasUniversity', 'bishopsUniversity', 'mcgillUniversity', 'universitDeMontral', 'polytechniqueMontral', 'coleDesHautesTudesCommerciales', 'universitLaval', 'universitDeSherbrooke', 'concordiaUniversity', 'universitDuQubecChicoutimi', 'universitDuQubecMontral', 'universitDuQubecEnAbitibitmiscamingue', 'universitDuQubecTroisrivires', 'universitDuQubecEnOutaouais', 'universitDuQubecColeNationaleDadministrationPubliqueEnap', 'universitDuQubecInstitutNationalDeLaRechercheScientifique', 'universitDuQubecRimouski', 'universitDuQubecColeDeTechnologieSuprieure', 'universitDuQubecTluniversitDuQubecTluq', 'brockUniversity', 'concordiaLutheranTheologicalSeminary', 'carletonUniversity', 'dominicanUniversityCollegecollgeUniversitaireDominicain', 'universityOfGuelph', 'lakeheadUniversity', 'laurentianUniversityOfSudburyuniversitLaurentienneDeSudbury', 'mcmasterUniversity', 'nipissingUniversity', 'universityOfOttawa', 'saintpaulUniversityuniversitSaintpaul', 'queensUniversity', 'ryersonUniversity', 'universityOfToronto', 'stAugustinesSeminary', 'universityOfStMichaelsCollege', 'universityOfTrinityCollege', 'victoriaUniversity', 'knoxCollege', 'wycliffeCollege', 'regisCollege', 'trentUniversity', 'universityOfWaterloo', 'stJeromesUniversity', 'renisonUniversityCollege', 'conradGrebelUniversityCollege', 'universityOfWesternOntario', 'bresciaUniversityCollege', 'huronUniversityCollege', 'kingsCollege', 'wilfredLaurierUniversity', 'universityOfWindsor', 'yorkUniversity', 'ontarioCollegeOfArtAndDesign', 'universityOfOntarioInstituteOfTechnology', 'algomaUniversityCollege', 'universityOfSudbury', 'universitDeHearst', 'huntingtonUniversity', 'thorneloeUniversity', 'brandonUniversity', 'canadianMennoniteUniversity', 'universityOfManitoba', 'universitDeSaintboniface', 'universityOfWinnipeg', 'universityOfRegina', 'campionCollege', 'lutherCollege', 'universityOfSaskatchewan', 'collegeOfEmmanuelAndStChad', 'lutheranTheologicalSeminary', 'stAndrewsCollege', 'stThomasMoreCollege', 'horizonCollegeSeminary', 'universityOfAlberta', 'athabascaUniversity', 'universityOfCalgary', 'burmanUniversity', 'concordiaUniversityOfEdmonton', 'universityOfLethbridge', 'theKingsUniversityCollege', 'ambroseUniversity', 'grantMacewanUniversity', 'mountRoyalUniversity', 'universityOfBritishColumbia', 'universityOfNorthernBritishColumbia', 'royalRoadsUniversity', 'simonFraserUniversity', 'universityOfVictoria', 'thompsonRiversUniversity', 'capilanoUniversity', 'vancouverIslandUniversity', 'emilyCarrUniversityOfArtAndDesign', 'kwantlenPolytechnicUniversity', 'universityOfTheFraserValley', 'yukonUniversity', 'other');
  CREATE TYPE "public"."enum_users_field_of_study" AS ENUM('computerScience', 'anotherEngineering', 'informationSystems', 'naturalScience', 'mathematicsStatistics', 'webDevelopment', 'business', 'humanities', 'socialScience', 'fineArts', 'healthScience', 'other', 'undecided', 'noMajors', 'preferNotToAnswer');
  CREATE TYPE "public"."enum_users_degree" AS ENUM('secondary', 'undergraduate2Year', 'undergraduate3PlusYear', 'graduate', 'codeSchool', 'vocationalTrade', 'postDoctorate', 'other', 'notStudent', 'preferNotToAnswer');
  CREATE TYPE "public"."enum_users_year_standing" AS ENUM('1', '2', '3', '4', '5', '6+');
  CREATE TYPE "public"."enum_users_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__users_v_version_dietary_restrictions" AS ENUM('vegetarian', 'vegan', 'halal', 'kosher', 'pescatarian', 'dairy_free', 'gluten_free', 'shellfish_free', 'nut_free', 'keto', 'low_lactose', 'low_carb', 'paleo', 'high_protein', 'raw_vegan', 'whole30', 'fasting', 'other');
  CREATE TYPE "public"."enum__users_v_version_allergies" AS ENUM('peanuts', 'tree_nuts', 'dairy', 'shellfish', 'fish', 'soy', 'eggs', 'red_meat', 'corn', 'sulfites', 'fruits', 'vegetables', 'sesame', 'honey', 'caffeine', 'other', 'gluten', 'wheat', 'mustard', 'latex');
  CREATE TYPE "public"."enum__users_v_version_pronouns" AS ENUM('he/him', 'she/her', 'they/them', 'other');
  CREATE TYPE "public"."enum__users_v_version_gender" AS ENUM('male', 'female', 'non-binary', 'transgender', 'genderfluid', 'agender', 'two-spirit', 'other', 'prefer-not-to-say');
  CREATE TYPE "public"."enum__users_v_version_tshirt_size" AS ENUM('xs', 's', 'm', 'l', 'xl', '2xl', '3xl');
  CREATE TYPE "public"."enum__users_v_version_emergency_contact_relationship" AS ENUM('parent', 'spouse', 'sibling', 'child', 'guardian', 'grandparent', 'auntUncle', 'cousin', 'friend', 'neighbor', 'colleague', 'doctor', 'caregiver', 'legalRepresentative', 'other');
  CREATE TYPE "public"."enum__users_v_version_institution" AS ENUM('memorialUniversityOfNewfoundland', 'universityOfPrinceEdwardIsland', 'acadiaUniversity', 'acadiaDivinityCollege', 'atlanticSchoolOfTheology', 'capeBretonUniversity', 'dalhousieUniversity', 'universityOfKingsCollege', 'mountSaintVincentUniversity', 'novaScotiaCollegeOfArtAndDesignUniversityNscad', 'universitSainteanne', 'stFrancisXavierUniversity', 'saintMarysUniversity', 'mountAllisonUniversity', 'universityOfNewBrunswick', 'universitDeMonctonParent', 'stThomasUniversity', 'bishopsUniversity', 'mcgillUniversity', 'universitDeMontral', 'polytechniqueMontral', 'coleDesHautesTudesCommerciales', 'universitLaval', 'universitDeSherbrooke', 'concordiaUniversity', 'universitDuQubecChicoutimi', 'universitDuQubecMontral', 'universitDuQubecEnAbitibitmiscamingue', 'universitDuQubecTroisrivires', 'universitDuQubecEnOutaouais', 'universitDuQubecColeNationaleDadministrationPubliqueEnap', 'universitDuQubecInstitutNationalDeLaRechercheScientifique', 'universitDuQubecRimouski', 'universitDuQubecColeDeTechnologieSuprieure', 'universitDuQubecTluniversitDuQubecTluq', 'brockUniversity', 'concordiaLutheranTheologicalSeminary', 'carletonUniversity', 'dominicanUniversityCollegecollgeUniversitaireDominicain', 'universityOfGuelph', 'lakeheadUniversity', 'laurentianUniversityOfSudburyuniversitLaurentienneDeSudbury', 'mcmasterUniversity', 'nipissingUniversity', 'universityOfOttawa', 'saintpaulUniversityuniversitSaintpaul', 'queensUniversity', 'ryersonUniversity', 'universityOfToronto', 'stAugustinesSeminary', 'universityOfStMichaelsCollege', 'universityOfTrinityCollege', 'victoriaUniversity', 'knoxCollege', 'wycliffeCollege', 'regisCollege', 'trentUniversity', 'universityOfWaterloo', 'stJeromesUniversity', 'renisonUniversityCollege', 'conradGrebelUniversityCollege', 'universityOfWesternOntario', 'bresciaUniversityCollege', 'huronUniversityCollege', 'kingsCollege', 'wilfredLaurierUniversity', 'universityOfWindsor', 'yorkUniversity', 'ontarioCollegeOfArtAndDesign', 'universityOfOntarioInstituteOfTechnology', 'algomaUniversityCollege', 'universityOfSudbury', 'universitDeHearst', 'huntingtonUniversity', 'thorneloeUniversity', 'brandonUniversity', 'canadianMennoniteUniversity', 'universityOfManitoba', 'universitDeSaintboniface', 'universityOfWinnipeg', 'universityOfRegina', 'campionCollege', 'lutherCollege', 'universityOfSaskatchewan', 'collegeOfEmmanuelAndStChad', 'lutheranTheologicalSeminary', 'stAndrewsCollege', 'stThomasMoreCollege', 'horizonCollegeSeminary', 'universityOfAlberta', 'athabascaUniversity', 'universityOfCalgary', 'burmanUniversity', 'concordiaUniversityOfEdmonton', 'universityOfLethbridge', 'theKingsUniversityCollege', 'ambroseUniversity', 'grantMacewanUniversity', 'mountRoyalUniversity', 'universityOfBritishColumbia', 'universityOfNorthernBritishColumbia', 'royalRoadsUniversity', 'simonFraserUniversity', 'universityOfVictoria', 'thompsonRiversUniversity', 'capilanoUniversity', 'vancouverIslandUniversity', 'emilyCarrUniversityOfArtAndDesign', 'kwantlenPolytechnicUniversity', 'universityOfTheFraserValley', 'yukonUniversity', 'other');
  CREATE TYPE "public"."enum__users_v_version_field_of_study" AS ENUM('computerScience', 'anotherEngineering', 'informationSystems', 'naturalScience', 'mathematicsStatistics', 'webDevelopment', 'business', 'humanities', 'socialScience', 'fineArts', 'healthScience', 'other', 'undecided', 'noMajors', 'preferNotToAnswer');
  CREATE TYPE "public"."enum__users_v_version_degree" AS ENUM('secondary', 'undergraduate2Year', 'undergraduate3PlusYear', 'graduate', 'codeSchool', 'vocationalTrade', 'postDoctorate', 'other', 'notStudent', 'preferNotToAnswer');
  CREATE TYPE "public"."enum__users_v_version_year_standing" AS ENUM('1', '2', '3', '4', '5', '6+');
  CREATE TYPE "public"."enum__users_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_forms_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__forms_v_version_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum__forms_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__2025_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "2025" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"portal_login" varchar,
  	"portal_terms_title" varchar DEFAULT 'Legalities',
  	"portal_terms_description" varchar DEFAULT 'YO! Before we get into it, read these please.',
  	"portal_profile" varchar,
  	"portal_registration" varchar,
  	"website_header_logo_id" integer,
  	"website_call_to_action" varchar,
  	"website_about" varchar,
  	"website_events" varchar,
  	"website_sponsors" varchar,
  	"_status" "enum_2025_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "groups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"symbol_id" integer,
  	"event_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "brands_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "brands" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
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
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_brands_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_brands_v_version_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_brands_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_description" varchar,
  	"version_domain" varchar,
  	"version_email" varchar,
  	"version_phone" numeric,
  	"version_location" varchar,
  	"version_symbol_id" integer,
  	"version_wordmark_id" integer,
  	"version_github" varchar,
  	"version_linkedin" varchar,
  	"version_instagram" varchar,
  	"version_discord" varchar,
  	"version_behance" varchar,
  	"version_figma" varchar,
  	"version_linktree" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__brands_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "organizer_teams" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"symbol_id" integer,
  	"event_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "hardware_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_hardware_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "hardware_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "hardware" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" jsonb,
  	"resources" jsonb,
  	"quantity" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_events_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"location" varchar,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"registration_form_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"brands_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "hackathons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric NOT NULL,
  	"name" varchar NOT NULL,
  	"location" varchar,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"tera_id" integer,
  	"mega_id" integer,
  	"kilo_id" integer,
  	"centi_id" integer,
  	"mili_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
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
  	"group_id" integer,
  	"organizer_team_id" integer,
  	"preferred_display_name" varchar,
  	"first_name" varchar,
  	"middle_name" varchar,
  	"last_name" varchar,
  	"pronouns" "enum_users_pronouns",
  	"phone_number" varchar,
  	"age" numeric,
  	"gender" "enum_users_gender",
  	"avatar_id" integer,
  	"agreed_to_terms" boolean,
  	"resume_link" varchar,
  	"tshirt_size" "enum_users_tshirt_size",
  	"emergency_contact_full_name" varchar,
  	"emergency_contact_phone_number" varchar,
  	"emergency_contact_email" varchar,
  	"emergency_contact_relationship" "enum_users_emergency_contact_relationship",
  	"institution" "enum_users_institution",
  	"field_of_study" "enum_users_field_of_study",
  	"degree" "enum_users_degree",
  	"expected_graduation_date" timestamp(3) with time zone,
  	"year_standing" "enum_users_year_standing",
  	"website" varchar,
  	"behance" varchar,
  	"linkedin_vanity" varchar,
  	"linkedin_id" varchar,
  	"linkedin_email_verified" boolean,
  	"linkedin_locale" varchar,
  	"github_url" varchar,
  	"github_email" varchar,
  	"github_id" varchar,
  	"github_avatar_url" varchar,
  	"github_type" varchar,
  	"github_html_url" varchar,
  	"github_name" varchar,
  	"github_blog" varchar,
  	"github_location" varchar,
  	"github_hireable" varchar,
  	"github_public_repos" varchar,
  	"github_linkedin" varchar,
  	"github_instagram" varchar,
  	"discord_username" varchar,
  	"discord_global_name" varchar,
  	"discord_verified" boolean,
  	"discord_discriminator" varchar,
  	"discord_locale" varchar,
  	"discord_id" varchar,
  	"google_email" varchar,
  	"google_email_verified" boolean,
  	"sub" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_users_status" DEFAULT 'draft',
  	"email" varchar,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "_users_v_version_dietary_restrictions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__users_v_version_dietary_restrictions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_users_v_version_allergies" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__users_v_version_allergies",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_users_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_group_id" integer,
  	"version_organizer_team_id" integer,
  	"version_preferred_display_name" varchar,
  	"version_first_name" varchar,
  	"version_middle_name" varchar,
  	"version_last_name" varchar,
  	"version_pronouns" "enum__users_v_version_pronouns",
  	"version_phone_number" varchar,
  	"version_age" numeric,
  	"version_gender" "enum__users_v_version_gender",
  	"version_avatar_id" integer,
  	"version_agreed_to_terms" boolean,
  	"version_resume_link" varchar,
  	"version_tshirt_size" "enum__users_v_version_tshirt_size",
  	"version_emergency_contact_full_name" varchar,
  	"version_emergency_contact_phone_number" varchar,
  	"version_emergency_contact_email" varchar,
  	"version_emergency_contact_relationship" "enum__users_v_version_emergency_contact_relationship",
  	"version_institution" "enum__users_v_version_institution",
  	"version_field_of_study" "enum__users_v_version_field_of_study",
  	"version_degree" "enum__users_v_version_degree",
  	"version_expected_graduation_date" timestamp(3) with time zone,
  	"version_year_standing" "enum__users_v_version_year_standing",
  	"version_website" varchar,
  	"version_behance" varchar,
  	"version_linkedin_vanity" varchar,
  	"version_linkedin_id" varchar,
  	"version_linkedin_email_verified" boolean,
  	"version_linkedin_locale" varchar,
  	"version_github_url" varchar,
  	"version_github_email" varchar,
  	"version_github_id" varchar,
  	"version_github_avatar_url" varchar,
  	"version_github_type" varchar,
  	"version_github_html_url" varchar,
  	"version_github_name" varchar,
  	"version_github_blog" varchar,
  	"version_github_location" varchar,
  	"version_github_hireable" varchar,
  	"version_github_public_repos" varchar,
  	"version_github_linkedin" varchar,
  	"version_github_instagram" varchar,
  	"version_discord_username" varchar,
  	"version_discord_global_name" varchar,
  	"version_discord_verified" boolean,
  	"version_discord_discriminator" varchar,
  	"version_discord_locale" varchar,
  	"version_discord_id" varchar,
  	"version_google_email" varchar,
  	"version_google_email_verified" boolean,
  	"version_sub" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__users_v_version_status" DEFAULT 'draft',
  	"version_email" varchar,
  	"version_reset_password_token" varchar,
  	"version_reset_password_expiration" timestamp(3) with time zone,
  	"version_salt" varchar,
  	"version_hash" varchar,
  	"version_login_attempts" numeric DEFAULT 0,
  	"version_lock_until" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.',
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_forms_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v_version_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.',
  	"message" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_forms_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_submit_button_label" varchar,
  	"version_confirmation_type" "enum__forms_v_version_confirmation_type" DEFAULT 'message',
  	"version_confirmation_message" jsonb,
  	"version_redirect_url" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__forms_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"submitted_by_id" integer,
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
  	"groups_id" integer,
  	"brands_id" integer,
  	"media_id" integer,
  	"emails_id" integer,
  	"organizer_teams_id" integer,
  	"hardware_id" integer,
  	"events_id" integer,
  	"hackathons_id" integer,
  	"challenge_prize_id" integer,
  	"users_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer
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
  
  CREATE TABLE IF NOT EXISTS "2025_website_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "2025_website_faq_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bullet" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "2025_website_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "2025_website_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "2025_website_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer
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
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_website_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_website_faq_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"bullet" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_website_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_website_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v_version_website_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_2025_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_portal_login" varchar,
  	"version_portal_terms_title" varchar DEFAULT 'Legalities',
  	"version_portal_terms_description" varchar DEFAULT 'YO! Before we get into it, read these please.',
  	"version_portal_profile" varchar,
  	"version_portal_registration" varchar,
  	"version_website_header_logo_id" integer,
  	"version_website_call_to_action" varchar,
  	"version_website_about" varchar,
  	"version_website_events" varchar,
  	"version_website_sponsors" varchar,
  	"version__status" "enum__2025_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  DO $$ BEGIN
   ALTER TABLE "2025" ADD CONSTRAINT "2025_website_header_logo_id_media_id_fk" FOREIGN KEY ("website_header_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "groups" ADD CONSTRAINT "groups_symbol_id_media_id_fk" FOREIGN KEY ("symbol_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "groups" ADD CONSTRAINT "groups_event_id_hackathons_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."hackathons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "_brands_v_version_links" ADD CONSTRAINT "_brands_v_version_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_brands_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_brands_v" ADD CONSTRAINT "_brands_v_parent_id_brands_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_brands_v" ADD CONSTRAINT "_brands_v_version_symbol_id_media_id_fk" FOREIGN KEY ("version_symbol_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_brands_v" ADD CONSTRAINT "_brands_v_version_wordmark_id_media_id_fk" FOREIGN KEY ("version_wordmark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "organizer_teams" ADD CONSTRAINT "organizer_teams_symbol_id_media_id_fk" FOREIGN KEY ("symbol_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "organizer_teams" ADD CONSTRAINT "organizer_teams_event_id_hackathons_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."hackathons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hardware_categories" ADD CONSTRAINT "hardware_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."hardware"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hardware_images" ADD CONSTRAINT "hardware_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hardware_images" ADD CONSTRAINT "hardware_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hardware"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_type" ADD CONSTRAINT "events_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_images" ADD CONSTRAINT "events_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_images" ADD CONSTRAINT "events_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_registration_form_id_forms_id_fk" FOREIGN KEY ("registration_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathons" ADD CONSTRAINT "hackathons_tera_id_brands_id_fk" FOREIGN KEY ("tera_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathons" ADD CONSTRAINT "hackathons_mega_id_brands_id_fk" FOREIGN KEY ("mega_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathons" ADD CONSTRAINT "hackathons_kilo_id_brands_id_fk" FOREIGN KEY ("kilo_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathons" ADD CONSTRAINT "hackathons_centi_id_brands_id_fk" FOREIGN KEY ("centi_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hackathons" ADD CONSTRAINT "hackathons_mili_id_brands_id_fk" FOREIGN KEY ("mili_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
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
   ALTER TABLE "users" ADD CONSTRAINT "users_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_organizer_team_id_organizer_teams_id_fk" FOREIGN KEY ("organizer_team_id") REFERENCES "public"."organizer_teams"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v_version_dietary_restrictions" ADD CONSTRAINT "_users_v_version_dietary_restrictions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_users_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v_version_allergies" ADD CONSTRAINT "_users_v_version_allergies_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_users_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_parent_id_users_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_version_group_id_groups_id_fk" FOREIGN KEY ("version_group_id") REFERENCES "public"."groups"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_version_organizer_team_id_organizer_teams_id_fk" FOREIGN KEY ("version_organizer_team_id") REFERENCES "public"."organizer_teams"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_version_avatar_id_media_id_fk" FOREIGN KEY ("version_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_checkbox" ADD CONSTRAINT "_forms_v_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_country" ADD CONSTRAINT "_forms_v_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_email" ADD CONSTRAINT "_forms_v_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_message" ADD CONSTRAINT "_forms_v_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_number" ADD CONSTRAINT "_forms_v_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_select_options" ADD CONSTRAINT "_forms_v_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_select" ADD CONSTRAINT "_forms_v_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_state" ADD CONSTRAINT "_forms_v_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_text" ADD CONSTRAINT "_forms_v_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_blocks_textarea" ADD CONSTRAINT "_forms_v_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v_version_emails" ADD CONSTRAINT "_forms_v_version_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_forms_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_forms_v" ADD CONSTRAINT "_forms_v_parent_id_forms_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_submitted_by_id_users_id_fk" FOREIGN KEY ("submitted_by_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_groups_fk" FOREIGN KEY ("groups_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_organizer_teams_fk" FOREIGN KEY ("organizer_teams_id") REFERENCES "public"."organizer_teams"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hardware_fk" FOREIGN KEY ("hardware_id") REFERENCES "public"."hardware"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hackathons_fk" FOREIGN KEY ("hackathons_id") REFERENCES "public"."hackathons"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_prize_fk" FOREIGN KEY ("challenge_prize_id") REFERENCES "public"."challenge_prize"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "2025_website_header_links" ADD CONSTRAINT "2025_website_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "2025_website_faq_answers" ADD CONSTRAINT "2025_website_faq_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025_website_faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "2025_website_faq" ADD CONSTRAINT "2025_website_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "2025_website_footer_links" ADD CONSTRAINT "2025_website_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025_website_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "2025_website_footer" ADD CONSTRAINT "2025_website_footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "2025_website_footer" ADD CONSTRAINT "2025_website_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."2025"("id") ON DELETE cascade ON UPDATE no action;
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
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_website_header_links" ADD CONSTRAINT "_2025_v_version_website_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_website_faq_answers" ADD CONSTRAINT "_2025_v_version_website_faq_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v_version_website_faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_website_faq" ADD CONSTRAINT "_2025_v_version_website_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_website_footer_links" ADD CONSTRAINT "_2025_v_version_website_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v_version_website_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_website_footer" ADD CONSTRAINT "_2025_v_version_website_footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v_version_website_footer" ADD CONSTRAINT "_2025_v_version_website_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_2025_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_2025_v" ADD CONSTRAINT "_2025_v_version_website_header_logo_id_media_id_fk" FOREIGN KEY ("version_website_header_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "2025_website_header_website_header_logo_idx" ON "2025" USING btree ("website_header_logo_id");
  CREATE INDEX IF NOT EXISTS "2025__status_idx" ON "2025" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "groups_symbol_idx" ON "groups" USING btree ("symbol_id");
  CREATE INDEX IF NOT EXISTS "groups_event_idx" ON "groups" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "groups_updated_at_idx" ON "groups" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "groups_created_at_idx" ON "groups" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "brands_links_order_idx" ON "brands_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "brands_links_parent_id_idx" ON "brands_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "brands_symbol_idx" ON "brands" USING btree ("symbol_id");
  CREATE INDEX IF NOT EXISTS "brands_wordmark_idx" ON "brands" USING btree ("wordmark_id");
  CREATE INDEX IF NOT EXISTS "brands_updated_at_idx" ON "brands" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "brands_created_at_idx" ON "brands" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "brands__status_idx" ON "brands" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_links_order_idx" ON "_brands_v_version_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_links_parent_id_idx" ON "_brands_v_version_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_parent_idx" ON "_brands_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_symbol_idx" ON "_brands_v" USING btree ("version_symbol_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_wordmark_idx" ON "_brands_v" USING btree ("version_wordmark_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_updated_at_idx" ON "_brands_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_created_at_idx" ON "_brands_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version__status_idx" ON "_brands_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_brands_v_created_at_idx" ON "_brands_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_updated_at_idx" ON "_brands_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_latest_idx" ON "_brands_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "emails_updated_at_idx" ON "emails" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "emails_created_at_idx" ON "emails" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "organizer_teams_symbol_idx" ON "organizer_teams" USING btree ("symbol_id");
  CREATE INDEX IF NOT EXISTS "organizer_teams_event_idx" ON "organizer_teams" USING btree ("event_id");
  CREATE INDEX IF NOT EXISTS "organizer_teams_updated_at_idx" ON "organizer_teams" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "organizer_teams_created_at_idx" ON "organizer_teams" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "hardware_categories_order_idx" ON "hardware_categories" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "hardware_categories_parent_idx" ON "hardware_categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "hardware_images_order_idx" ON "hardware_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hardware_images_parent_id_idx" ON "hardware_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hardware_images_image_idx" ON "hardware_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "hardware_updated_at_idx" ON "hardware" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "hardware_created_at_idx" ON "hardware" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "events_type_order_idx" ON "events_type" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "events_type_parent_idx" ON "events_type" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "events_images_order_idx" ON "events_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_images_parent_id_idx" ON "events_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_images_image_idx" ON "events_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "events_registration_form_idx" ON "events" USING btree ("registration_form_id");
  CREATE INDEX IF NOT EXISTS "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "events_rels_brands_id_idx" ON "events_rels" USING btree ("brands_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "hackathons_year_idx" ON "hackathons" USING btree ("year");
  CREATE INDEX IF NOT EXISTS "hackathons_tera_idx" ON "hackathons" USING btree ("tera_id");
  CREATE INDEX IF NOT EXISTS "hackathons_mega_idx" ON "hackathons" USING btree ("mega_id");
  CREATE INDEX IF NOT EXISTS "hackathons_kilo_idx" ON "hackathons" USING btree ("kilo_id");
  CREATE INDEX IF NOT EXISTS "hackathons_centi_idx" ON "hackathons" USING btree ("centi_id");
  CREATE INDEX IF NOT EXISTS "hackathons_mili_idx" ON "hackathons" USING btree ("mili_id");
  CREATE INDEX IF NOT EXISTS "hackathons_updated_at_idx" ON "hackathons" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "hackathons_created_at_idx" ON "hackathons" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "challenge_prize_prize_for_position_order_idx" ON "challenge_prize_prize_for_position" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenge_prize_prize_for_position_parent_id_idx" ON "challenge_prize_prize_for_position" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_miscellaneous_prizes_order_idx" ON "challenge_prize_miscellaneous_prizes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenge_prize_miscellaneous_prizes_parent_id_idx" ON "challenge_prize_miscellaneous_prizes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "challenge_prize_updated_at_idx" ON "challenge_prize" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenge_prize_created_at_idx" ON "challenge_prize" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_dietary_restrictions_order_idx" ON "users_dietary_restrictions" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_dietary_restrictions_parent_idx" ON "users_dietary_restrictions" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_allergies_order_idx" ON "users_allergies" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_allergies_parent_idx" ON "users_allergies" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_group_idx" ON "users" USING btree ("group_id");
  CREATE INDEX IF NOT EXISTS "users_organizer_team_idx" ON "users" USING btree ("organizer_team_id");
  CREATE INDEX IF NOT EXISTS "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX IF NOT EXISTS "users_sub_idx" ON "users" USING btree ("sub");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users__status_idx" ON "users" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "_users_v_version_dietary_restrictions_order_idx" ON "_users_v_version_dietary_restrictions" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_users_v_version_dietary_restrictions_parent_idx" ON "_users_v_version_dietary_restrictions" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_allergies_order_idx" ON "_users_v_version_allergies" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_users_v_version_allergies_parent_idx" ON "_users_v_version_allergies" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_users_v_parent_idx" ON "_users_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_group_idx" ON "_users_v" USING btree ("version_group_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_organizer_team_idx" ON "_users_v" USING btree ("version_organizer_team_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_avatar_idx" ON "_users_v" USING btree ("version_avatar_id");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_sub_idx" ON "_users_v" USING btree ("version_sub");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_updated_at_idx" ON "_users_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_created_at_idx" ON "_users_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version__status_idx" ON "_users_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_users_v_version_version_email_idx" ON "_users_v" USING btree ("version_email");
  CREATE INDEX IF NOT EXISTS "_users_v_created_at_idx" ON "_users_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_users_v_updated_at_idx" ON "_users_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_users_v_latest_idx" ON "_users_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "forms__status_idx" ON "forms" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_checkbox_order_idx" ON "_forms_v_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_checkbox_parent_id_idx" ON "_forms_v_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_checkbox_path_idx" ON "_forms_v_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_country_order_idx" ON "_forms_v_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_country_parent_id_idx" ON "_forms_v_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_country_path_idx" ON "_forms_v_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_email_order_idx" ON "_forms_v_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_email_parent_id_idx" ON "_forms_v_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_email_path_idx" ON "_forms_v_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_message_order_idx" ON "_forms_v_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_message_parent_id_idx" ON "_forms_v_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_message_path_idx" ON "_forms_v_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_number_order_idx" ON "_forms_v_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_number_parent_id_idx" ON "_forms_v_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_number_path_idx" ON "_forms_v_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_select_options_order_idx" ON "_forms_v_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_select_options_parent_id_idx" ON "_forms_v_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_select_order_idx" ON "_forms_v_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_select_parent_id_idx" ON "_forms_v_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_select_path_idx" ON "_forms_v_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_state_order_idx" ON "_forms_v_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_state_parent_id_idx" ON "_forms_v_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_state_path_idx" ON "_forms_v_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_text_order_idx" ON "_forms_v_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_text_parent_id_idx" ON "_forms_v_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_text_path_idx" ON "_forms_v_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_textarea_order_idx" ON "_forms_v_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_textarea_parent_id_idx" ON "_forms_v_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_textarea_path_idx" ON "_forms_v_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_forms_v_version_emails_order_idx" ON "_forms_v_version_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_forms_v_version_emails_parent_id_idx" ON "_forms_v_version_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_parent_idx" ON "_forms_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_forms_v_version_version_updated_at_idx" ON "_forms_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_forms_v_version_version_created_at_idx" ON "_forms_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_forms_v_version_version__status_idx" ON "_forms_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_forms_v_created_at_idx" ON "_forms_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_forms_v_updated_at_idx" ON "_forms_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_forms_v_latest_idx" ON "_forms_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_submitted_by_idx" ON "form_submissions" USING btree ("submitted_by_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("groups_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_brands_id_idx" ON "payload_locked_documents_rels" USING btree ("brands_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_emails_id_idx" ON "payload_locked_documents_rels" USING btree ("emails_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_organizer_teams_id_idx" ON "payload_locked_documents_rels" USING btree ("organizer_teams_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hardware_id_idx" ON "payload_locked_documents_rels" USING btree ("hardware_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hackathons_id_idx" ON "payload_locked_documents_rels" USING btree ("hackathons_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenge_prize_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_prize_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "2025_portal_cards_order_idx" ON "2025_portal_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_portal_cards_parent_id_idx" ON "2025_portal_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_portal_terms_accordion_order_idx" ON "2025_portal_terms_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_portal_terms_accordion_parent_id_idx" ON "2025_portal_terms_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_website_header_links_order_idx" ON "2025_website_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_website_header_links_parent_id_idx" ON "2025_website_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_website_faq_answers_order_idx" ON "2025_website_faq_answers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_website_faq_answers_parent_id_idx" ON "2025_website_faq_answers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_website_faq_order_idx" ON "2025_website_faq" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_website_faq_parent_id_idx" ON "2025_website_faq" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_website_footer_links_order_idx" ON "2025_website_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_website_footer_links_parent_id_idx" ON "2025_website_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_website_footer_order_idx" ON "2025_website_footer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "2025_website_footer_parent_id_idx" ON "2025_website_footer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "2025_website_footer_logo_idx" ON "2025_website_footer" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_cards_order_idx" ON "_2025_v_version_portal_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_cards_parent_id_idx" ON "_2025_v_version_portal_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_terms_accordion_order_idx" ON "_2025_v_version_portal_terms_accordion" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_portal_terms_accordion_parent_id_idx" ON "_2025_v_version_portal_terms_accordion" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_header_links_order_idx" ON "_2025_v_version_website_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_header_links_parent_id_idx" ON "_2025_v_version_website_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_faq_answers_order_idx" ON "_2025_v_version_website_faq_answers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_faq_answers_parent_id_idx" ON "_2025_v_version_website_faq_answers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_faq_order_idx" ON "_2025_v_version_website_faq" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_faq_parent_id_idx" ON "_2025_v_version_website_faq" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_footer_links_order_idx" ON "_2025_v_version_website_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_footer_links_parent_id_idx" ON "_2025_v_version_website_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_footer_order_idx" ON "_2025_v_version_website_footer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_footer_parent_id_idx" ON "_2025_v_version_website_footer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_footer_logo_idx" ON "_2025_v_version_website_footer" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_website_header_version_website_header_logo_idx" ON "_2025_v" USING btree ("version_website_header_logo_id");
  CREATE INDEX IF NOT EXISTS "_2025_v_version_version__status_idx" ON "_2025_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_2025_v_created_at_idx" ON "_2025_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_2025_v_updated_at_idx" ON "_2025_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_2025_v_latest_idx" ON "_2025_v" USING btree ("latest");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "2025" CASCADE;
  DROP TABLE "groups" CASCADE;
  DROP TABLE "brands_links" CASCADE;
  DROP TABLE "brands" CASCADE;
  DROP TABLE "_brands_v_version_links" CASCADE;
  DROP TABLE "_brands_v" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "emails" CASCADE;
  DROP TABLE "organizer_teams" CASCADE;
  DROP TABLE "hardware_categories" CASCADE;
  DROP TABLE "hardware_images" CASCADE;
  DROP TABLE "hardware" CASCADE;
  DROP TABLE "events_type" CASCADE;
  DROP TABLE "events_images" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "hackathons" CASCADE;
  DROP TABLE "challenge_prize_prize_for_position" CASCADE;
  DROP TABLE "challenge_prize_miscellaneous_prizes" CASCADE;
  DROP TABLE "challenge_prize" CASCADE;
  DROP TABLE "users_dietary_restrictions" CASCADE;
  DROP TABLE "users_allergies" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "_users_v_version_dietary_restrictions" CASCADE;
  DROP TABLE "_users_v_version_allergies" CASCADE;
  DROP TABLE "_users_v" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "_forms_v_blocks_checkbox" CASCADE;
  DROP TABLE "_forms_v_blocks_country" CASCADE;
  DROP TABLE "_forms_v_blocks_email" CASCADE;
  DROP TABLE "_forms_v_blocks_message" CASCADE;
  DROP TABLE "_forms_v_blocks_number" CASCADE;
  DROP TABLE "_forms_v_blocks_select_options" CASCADE;
  DROP TABLE "_forms_v_blocks_select" CASCADE;
  DROP TABLE "_forms_v_blocks_state" CASCADE;
  DROP TABLE "_forms_v_blocks_text" CASCADE;
  DROP TABLE "_forms_v_blocks_textarea" CASCADE;
  DROP TABLE "_forms_v_version_emails" CASCADE;
  DROP TABLE "_forms_v" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "2025_portal_cards" CASCADE;
  DROP TABLE "2025_portal_terms_accordion" CASCADE;
  DROP TABLE "2025_website_header_links" CASCADE;
  DROP TABLE "2025_website_faq_answers" CASCADE;
  DROP TABLE "2025_website_faq" CASCADE;
  DROP TABLE "2025_website_footer_links" CASCADE;
  DROP TABLE "2025_website_footer" CASCADE;
  DROP TABLE "_2025_v_version_portal_cards" CASCADE;
  DROP TABLE "_2025_v_version_portal_terms_accordion" CASCADE;
  DROP TABLE "_2025_v_version_website_header_links" CASCADE;
  DROP TABLE "_2025_v_version_website_faq_answers" CASCADE;
  DROP TABLE "_2025_v_version_website_faq" CASCADE;
  DROP TABLE "_2025_v_version_website_footer_links" CASCADE;
  DROP TABLE "_2025_v_version_website_footer" CASCADE;
  DROP TABLE "_2025_v" CASCADE;
  DROP TYPE "public"."enum_2025_status";
  DROP TYPE "public"."enum_brands_status";
  DROP TYPE "public"."enum__brands_v_version_status";
  DROP TYPE "public"."enum_hardware_categories";
  DROP TYPE "public"."enum_events_type";
  DROP TYPE "public"."enum_users_dietary_restrictions";
  DROP TYPE "public"."enum_users_allergies";
  DROP TYPE "public"."enum_users_pronouns";
  DROP TYPE "public"."enum_users_gender";
  DROP TYPE "public"."enum_users_tshirt_size";
  DROP TYPE "public"."enum_users_emergency_contact_relationship";
  DROP TYPE "public"."enum_users_institution";
  DROP TYPE "public"."enum_users_field_of_study";
  DROP TYPE "public"."enum_users_degree";
  DROP TYPE "public"."enum_users_year_standing";
  DROP TYPE "public"."enum_users_status";
  DROP TYPE "public"."enum__users_v_version_dietary_restrictions";
  DROP TYPE "public"."enum__users_v_version_allergies";
  DROP TYPE "public"."enum__users_v_version_pronouns";
  DROP TYPE "public"."enum__users_v_version_gender";
  DROP TYPE "public"."enum__users_v_version_tshirt_size";
  DROP TYPE "public"."enum__users_v_version_emergency_contact_relationship";
  DROP TYPE "public"."enum__users_v_version_institution";
  DROP TYPE "public"."enum__users_v_version_field_of_study";
  DROP TYPE "public"."enum__users_v_version_degree";
  DROP TYPE "public"."enum__users_v_version_year_standing";
  DROP TYPE "public"."enum__users_v_version_status";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_forms_status";
  DROP TYPE "public"."enum__forms_v_version_confirmation_type";
  DROP TYPE "public"."enum__forms_v_version_status";
  DROP TYPE "public"."enum__2025_v_version_status";`)
}
