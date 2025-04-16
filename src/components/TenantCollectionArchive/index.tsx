import { cn } from '@/utilities/ui'
import React from 'react'

import { CardTenantData, TenantCard } from '@/components/TenantCard'

export type Props = {
  tenants: CardTenantData[]
}

export const TenantCollectionArchive: React.FC<Props> = (props) => {
  const { tenants } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {tenants?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <TenantCard className="h-full" doc={result} relationTo="tenants" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
