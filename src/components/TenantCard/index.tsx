'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Tenant } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardTenantData = Pick<Tenant, 'name' | 'description' | 'domain' | 'logo'>

export const TenantCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardTenantData
  relationTo?: 'tenants'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { name, description, domain: subdomain, logo } = doc || {}

  const titleToUse = titleFromProps || name
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `${window.location.protocol}//${subdomain}.${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`

  return (
    <article
      className={cn(
        'border border-border rounded-xl overflow-hidden bg-card hover:cursor-pointer ',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full ">
        {!logo && <div className="">No image</div>}
        {logo && typeof logo !== 'string' && <Media resource={logo} size="33vw" />}
      </div>
      <div className="p-4">
        {/* {showCategories && hasCategories && (
          <div className="uppercase text-sm mb-4">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )} */}
        {titleToUse && (
          <div className="prose">
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}
