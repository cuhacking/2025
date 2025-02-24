'use client'

import type React from 'react'

import { useEffect, useState } from 'react'

export function ClientOnly({ children }: { children: () => React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return children()
}
