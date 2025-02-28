import Link from 'next/link'
import '../../theme/tailwind.scss'

export const AfterLogin = () => {
  return (
    <div className="mb-2 text-center">
       <a href="/api/users/oauth/google">
    <button
      className="btn btn--icon-style-without-border btn--size-large btn--withoutPopup btn--style-primary btn--withoutPopup"
      style={{ width: "100%" }}
    >
      Continue With Google
    </button>
       </a>
       <a href="/api/users/oauth/linkedin">
    <button
      className="btn btn--icon-style-without-border btn--size-large btn--withoutPopup btn--style-primary btn--withoutPopup"
      style={{ width: "100%" }}
    >
      Continue With LinkedIn
    </button>
       </a>
      Welcome to the admin panel of cuHacking's <span className="text-yellow-400">2025</span> <span className="text-orange-400">Platform</span>, built with <Link className="text-primary" href="https://docs.cuhacking.ca/tech-stack" target="_blank">Axiom</Link>, our very own in-house meta-framework.
      <p>
      This project is a work in progress :)
      </p>
    </div>
  )
}
