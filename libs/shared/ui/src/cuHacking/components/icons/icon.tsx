import { cn } from '@cuhacking/utils'

interface Media {
  src: string
  alt: string
}
interface IconProps {
  media: Media
  className?: string
  prefix?: string
}

function Icon({ media, className }: IconProps) {

  return (
    <>
      { media
        ? (
            <img
              src={media.src}
              loading="lazy"
              alt={media.alt}
              className={cn('p-1', className )}
            />
          )
        : null}
    </>

  )
}

export default Icon
