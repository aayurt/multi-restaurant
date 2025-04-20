import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header, Tenant } from '@/payload-types'

export async function Header({ tenant }: { tenant: Tenant | null }) {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} tenant={tenant} />
}
