import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "@/db/collections/models";

export const adminConfig = {
    autoLogin:
process.env.NODE_ENV==="development"  && {
          email: process.env.LOCAL_DEV_EMAIL_ADDRESS,
          password: process.env.LOCAL_DEV_PASSWORD,
          prefillOnly: true,
        },
    components: { // resolves to apps/axiom/src/components, no idea why. Tried to fix it.
      // https://payload-visual-guide.vercel.app/
    meta: {
      description: "Admin Dashboard & Content Management System for cuHacking's 2025 Platform",
      icons: [
        {
          type: "image/ico",
          rel: "icon",
          url: "/assets/favicon.ico",
        },
      ],
      titleSuffix: "- cuHacking 2025",
    },
    routes: {
      // createFirstUser: '/create-account',
    },
      // beforeDashboard: ["/components/before-dashboard#BeforeDashboard"],
      // afterDashboard: ["/components/after-dashboard#AfterDashboard"],
      beforeLogin: ['/components/BeforeLogin#BeforeLogin'],
      afterLogin: ["/components/AfterLogin#AfterLogin"],
      graphics: {
        Icon: "/components/icon#Icon",
        Logo: "/components/logo#Logo",
      },
      Nav: '/components/Nav#Nav',
      // https://dev.to/aaronksaunders/payload-cms-add-a-custom-create-account-screen-in-admin-ui-2pdg
      // https://www.youtube.com/watch?v=X-6af837WbY
      views: {
      //   'login': {
      //     Component: '/components/oauth#OAuth',
      //     path: '/login',
      //   },
      //   'create-account': {
      //     Component: '/components/oauth#OAuth',
      //     path: '/create-account',
      //   },
        dashboard: {
          Component: '/components/Dashboard#Dashboard',
        },
      },
    avatar: {
      Component: '/components/Avatar#Avatar',
    },
  },
    importMap: {
      // baseDir: path.resolve("../../../../src"),
      baseDir: "../../../../src", // resolves from location of payload.config.ts
    },
    user: Users.slug,
}

export const clientConfig = {
  editor: lexicalEditor({}),
  theme: 'dark', // CREDITS: github.com/akhrarovsaid/payload-theme-quantum-leap
}
