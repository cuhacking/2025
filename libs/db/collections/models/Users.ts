// https://github.com/shefing/payload-tools/tree/main/packages/authorization
/* eslint-disable node/prefer-global/process */
import { getOrUploadMedia } from "@/db/seed";
import { Payload } from "payload";
import type { CollectionConfig } from "payload";
import {
  admins,
  isSameUser,
  adminsAndUser,
  anyone,
  authenticated,
  isSuperAdmin,
  // checkRole
} from "@/db/access";
// import { authenticated, isAdminFieldLevel } from '@/db/access'
import { navAccordions } from "@/db/collections/navAccordions";

const LEVEL_OF_STUDY = [
  { value: "secondary", label: "Secondary / High School" },
  {
    value: "undergraduate2Year",
    label: "College",
  },
  {
    value: "undergraduate3PlusYear",
    label: "Undergraduate",
  },
  {
    value: "graduate",
    label: "Graduate University",
  },
  { value: "codeSchool", label: "Code School / Bootcamp" },
  {
    value: "vocationalTrade",
    label: "Trade Program or Apprenticeship",
  },
  { value: "postDoctorate", label: "Post Doctorate" },
  { value: "other", label: "Other" },
  { value: "notStudent", label: "I’m not currently a student" },
  { value: "preferNotToAnswer", label: "Prefer not to answer" },
];

const FIELD_OF_STUDY = [
  {
    value: "computerScience",
    label: "Computer science, computer engineering, or software engineering",
  },
  {
    value: "anotherEngineering",
    label:
      "Another engineering discipline (such as civil, electrical, mechanical, etc.)",
  },
  {
    value: "informationSystems",
    label:
      "Information systems, information technology, or system administration",
  },
  {
    value: "naturalScience",
    label: "A natural science (such as biology, chemistry, physics, etc.)",
  },
  { value: "mathematicsStatistics", label: "Mathematics or statistics" },
  { value: "webDevelopment", label: "Web development or web design" },
  {
    value: "business",
    label: "Business discipline (such as accounting, finance, marketing, etc.)",
  },
  {
    value: "humanities",
    label:
      "Humanities discipline (such as literature, history, philosophy, etc.)",
  },
  {
    value: "socialScience",
    label:
      "Social science (such as anthropology, psychology, political science, etc.)",
  },
  {
    value: "fineArts",
    label:
      "Fine arts or performing arts (such as graphic design, music, studio art, etc.)",
  },
  {
    value: "healthScience",
    label: "Health science (such as nursing, pharmacy, radiology, etc.)",
  },
  { value: "other", label: "Other" },
  { value: "undecided", label: "Undecided / No Declared Major" },
  {
    value: "noMajors",
    label: "My school does not offer majors / primary areas of study",
  },
  { value: "preferNotToAnswer", label: "Prefer not to answer" },
];

