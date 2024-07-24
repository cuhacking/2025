import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import AuthProvider from "./_components/NextAuth/AuthProvider";

export const metadata: Metadata = {
  title: "Apply for cuHacking 2025!",
  description:
    "Apply to participate in cuHacking 2025, Carleton University's official hackathon.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
