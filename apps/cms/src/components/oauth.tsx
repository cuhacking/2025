import type { AdminViewProps } from 'payload'

import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'
import CreateAccountForm from "./CreateAccountForm"

export const OAuth: React.FC<AdminViewProps> = ({
  initPageResult,
  params,
  searchParams,
}) => {
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
      <CreateAccountForm/>
<div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {/* Google OAuth Button */}
      <a href="/api/users/oauth/google">
        <button
          className="btn btn--icon-style-without-border btn--size-large btn--withoutPopup btn--style-primary"
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%", // Makes the button circular
            overflow: "hidden",
            padding: "5px",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
            alt="Google Logo"
            width="30"
            height="30"
          />
        </button>
      </a>

      {/* LinkedIn OAuth Button */}
      <a href="/api/users/oauth/linkedin">
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
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn Logo"
            width="30"
            height="30"
          />
        </button>
      </a>

      {/* GitHub OAuth Button */}
      <a href="/api/users/oauth/github">
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
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub Logo"
            width="30"
            height="30"
          />
        </button>
      </a>

      {/* Discord OAuth Button */}
      <a href="/api/users/oauth/discord">
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
        >
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
            alt="Discord Logo"
            width="30"
            height="30"
          />
        </button>
      </a>
    </div>
      </Gutter>
    </DefaultTemplate>
  )
}

export default OAuth;
