import Image from 'next/image'

import './index.scss'

const baseClass = 'dashboard-banner'

export const DashboardBanner = () => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__wrap`}>
        <div className={`${baseClass}__image-wrap`}>
          <Image src={'/banner-dashboard.svg'} alt=""
        layout="fill"
        objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </div>
  )
}
