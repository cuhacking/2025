import Image from 'next/image'

import './index.scss'

const baseClass = 'before-login'

export const BeforeLogin = () => {
  return (
    <aside className={baseClass}>
      <div className={`${baseClass}__image-wrap`}>
        <Image src="/banner.svg" alt="cuHacking Axiom Login Banner"
        layout="fill"
        objectFit="cover"
           />
      </div>
    </aside>
  )
}
