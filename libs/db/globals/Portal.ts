/* eslint-disable node/prefer-global/process */
import type { GlobalConfig } from "payload";
import {
  anyone,
  isOrganizer,
  isSuperAdmin,
} from "@/db/access";

export const Portal: GlobalConfig = {
  slug: "portal",
  access: {
    read:  anyone,
    update: isOrganizer || isSuperAdmin,
  },
  versions: {
    drafts: true,
  },
  admin: {
    livePreview: {
      url: process.env.NODE_ENV === "development" ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL,
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 320,
          height: 568,
        },
      ],
    },
    hooks: {
      afterChange: [],
    },
  },
          fields: [
            {
              type: "collapsible",
              label: "Dashboard",
              fields: [
                {
                  name: "cards",
                  type: "array",
                  fields: [
                    {
                      name: "title",
                      type: "text",
                      label: "Title",
                    },
                  ],
                  defaultValue: [
                    { title: "Welcome" },
                    { title: "Hackathon Countdown" },
                    { title: "Money Raised" },
                    { title: "Registrations" },
                    { title: "Sponsors - Coming Soon!!" },
                    { title: "Schedule - Coming Soon!!" },
                    { title: "Challenges - Coming Soon!!" },
                    { title: "More Features!! Maybe you'll add them!" },
                    { title: "Star our GitHub" },
                  ],
                },
              ],
            },
            {
              name: "login",
              type: "text",
              label: "Login",
            },
            {
              name: "terms",
              type: "group",
              label: "Terms & Conditions",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  defaultValue: "Legalities",
                },
                {
                  name: "description",
                  type: "text",
                  label: "Description",
                  defaultValue: "YO! Before we get into it, read these please.",
                },
                {
                  name: "accordion",
                  type: "array",
                  fields: [
                    {
                      name: "title",
                      type: "text",
                      label: "Title",
                    },
                    {
                      name: "text",
                      type: "text",
                      label: "Text",
                    },
                    {
                      name: "checkbox",
                      type: "checkbox",
                    },
                    {
                      name: "checkboxLabel",
                      type: "text",
                    },
                  ],
                  defaultValue: [
                    {
                      title: "MLH Code of Conduct",
                      text:
                        "TL;DR. Be respectful. Harassment and abuse are never tolerated. If you are in a situation that makes you uncomfortable at " +
                        "an MLH Member Event, if the event itself creates an unsafe or inappropriate environment, or if interacting with an MLH " +
                        "representative or event organizer makes you uncomfortable, please report it using the procedures included in this document.\n\n" +
                        "Major League Hacking (MLH) stands for inclusivity. We believe that every single person has the right to hack in a safe and " +
                        "welcoming environment.",
                      checkbox: false,
                      checkboxLabel: "I have read MLH Code of Conduct *",
                    },
                    {
                      title: "MLH Terms & Conditions",
                      text: "",
                      checkbox: false,
                      checkboxLabel: "I have read MLH Terms & Conditions",
                    },
                    {
                      title: "MLH Privacy Policy",
                      text: "",
                      checkbox: false,
                      checkboxLabel: "I have read MLH Privacy Policy",
                    },
                    {
                      title: "cuHacking Terms & Conditions",
                      text: "",
                      checkbox: false,
                      checkboxLabel: "I have read cuHacking Terms & Conditions",
                    },
                  ],
                },
              ],
            },
            {
              name: "profile",
              type: "text",
              label: "Profile",
            },
            {
              name: "registration",
              type: "text",
              label: "Registration",
            },
          ],
};
