import { Icon } from '../../../../libs/shared/ui/src/cuHacking/components/icon/icon'
// import { Icon } from '@cuhacking/shared/ui/src/cuHacking/components/icon/icon'
import cuHackingLogo from '../../public/cuhacking-logo.svg'

export default function Index() {
  const media = {
    src: cuHackingLogo,
    alt: 'logo',
  }
  return (
    <div className="container flex justify-center mx-auto">
      <div className="max-w-lg">
        <Icon media={media} />
      </div>
    </div>
  )
}
