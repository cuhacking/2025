import Link from 'next/link'
import '../../theme/tailwind.scss'

export const AfterLogin = () => {
  return (
    <div className="mb-2 text-center">
      Welcome to the admin panel of cuHacking's <span className="text-yellow-400">2025</span> <span className="text-orange-400">Platform</span>, built with <Link className="text-primary" href="https://docs.cuhacking.ca/tech-stack" target="_blank">Axiom</Link>, our very own in-house meta-framework.
      <p>
      This project is a work in progress :)
      </p>
    </div>
  )
}
