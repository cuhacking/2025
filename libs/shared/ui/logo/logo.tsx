import cuHackingLogo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'

interface LogoProps {
  link: string
  hasAnimation?: boolean
  hasWordmark?: boolean
  className?: string
}

export function Logo({ link, hasAnimation = false, hasWordmark = false, className }: LogoProps) {
  return (
    <Link
      to={link}
      className={cn('flex items-center text-sm py-1 gap-x-3 relative', className)}
    >
      <img src={cuHackingLogo} alt="CuHacking Logo" className="max-h-6 max-w-6 rounded-sm hover:scale-110 duration-300" />

      {hasWordmark && hasAnimation
        ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-medium text-black dark:text-white whitespace-pre"
            >
              <p className="text-foreground">
                cuHacking
              </p>
            </motion.span>
          )
        : hasWordmark && (
          <p className="text-foreground">
            cuHacking
          </p>
        )}
    </Link>
  )
}
