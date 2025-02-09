import Link from 'next/link'

export const BeforeLogin = () => {
  return (
    <div className="mb-2 text-center">
      Welcome to the admin panel of cuHacking's <span className="text-yellow-400">2025</span> <span className="text-orange-400">Platform</span>, built with <Link className="text-primary" href="https://docs.cuhacking.ca/tech-stack" target="_blank">Axiom</Link>, our very own in-house meta-framework.
    </div>
  )
}
