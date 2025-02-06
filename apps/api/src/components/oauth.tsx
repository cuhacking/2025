"use client";

import type { AdminViewProps } from "payload";
import { DefaultTemplate } from "@payloadcms/next/templates";
import { Gutter, Button, TextInput } from "@payloadcms/ui";
import { PasswordInput } from "node_modules/@payloadcms/ui/dist/fields/Password/input.js";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OAuthProviders = [
  { name: "Google", url: "/api/users/oauth/google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
  { name: "LinkedIn", url: "/api/users/oauth/linkedin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { name: "GitHub", url: "/api/users/oauth/github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Discord", url: "/api/users/oauth/discord", icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" },
];

const OAuthButtons: React.FC = () => (
  <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
    {OAuthProviders.map(({ name, url, icon }) => (
      <a key={name} href={url}>
        <button
          className="btn btn--icon-style-without-border btn--size-large btn--withoutPopup btn--style-primary"
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            overflow: "hidden",
            padding: "5px",
          }}
          aria-label={`Continue with ${name}`}
        >
          <img src={icon} alt={`${name} Logo`} width="30" height="30" />
        </button>
      </a>
    ))}
  </div>
);

const CreateAccountForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    console.log("Creating account...", { email, password });

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Account created:", data);
        router.push("/admin/collections/users");
      } else {
        const error = await response.json();
        alert(`Failed to create account: ${error.message}`);
      }
    } catch (error) {
      console.error("Error creating account:", error);
      alert("An error occurred while creating the account.");
    }
  };

  return (
    <form onSubmit={handleCreateAccount} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TextInput label="Email" path="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput label="Password" path="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Create Account</Button>
    </form>
  );
};

export const OAuth: React.FC<AdminViewProps> = ({ initPageResult, params, searchParams }) => {
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <CreateAccountForm />
        <OAuthButtons />
      </Gutter>
    </DefaultTemplate>
  );
};

export default OAuth;