const GENDER = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non-binary", label: "Non-Binary" },
  { value: "transgender", label: "Transgender" },
  { value: "genderfluid", label: "Genderfluid" },
  { value: "agender", label: "Agender" },
  { value: "two-spirit", label: "Two-Spirit" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

function toCamelCase(sentence: string) {
  return sentence
    .replace(/[^a-z0-9 ]/gi, "") // Remove non-alphanumeric characters
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}

export const RELATIONSHIPS = [
  { label: "Parent", value: "parent" },
  { label: "Spouse", value: "spouse" },
  { label: "Sibling", value: "sibling" },
  { label: "Child", value: "child" },
  { label: "Guardian", value: "guardian" },
  { label: "Grandparent", value: "grandparent" },
  { label: "Aunt/Uncle", value: "auntUncle" },
  { label: "Cousin", value: "cousin" },
  { label: "Friend", value: "friend" },
  { label: "Neighbor", value: "neighbor" },
  { label: "Colleague", value: "colleague" },
  { label: "Doctor", value: "doctor" },
  { label: "Caregiver", value: "caregiver" },
  { label: "Legal Representative", value: "legalRepresentative" },
  { label: "Other", value: "other" },
];

const ALL_SCHOOLS = [
  "Memorial University of Newfoundland",
  "University of Prince Edward Island",
  "Acadia University",
  "Acadia Divinity College",
  "Atlantic School of Theology",
  "Cape Breton University",
  "Dalhousie University",
  "University of King's College",
  "Mount Saint Vincent University",
  "Nova Scotia College of Art and Design University (NSCAD)",
  "Université Sainte-Anne",
  "St. Francis Xavier University",
  "Saint Mary's University",
  "Mount Allison University",
  "University of New Brunswick",
  "Université de Moncton (parent)",
  "St. Thomas University",
  "Bishop's University",
  "McGill University",
  "Université de Montréal",
  "Polytechnique Montréal",
  "École des hautes études commerciales",
  "Université Laval",
  "Université de Sherbrooke",
  "Concordia University",
  "Université du Québec à Chicoutimi",
  "Université du Québec à Montréal",
  "Université du Québec en Abitibi-Témiscamingue",
  "Université du Québec à Trois-Rivières",
  "Université du Québec en Outaouais",
  "Université du Québec, École nationale d'administration publique (ENAP)",
  "Université du Québec, Institut national de la recherche scientifique",
  "Université du Québec à Rimouski",
  "Université du Québec, École de technologie supérieure",
  "Université du Québec, Télé-université du Québec (TÉLUQ)",
  "Brock University",
  "Concordia Lutheran Theological Seminary",
  "Carleton University",
  "Dominican University College/Collège Universitaire Dominicain",
  "University of Guelph",
  "Lakehead University",
  "Laurentian University of Sudbury/Université Laurentienne de Sudbury",
  "McMaster University",
  "Nipissing University",
  "University of Ottawa",
  "Saint-Paul University/Université Saint-Paul",
  "Queen's University",
  "Ryerson University",
  "University of Toronto",
  "St. Augustine's Seminary",
  "University of St. Michael's College",
  "University of Trinity College",
  "Victoria University",
  "Knox College",
  "Wycliffe College",
  "Regis College",
  "Trent University",
  "University of Waterloo",
  "St. Jerome's University",
  "Renison University College",
  "Conrad Grebel University College",
  "University of Western Ontario",
  "Brescia University College",
  "Huron University College",
  "King's College",
  "Wilfred Laurier University",
  "University of Windsor",
  "York University",
  "Ontario College of Art and Design",
  "University of Ontario Institute of Technology",
  "Algoma University College",
  "University of Sudbury",
  "Université de Hearst",
  "Huntington University",
  "Thorneloe University",
  "Brandon University",
  "Canadian Mennonite University",
  "University of Manitoba",
  "Université de Saint-Boniface",
  "University of Winnipeg",
  "University of Regina",
  "Campion College",
  "Luther College",
  "University of Saskatchewan ",
  "College of Emmanuel and St. Chad",
  "Lutheran Theological Seminary",
  "St. Andrew's College",
  "St. Thomas More College",
  "Horizon College & Seminary",
  "University of Alberta",
  "Athabasca University",
  "University of Calgary",
  "Burman University",
  "Concordia University of Edmonton",
  "University of Lethbridge",
  "The King's University College",
  "Ambrose University",
  "Grant MacEwan University",
  "Mount Royal University",
  "University of British Columbia",
  "University of Northern British Columbia",
  "Royal Roads University",
  "Simon Fraser University",
  "University of Victoria",
  "Thompson Rivers University",
  "Capilano University",
  "Vancouver Island University",
  "Emily Carr University of Art and Design",
  "Kwantlen Polytechnic University",
  "University of the Fraser Valley",
  "Yukon University",
  "Other",
];

const SCHOOLS = ALL_SCHOOLS.map((school) => ({
  label: school,
  value: toCamelCase(school),
}));

export const Users: CollectionConfig = {
  slug: "users",
  // auth: true,
  auth: {
    cookies: {
      domain: process.env.NODE_ENV === 'development' ? 'localhost' : '.cuhacking.ca',
      sameSite: 'None',
      secure: true
      },
    disableLocalStrategy: {
      enableFields: true,
      optionalPassword: true,
    },
  },
  access: {
    admin: isSuperAdmin,
    read: adminsAndUser,
    create: authenticated,
    update: ({ req }) => isSuperAdmin({ req }) || isSameUser({ req }),
    delete: admins,
  },
  // hooks: {
  //   afterChange: [loginAfterCreate],
  // },
  admin: {
    livePreview: {
      url: `${process.env.CUHACKING_2025_PORTAL_LOCAL_URL}/profile`,
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 320,
          height: 568,
        },
      ],
    },
    group: navAccordions.featured,
    useAsTitle: "preferredDisplayName",
    defaultColumns: [
      "avatar",
      "preferredDisplayName",
      "pronouns",
      "group",
      "updatedAt",
      "createdAt",
      "id",
    ],
    pagination: {
      defaultLimit: 50,
      limits: [10, 20, 50],
    },
  },
  versions: {
    drafts: true,
    maxPerDoc: 3,
  },
  fields: [
    {
      name: "hackathons",
      type: "relationship",
      relationTo: "hackathons",
    },
    {
    type:"row",
      admin: {
       position: "sidebar"
      },
      fields:[
    {
      name: "group",
      type: "relationship",
      relationTo: "groups",
    },
    {
      name: "organizerTeam",
      type: "relationship",
      relationTo: "organizerTeams",
      admin: {
        // condition: (_, siblingData, {user}) => {
        //   return !!siblingData.group;
        // },
      },
    },
      ]
    },
    {
      type:"row",
    fields:[
    {
      type: "collapsible",
      label: ({ data }) => data?.title || "Personal Information",
      fields: [
        {
          type: 'row',
          fields:[
        { name: "firstName", type: "text", label: "First Name" },
        { name: "middleName", type: "text", label: "Middle Name", admin: {hidden: true} },
        { name: "lastName", type: "text", label: "Last Name" },
        { name: "preferredDisplayName", type: "text", label: "Display Name" },
          ],
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
          label: "Avatar",
        },
        {
          type: 'row',
          fields:[
        { name: "gender", type: "select", label: "Gender", options: GENDER },
        {
          name: "pronouns",
          type: "select",
          label: "Pronouns",
          options: [
            { label: "He/Him", value: "he/him" },
            { label: "She/Her", value: "she/her" },
            { label: "They/Them", value: "they/them" },
            { label: "Other", value: "other" },
          ],
        },
        { name: "age", type: "number", label: "Age" },
          ],
        },
        { name: "phoneNumber", type: "text", label: "Phone Number" },
      ],
    },
      {
      type: "collapsible",
      label: "Acommodations",
      fields:[
    {
      name: "dietaryRestrictions",
      type: "select",
      label: "🍽 Dietary Restrictions",
      options: [
        { label: "🥗 Vegetarian", value: "vegetarian" },
        { label: "🌱 Vegan", value: "vegan" },
        { label: "🕌 Halal", value: "halal" },
        { label: "✡ Kosher", value: "kosher" },
        { label: "🐟 Pescatarian", value: "pescatarian" },
        { label: "🥛 Dairy-Free", value: "dairy_free" },
        { label: "🌾 Gluten-Free", value: "gluten_free" },
        { label: "🍤 Shellfish-Free", value: "shellfish_free" },
        { label: "🥜 Nut-Free", value: "nut_free" },
        { label: "🥩 Keto", value: "keto" },
        { label: "🧀 Low-Lactose", value: "low_lactose" },
        { label: "🍚 Low-Carb", value: "low_carb" },
        { label: "🍖 Paleo", value: "paleo" },
        { label: "⚡ High-Protein", value: "high_protein" },
        { label: "🌿 Raw Vegan", value: "raw_vegan" },
        { label: "🥒 Whole30", value: "whole30" },
        { label: "🍵 Fasting", value: "fasting" },
        { label: "❓ Other", value: "other" },
      ],
      hasMany: true,
    },
    {
      name: "allergies",
      type: "select",
      label: "⚠ Allergies",
      options: [
        { label: "🥜 Peanuts", value: "peanuts" },
        { label: "🌰 Tree Nuts", value: "tree_nuts" },
        { label: "🥛 Dairy", value: "dairy" },
        { label: "🍤 Shellfish", value: "shellfish" },
        { label: "🐟 Fish", value: "fish" },
        { label: "🍯 Soy", value: "soy" },
        { label: "🍳 Eggs", value: "eggs" },
        { label: "🥩 Red Meat", value: "red_meat" },
        { label: "🌽 Corn", value: "corn" },
        { label: "🥦 Sulfites", value: "sulfites" },
        { label: "🍎 Fruits", value: "fruits" },
        { label: "🥕 Vegetables", value: "vegetables" },
        { label: "🍙 Sesame", value: "sesame" },
        { label: "🍯 Honey", value: "honey" },
        { label: "☕ Caffeine", value: "caffeine" },
        { label: "❓ Other", value: "other" },
        { label: "🌾 Gluten", value: "gluten" },
        { label: "🌾 Wheat", value: "wheat" },
        { label: "🌶 Mustard", value: "mustard" },
        { label: "💉 Latex", value: "latex" },
      ],
      hasMany: true,
    },
      ]},
    ]},
    {
      name: "agreedToTerms",
      type: "checkbox",
      label: "Agreed to Terms and Conditions",
      admin: { position: "sidebar" },
    },
    {
      name: "resumeLink",
      type: "text",
      label: "Resume Link",
      admin: { position: "sidebar" },
    },
    {
      name: "tshirtSize",
      type: "select",
      label: "T-Shirt Size",
      admin: { position: "sidebar" },
      options: [
        { label: "XS", value: "xs" },
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
        { label: "3XL", value: "3xl" },
      ],
    },
    {
      label: "Education",
      type: "collapsible",
      fields: [
        {
          type: "row",
          fields: [
        {
          name: "degree",
          type: "select",
          label: "Degree",
          options: LEVEL_OF_STUDY,
        },
        {
          name: "institution",
          type: "select",
          options: SCHOOLS,
          label: "Institution",
        },
        {
          name: "fieldOfStudy",
          type: "select",
          options: FIELD_OF_STUDY,
          label: "Field of Study",
        },
          ]
        },
        {
        type: "row",
          fields: [
        {
          name: "yearStanding",
          type: "select",
          options: ["1", "2", "3", "4", "5", "6+"],
        },
        {
          name: "expectedGraduationDate",
          type: "date",
          label: "Expected Graduation Date",
        },
          ]
        },
      ],
    },
    {
      label: "Emergency Contact",
      type: "collapsible",
      fields: [
    {
    type: "row",
      fields:[
        { name: "emergencyContactFullName", type: "text", label: "Full Name" },
        {
          name: "emergencyContactRelationship",
          type: "select",
          label: "Relationship",
          options: RELATIONSHIPS,
        },
      ]
    },
    {
    type: "row",
      fields:[
        { name: "emergencyContactPhoneNumber", type: "text", label: "Cell" },
        {
          name: "emergencyContactEmail",
          type: "email",
          label: "Email Address",
        },
      ]
    },
      ],
    },
    {
      type: "collapsible",
      label: ({ data }) => data?.title || "Brand & Socials",
      admin: { position: "sidebar" },
      fields: [
        {
          name: "website",
          type: "text",
          label: "Personal Website",
        },
        {
          name: "behance",
          type: "text",
          label: "Behance",
          admin: { readOnly: true },
        },
        {
          type: "collapsible",
          label: "LinkedIn",
          fields: [
            {
              name: "linkedinVanity",
              type: "text",
              label: "Handle",
              admin: { readOnly: true },
            },
            {
              name: "linkedinId",
              type: "text",
              label: "ID",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "linkedinEmailVerified",
              label: "Verified Email",
              type: "checkbox",
              admin: {
                readOnly: true,
              },
            },
            {
              name: "linkedinLocale",
              type: "text",
              admin: {
                readOnly: true,
              },
            },
          ],
        },
        {
          type: "collapsible",
          label: "GitHub",
          admin: { readOnly: true },
          fields: [
            {
              name: "githubUrl",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubEmail",
              type: "email",
            },
            {
              name: "githubId",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubAvatarUrl",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubType",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubHtmlUrl",
              type: "text",
            },
            {
              name: "githubName",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubBlog",
              type: "text",
            },
            {
              name: "githubLocation",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubHireable",
              type: "text",
              admin: {
                condition: () => {
                  return false;
                },
              },
            },
            {
              name: "githubPublicRepos",
              type: "text",
            },
            {
              name: "githubLinkedin",
              type: "text",
            },
            {
              name: "githubInstagram",
              type: "text",
            },
          ],
        },
        {
          type: "collapsible",
          label: "Discord",
          fields: [
            {
              name: "discordUsername",
              type: "text",
            },
            {
              name: "discordGlobalName",
              type: "text",
            },
            {
              name: "discordVerified",
              type: "checkbox",
            },
            {
              name: "discordDiscriminator",
              type: "text",
            },
            {
              name: "discordLocale",
              type: "text",
            },
            {
              name: "discordId",
              type: "text",
              admin: {
                readOnly: true,
                condition: () => {
                  return false;
                },
              },
            },
          ],
        },
        {
          type: "collapsible",
          label: "Google",
          fields: [
            { name: "googleEmail", type: "email" },
            {
              name: "googleEmailVerified",
              type: "checkbox",
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
};

export async function seedUsers(payload: Payload, req: any) {
  payload.logger.info("👤 Uploading user avatars & inserting users...");

  await Promise.all(
    [
      {
        email: "info@cuhacking.ca",
        firstName: "Info",
        lastName: "cuHacking",
        preferredDisplayName: "Info cuHacking",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Logistics",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/keycap-logo/cuhacking_keycap_logo_sky_blue.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9rZXljYXAtbG9nby9jdWhhY2tpbmdfa2V5Y2FwX2xvZ29fc2t5X2JsdWUuc3ZnIiwiaWF0IjoxNzQxODA1OTY0LCJleHAiOjE3NzMzNDE5NjR9.CW2bS-zuthZEe8xkuOKb3Eeuqkxltn8uj5g2ei8iDpE",
      },
      {
        email: "adam@example.com",
        firstName: "Adam",
        lastName: "Said",
        preferredDisplayName: "Adam Said",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Advisors",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Adam_Said.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQWRhbV9TYWlkLmpwZyIsImlhdCI6MTc0MTU2NTYxMSwiZXhwIjoxNzczMTAxNjExfQ.w05ond7o80w1gBwb4FsltPOrdOdPdbWQ2UMfAo_ILYI",
        linkedinVanity: "adamsaid-",
        tshirtSize: "m",
      },
      {
        email: "ryan@example.com",
        firstName: "Ryan",
        lastName: "Awad",
        preferredDisplayName: "Ryan Awad",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Advisors",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Ryan_Awad.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfUnlhbl9Bd2FkLmpwZyIsImlhdCI6MTc0MTU2NTg5NywiZXhwIjoxNzczMTAxODk3fQ.yudFkekrqEr8swlKLNknf5RSEFOd6JIgm_zHUmNe_qM",
        linkedinVanity: "ryanawad",
        tshirtSize: "l",
      },
      {
        email: "isabella@example.com",
        firstName: "Isabella",
        lastName: "Nguyen",
        preferredDisplayName: "Isabella Nguyen",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Co-Leads",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Isabella_Nguyen.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSXNhYmVsbGFfTmd1eWVuLmpwZWciLCJpYXQiOjE3NDE1NjU3NTcsImV4cCI6MTc3MzEwMTc1N30.okMsGB7ASz8Rzkw2-nIb1vgLPAsIbM2mvas9zO_i73w",
        linkedinVanity: "isabella-vi-nguyen",
        tshirtSize: "s",
      },
      {
        email: "aashna@example.com",
        firstName: "Aashna",
        lastName: "Verma",
        preferredDisplayName: "Aashna Verma",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Co-Leads",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Aashna_Verma.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQWFzaG5hX1Zlcm1hLmpwZWciLCJpYXQiOjE3NDE1NjU1NzMsImV4cCI6MTc3MzEwMTU3M30.D_yOgrX4dzRtwVAUK_G792tkd_O5U3emP2SZ9hFnJfY",
        website: "https://aashna-verma.github.io",
        linkedinVanity: "aashna-verma-000",
        tshirtSize: "m",
      },
      {
        email: "esra@example.com",
        firstName: "Esra",
        lastName: "Marwa",
        preferredDisplayName: "Esra Marwa",
        group: "Organizer",
        organizerTeam: "Community Engagement",
        pronouns: "she/her",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Esra_Marwa.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfRXNyYV9NYXJ3YS5wbmciLCJpYXQiOjE3NDE1NjU3MDMsImV4cCI6MTc3MzEwMTcwM30.r8GsqUFSkHoih6yra5764gRcxRJqWL5ntJHC3wLHVVo",
        linkedinVanity: "esra-abdulwahab-947b332ab",
        tshirtSize: "l",
      },
      {
        email: "selena@example.com",
        firstName: "Selena",
        lastName: "Quang",
        preferredDisplayName: "Selena Quang",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Community Engagement",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Selena_Quang.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfU2VsZW5hX1F1YW5nLnBuZyIsImlhdCI6MTc0MTU2NTkxOCwiZXhwIjoxNzczMTAxOTE4fQ.4fRfAZ8RaklIEtJ_fCgAOXecB6LUq3is90-KG2aS3jM",
        linkedinVanity: "selena-quang-0aa9422b1",
        tshirtSize: "m",
      },
      {
        email: "raef@example.com",
        firstName: "Raef",
        lastName: "Sarofiem",
        preferredDisplayName: "Raef Sarofiem",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Community Engagement",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Raef_Sarofiem.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfUmFlZl9TYXJvZmllbS5wbmciLCJpYXQiOjE3NDE1NjU4NzQsImV4cCI6MTc3MzEwMTg3NH0.t_xw5u-lVJCXPYny012es5-ayttVqzZ5ibIdQhsewh4",
        linkedinVanity: "raefsarofiem",
        tshirtSize: "m",
      },
      {
        email: "ajaan@example.com",
        firstName: "Ajaan",
        lastName: "Nalliah",
        preferredDisplayName: "Ajaan Nalliah",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Community Engagement",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Ajaan_Nalliah.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQWphYW5fTmFsbGlhaC5qcGVnIiwiaWF0IjoxNzQxNTY1NjM1LCJleHAiOjE3NzMxMDE2MzV9.LlDfVqIn0TtXoEWvZI8r2jyX6e8huphoz6Vm8GiC48U",
        linkedinVanity: "ajaan-nalliah-6b2b1029b",
        tshirtSize: "l",
      },
      {
        email: "ishar@example.com",
        firstName: "Ishar",
        lastName: "Ghura",
        preferredDisplayName: "Ishar Ghura",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Community Engagement",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Ishar_Ghura.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSXNoYXJfR2h1cmEuanBlZyIsImlhdCI6MTc0MTU2NTc2NiwiZXhwIjoxNzczMTAxNzY2fQ.cg2oUVV1JLnzVLImod2uCD0YeQn53Zxp0IPBe2UQ6FE",
        linkedinVanity: "ishar-ghura",
        tshirtSize: "m",
      },
      {
        email: "avantika@example.com",
        firstName: "Avantika",
        lastName: "Rao",
        preferredDisplayName: "Avantika Rao",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Design",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Avantika_Rao.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQXZhbnRpa2FfUmFvLnBuZyIsImlhdCI6MTc0MTU2NTY1OCwiZXhwIjoxNzczMTAxNjU4fQ.VGfbmh4ORhK-h_y0Jbw3kGR5aYGw7_bFrxY51jtEfUI",
        linkedinVanity: "avantika-rao-01a1b2204",
        tshirtSize: "s",
      },
      {
        email: "khyonc@example.com",
        firstName: "Khyonc",
        lastName: "Brown",
        preferredDisplayName: "Khyonc Brown",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Design",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Khyonc_Brown.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfS2h5b25jX0Jyb3duLmpwZWciLCJpYXQiOjE3NDE1NjU4MTQsImV4cCI6MTc3MzEwMTgxNH0.n3gnmTDbJXlwdiAi2yxKDtAfyCfGjvryP1CqP_Adips",
        linkedinVanity: "khyonc-browne-7a3518258",
        tshirtSize: "l",
      },
      {
        email: "muhammad.maisam@example.com",
        firstName: "Muhammad",
        lastName: "Maisam",
        preferredDisplayName: "Muhammad Maisam",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Hacker Experience",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Muhammad_Maisam.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfTXVoYW1tYWRfTWFpc2FtLnBuZyIsImlhdCI6MTc0MTU2NTgzMiwiZXhwIjoxNzczMTAxODMyfQ.g_D5apqDEMRI-rH3n9VMnniES6HUXT_vQ8llxtWase8",
        linkedinVanity: "muhammadmaisam01",
        tshirtSize: "m",
      },
      {
        email: "trista.wang@example.com",
        firstName: "Trista",
        lastName: "Wang",
        preferredDisplayName: "Trista Wang",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Hacker Experience",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Trista_Wang.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfVHJpc3RhX1dhbmcucG5nIiwiaWF0IjoxNzQxNTY1OTI4LCJleHAiOjE3NzMxMDE5Mjh9.l2c1Y6Dsa9SDCaWmTqaPtxO3ZSJGOcL7zh-Lz4m8jj4",
        linkedinVanity: "tristaxwang",
        tshirtSize: "s",
      },
      {
        email: "joel.cherian@example.com",
        firstName: "Joel",
        lastName: "Cherian",
        preferredDisplayName: "Joel Cherian",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Hacker Experience",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Joel_Cherian.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSm9lbF9DaGVyaWFuLnBuZyIsImlhdCI6MTc0MTU2NTc4NiwiZXhwIjoxNzczMTAxNzg2fQ.j5or3tbETMwiB0D_d_0e7FpeBaYnrdSgU0i5ILwP0F4",
        linkedinVanity: "joel-v-cherian",
        tshirtSize: "m",
      },
      {
        email: "lily.salem@example.com",
        firstName: "Lily",
        lastName: "Salem",
        preferredDisplayName: "Lily Salem",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Hacker Experience",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Lily_Salem.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfTGlseV9TYWxlbS5qcGVnIiwiaWF0IjoxNzQxNTY1ODIzLCJleHAiOjE3NzMxMDE4MjN9.jGRWti4jPwLkwNyKAJEOvpLQaGXqxt012SnH_T5erFQ",
        linkedinVanity: "lily-s-396190262",
        tshirtSize: "s",
      },
      {
        email: "ngan.cao@example.com",
        firstName: "Ngan",
        lastName: "Cao",
        preferredDisplayName: "Ngan Cao",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Logistics",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Ngan_Cao.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfTmdhbl9DYW8uanBnIiwiaWF0IjoxNzQxNTY1ODYwLCJleHAiOjE3NzMxMDE4NjB9.dDHRD4ZAsXse_5kThl5m9HF9cB1tQ0gM-ruYB2ZtO88",
        linkedinVanity: "nganc",
        tshirtSize: "m",
      },
      {
        email: "giancarlo.salvador@example.com",
        firstName: "Giancarlo",
        lastName: "Salvador",
        preferredDisplayName: "Giancarlo Salvador",
        group: "Organizer",
        organizerTeam: "Logistics",
        pronouns: "he/him",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Giancarlo_Salvador.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfR2lhbmNhcmxvX1NhbHZhZG9yLnBuZyIsImlhdCI6MTc0MTU2NTcxMiwiZXhwIjoxNzczMTAxNzEyfQ.z2aeQGhVAkEuEZXDHQpEv5Y5SFOYlW7as6K5vI0CeHQ",
        linkedinVanity: "giancarlo-salvador-310696203",
        tshirtSize: "m",
      },
      {
        email: "bashar.kazma@example.com",
        firstName: "Bashar",
        lastName: "Kazma",
        preferredDisplayName: "Bashar Kazma",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Sponsorship",
        linkedinVanity: "bashar-kazma-a7223b208",
        tshirtSize: "m",
      },
      {
        email: "sheila.sieyoji@example.com",
        firstName: "Sheila",
        lastName: "Sieyoji",
        preferredDisplayName: "Sheila Sieyoji",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Sponsorship",
        linkedinVanity: "sheila-sieyoji",
        tshirtSize: "s",
      },
      {
        email: "muskaan.opel@example.com",
        firstName: "Muskaan",
        lastName: "Opel",
        preferredDisplayName: "Muskaan Opel",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Sponsorship",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Muskaan_Opel.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfTXVza2Fhbl9PcGVsLmpwZyIsImlhdCI6MTc0MTU2NTg0MiwiZXhwIjoxNzczMTAxODQyfQ.O-LTBixpU_5OqmCjJ5dV6rJfeHA5Jzk6Si7dt4_5FBo",
        linkedinVanity: "muskaan-opel",
        tshirtSize: "m",
      },
      {
        email: "raaed.mirza@example.com",
        firstName: "Raaed",
        lastName: "Mirza",
        preferredDisplayName: "Raaed Mirza",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Sponsorship",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Raaed_Mirza.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfUmFhZWRfTWlyemEucG5nIiwiaWF0IjoxNzQxNTY1ODY2LCJleHAiOjE3NzMxMDE4NjZ9.HWLxXOnT0LQbPj2jW0EhlnpAMGKWGvlN2Pc6vBE30fg",
        linkedinVanity: "raaed-mirza-96a01324b",
        tshirtSize: "m",
      },
      {
        email: "rayhaan.farooq@example.com",
        firstName: "Rayhaan",
        lastName: "Farooq",
        preferredDisplayName: "Rayhaan Farooq",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Sponsorship",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Rayhaan_Farooq.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfUmF5aGFhbl9GYXJvb3EuanBnIiwiaWF0IjoxNzQxNTY1ODgzLCJleHAiOjE3NzMxMDE4ODN9.mWeNBYA4iAToWJHR66EH-cGnsWzea3A-OGKDz8PcogQ",
        linkedinVanity: "rayhaanfarooq",
        tshirtSize: "l",
      },
      {
        email: "akshavi.baskaran@example.com",
        firstName: "Akshavi",
        lastName: "Baskaran",
        preferredDisplayName: "Akshavi Baskaran",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Sponsorship",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Akshavi_Baskaran.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQWtzaGF2aV9CYXNrYXJhbi5qcGVnIiwiaWF0IjoxNzQxNTY1NjQ3LCJleHAiOjE3NzMxMDE2NDd9.4KXwTWpDRw2KAwvQ_vNC5M5KEYY7K6SK2EUUk8HdWJU",
        linkedinVanity: "akshavibaskaran",
        tshirtSize: "s",
      },
      {
        email: "saim.hashmi@example.com",
        firstName: "Saim",
        lastName: "Hashmi",
        preferredDisplayName: "Saim Hashmi",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Development",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Saim_Hashmi.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfU2FpbV9IYXNobWkuanBnIiwiaWF0IjoxNzQxNTY1OTA5LCJleHAiOjE3NzMxMDE5MDl9.XJNJkZjncx1skOyxgPmU1qnnjqdZitBLz29tGqTyQ8A",
        website: "https://saimhashmi-nextjsportfolio.vercel.app",
        tshirtSize: "m",
      },
      {
        email: "zesan.rahim@example.com",
        firstName: "Zesan",
        lastName: "Rahim",
        preferredDisplayName: "Zesan Rahim",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Development",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Zesan_Rahim.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfWmVzYW5fUmFoaW0uanBnIiwiaWF0IjoxNzQxNTY1OTM2LCJleHAiOjE3NzMxMDE5MzZ9.gn7pWbLUEJTGrG_V8GvZATLhHimryKn-u-dmd1CuBvQ",
        linkedinVanity: "zesanrahim",
        tshirtSize: "m",
      },
      {
        email: "hasith.dealwis@example.com",
        firstName: "Hasith",
        lastName: "De Alwis",
        preferredDisplayName: "Hasith De Alwis",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Development",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Hasith_De_Alwis.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSGFzaXRoX0RlX0Fsd2lzLmpwZWciLCJpYXQiOjE3NDE1NjU3NDYsImV4cCI6MTc3MzEwMTc0Nn0.0FSVfK67Q9wnHJilkUKr6YZQVbzt4pbL5-u03sZbw-A",
        website: "https://hasithdev.com",
        tshirtSize: "m",
      },
      {
        email: "mumtahin.farabi@example.com",
        firstName: "Mumtahin",
        lastName: "Farabi",
        preferredDisplayName: "Mumtahin Farabi",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Development",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Hasith_De_Alwis.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSGFzaXRoX0RlX0Fsd2lzLmpwZWciLCJpYXQiOjE3NDE1NjU3NDYsImV4cCI6MTc3MzEwMTc0Nn0.0FSVfK67Q9wnHJilkUKr6YZQVbzt4pbL5-u03sZbw-A",
        website: "https://hasithdev.com",
        tshirtSize: "m",
      },
      {
        email: "julie.wechsler@example.com",
        firstName: "Julie",
        lastName: "Wechsler",
        preferredDisplayName: "Julie Wechsler",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Julie_Wechsler.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSnVsaWVfV2VjaHNsZXIuanBnIiwiaWF0IjoxNzQxNTY1ODA1LCJleHAiOjE3NzMxMDE4MDV9.uPdiCceBTBA0VBv4ZptX4y1xi3oh08EB_11YCPEsFS4",
        linkedinVanity: "julie-wechsler",
        tshirtSize: "s",
      },
      {
        email: "nathan.coulas@example.com",
        firstName: "Nathan",
        lastName: "Coulas",
        preferredDisplayName: "Nathan Coulas",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Nathan_Coulas.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfTmF0aGFuX0NvdWxhcy5qcGciLCJpYXQiOjE3NDE1NjU4NDksImV4cCI6MTc3MzEwMTg0OX0.LV5H0mXOr8nf3KROERk7Xl1z63TqeyZ_3b04RPFKhLI",
        website: "https://www.nathancoulas.com",
        tshirtSize: "m",
      },
      {
        email: "aires.zheng@example.com",
        firstName: "Aires",
        lastName: "Zheng",
        preferredDisplayName: "Aires Zheng",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Aires_Zheng.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQWlyZXNfWmhlbmcuanBnIiwiaWF0IjoxNzQxNTY1NjI2LCJleHAiOjE3NzMxMDE2MjZ9.1pFXMVTi-lkDNlO0b1iuFmONMKE2cgdrV7tMMrzdr8s",
        linkedinVanity: "aireszheng",
        tshirtSize: "m",
      },
      {
        email: "charelle.constantino@example.com",
        firstName: "Charelle",
        middleName: "Jazmin",
        lastName: "Constantino",
        preferredDisplayName: "Charelle Jazmin Constantino",
        pronouns: "she/her",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Charelle_Constantino.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfQ2hhcmVsbGVfQ29uc3RhbnRpbm8uanBnIiwiaWF0IjoxNzQxNTY1NjkzLCJleHAiOjE3NzMxMDE2OTN9.lfcOxeUoJoPP1auEqV5Hnd6DOAeXxrUP0Zyllk1iVJY",
        linkedinVanity: "charelleconstantino",
        tshirtSize: "s",
      },
      {
        email: "hamid.siddiqi@example.com",
        firstName: "Hamid",
        lastName: "Siddiqi",
        preferredDisplayName: "Hamid Siddiqi",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Hamid_Siddiqi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSGFtaWRfU2lkZGlxaS5wbmciLCJpYXQiOjE3NDE1NjU3MzYsImV4cCI6MTc3MzEwMTczNn0.ee_WwTQkPjYjkRBNeLy-tsXMZbBO9sHmFLR3RnkBdt0",
        website: "https://hamidsiddiqi.myportfolio.com/about-me",
        linkedinVanity: "hamidsiddiqi",
        tshirtSize: "m",
      },
      {
        email: "hairuo.chen@example.com",
        firstName: "Hairuo",
        lastName: "Chen",
        preferredDisplayName: "Hairuo Chen",
        pronouns: "they/them",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Hairuo_Chen.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSGFpcnVvX0NoZW4uanBnIiwiaWF0IjoxNzQxNTY1NzIyLCJleHAiOjE3NzMxMDE3MjJ9.RaAaRDv-EnYn06jGLZ7NlRx1MrhM8j2NzdU7JGj718E",
        website: "https://hairuochen.framer.website/",
        linkedinVanity: "hairuochen",
        tshirtSize: "m",
      },
      {
        email: "jowi.aoun@example.com",
        firstName: "Jowi",
        lastName: "Aoun",
        preferredDisplayName: "Jowi Aoun",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Jowi_Aoun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSm93aV9Bb3VuLmpwZWciLCJpYXQiOjE3NDE1NjU3OTUsImV4cCI6MTc3MzEwMTc5NX0.2tHxvw3V-HTH5600lEap7hSE2inLYgUySHvjfYnPnqg",
        linkedinVanity: "jowiaoun",
        tshirtSize: "m",
      },
      {
        email: "jeremy.friesen@example.com",
        firstName: "Jeremy",
        lastName: "Friesen",
        preferredDisplayName: "Jeremy Friesen",
        pronouns: "he/him",
        group: "Organizer",
        organizerTeam: "Emeritus",
        mediaUrl:
          "https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/organizers/cuhacking_6_organizer_avatar_Jeremy_Friesen.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9vcmdhbml6ZXJzL2N1aGFja2luZ182X29yZ2FuaXplcl9hdmF0YXJfSmVyZW15X0ZyaWVzZW4uanBlZyIsImlhdCI6MTc0MTU2NTc3NiwiZXhwIjoxNzczMTAxNzc2fQ.HMj6pnf0WZORpWws2b9bR62kxSmog7QmRRlwEKTTtnw",
        linkedinVanity: "jeremyfriesen1",
        tshirtSize: "m",
      },
    ].map(async (user) => {
      const media = await getOrUploadMedia(
        payload,
        req,
        user.mediaUrl,
        `${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}-avatar.png`,
        `${user.firstName} ${user.lastName}'s avatar`,
      );

      // const hackathonResult = await payload.find({
      //   collection: "hackathons",
      //   where: { year: { equals: 2025 } },
      //   pagination: false,
      // });

      // const hackathon = hackathonResult.docs[0] || null;

      const groupResult = await payload.find({
        collection: "groups",
        where: { name: { equals: user.group } },
        pagination: false,
      });

      const group = groupResult.docs[0] || null;

      const organizerTeamResult = await payload.find({
        collection: "organizerTeams",
        where: { name: { equals: user.organizerTeam } },
        pagination: false,
      });

      const organizerTeam = organizerTeamResult.docs[0] || null;

      await payload.create({
        collection: "users",
        data: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          preferredDisplayName: user.preferredDisplayName,
          pronouns: user.pronouns,
          // events: hackathon ? hackathon.id : [],
          group: group ? group.id : undefined,
          organizerTeam: organizerTeam ? organizerTeam.id : undefined,
          avatar: media?.id || null,
          linkedinVanity: user.linkedinVanity || undefined,
          githubHtmlUrl: user.githubHtmlUrl || undefined,
          website: user.website || undefined,
          dietaryRestrictions: user.dietaryRestrictions || undefined,
          allergies: user.allergies || undefined,
          tshirtSize: user.tshirtSize,
        },
      });

      payload.logger.info(
        `✅ Inserted user: ${user.firstName} ${user.lastName}`,
      );
    }),
  );
}
