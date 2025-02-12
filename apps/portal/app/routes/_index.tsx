import dashboard_background from '@cuhacking/portal/assets/backgrounds/dashboard-bg-1.webp'
import { Home } from '@cuhacking/portal/pages/index/index'

export default function Signin() {
  return (
    <div className="w-full">
      <Home />
      <img
        src={dashboard_background}
        alt="Background"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    </div>
  )
}
