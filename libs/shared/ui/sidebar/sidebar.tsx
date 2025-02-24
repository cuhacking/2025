import cross from '@cuhacking/shared/assets/icons/general/cross-1.svg'
import hamburger from '@cuhacking/shared/assets/icons/general/hamburger-1.svg'
import lockopen from '@cuhacking/shared/assets/icons/general/lock-open.svg'
import lock from '@cuhacking/shared/assets/icons/general/lock.svg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@cuhacking/shared/ui/tooltip'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { createContext, useContext, useState } from 'react'

interface LinkProps {
  label: string
  href: string
  icon: React.JSX.Element | React.ReactNode
}

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
  locked: boolean
  setLocked: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
)

// eslint-disable-next-line react-refresh/only-export-components
export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export function SidebarProvider({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) {
  const [openState, setOpenState] = useState(false)
  const [locked, setLocked] = useState(false)

  const open = openProp !== undefined ? openProp : openState
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

  return (
    // eslint-disable-next-line react/no-unstable-context-value
    <SidebarContext.Provider value={{ open, setOpen, animate, locked, setLocked }}>
      {React.isValidElement(children) ? children : null}
    </SidebarContext.Provider>
  )
}

export function Sidebar({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  )
}

export function SidebarBody(props: React.ComponentProps<typeof motion.div>) {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<'div'>)} />
    </>
  )
}

export function DesktopSidebar({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const { open, setOpen, animate, locked, setLocked } = useSidebar()
  return (
    <>
      <motion.div
        className={cn(
          'h-full px-4 py-4 hidden md:flex md:flex-col w-[300px] flex-shrink-0',
          'bg-[rgba(27,27,27,0.4)] backdrop-blur-md border-r border-[rgba(255,255,255,0.1)]',
          className,
        )}
        animate={{
          width: animate ? (open ? '300px' : '60px') : '300px',
        }}
        onMouseEnter={() => !locked && setOpen(true)}
        onMouseLeave={() => !locked && setOpen(false)}
        {...props}
      >
        <div className="flex flex-col h-full relative">
          <div className="absolute top-2 right-0 z-50">
            <button
              type="button"
              onClick={() => setLocked(prev => !prev)}
              className="ml-8 hover:bg-gray-800 rounded cursor-pointer transition-colors duration-200"
            >
              <img
                src={locked ? lock : lockopen}
                alt={locked ? 'Unlock Sidebar' : 'Lock Sidebar'}
                className="w-6 h-4 mb-2"
              />
            </button>
          </div>
          <div className="flex-1 z-10">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export function MobileSidebar({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const { open, setOpen } = useSidebar()
  return (
    <>
      <div
        className={cn(
          'absolute h-10 mt-6 flex flex-row md:hidden  items-center justify-between  w-full',
        )}
        {...props}
      >
        <div className="flex justify-end z-[101] w-full p-6">
          <button
            type="button"
            onClick={() => setOpen(prev => !prev)}
          >
            <img
              src={open ? cross : hamburger}
              className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
            />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className={cn(
                'fixed h-full w-full inset-0  dark:bg-neutral-900 p-6 z-[100] flex flex-col justify-between',
                className,
              )}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export function SidebarLink({
  link,
  className,
  disabled,
  ...props
}: {
  link: LinkProps
  className?: string
  disabled?: boolean
}) {
  const { open, animate } = useSidebar()

  return (
    <>
      {disabled
        ? (
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild className="w-full">
                  <div
                    className={cn(
                      'max-w-fit flex items-center gap-2 rounded-md text-neutral-400 dark:text-neutral-500 cursor-not-allowed',
                      className,
                    )}
                    {...props}
                  >
                    {link.icon}
                    <div className="text-sm w-full whitespace-pre !p-0 !m-0">
                      <p>
                        {link.label}
                      </p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  Coming soon
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        : (
            <div>
              <Link
                to={link.href}
                className={cn(
                  'py-2 flex gap-2 items-center rounded-md transition-all duration-300 text-neutral-200 hover:bg-neutral-700 group',
                  className,
                )}
                {...props}
              >
                {link.icon}
                <motion.span
                  animate={{
                    display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
                    opacity: animate ? (open ? 1 : 0) : 1,
                  }}
                  className="text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
                >
                  {link.label}
                </motion.span>
              </Link>
            </div>
          )}
    </>
  )
}
