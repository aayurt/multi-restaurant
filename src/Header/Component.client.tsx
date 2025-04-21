'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Tenant } from '@/payload-types'

import { Media } from '@/components/Media'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  tenant: Tenant | null
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, tenant }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="relative inset-x-0 top-0  z-20 flex  items-center justify-between   px-4 after:-bottom-px sm:px-6 border border-b border-border bg-black dark:bg-card text-white"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="py-2 flex justify-between  w-full">
        <Link href="/">
          {tenant?.logo ? (
            <div className="flex">
              <Media
                fill
                priority
                className="relative size-16 z-50"
                imgClassName="relative size-16"
                resource={tenant.logo}
              />
              <h1 className="sr-only">{tenant?.name}</h1>
              <div className="absolute inset-0 bg-white dark:bg-black opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <h1>{tenant?.name}</h1>
          )}
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
