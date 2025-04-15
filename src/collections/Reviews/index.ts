import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    create: ({ req }) => Boolean(req.user),
    delete: superAdminOrTenantAdminAccess,
    read: ({ req }) => Boolean(req.user),
    update: ({ req: { user }, id }) => {
      if (!user) return false
      if (user.role?.includes('super-admin')) return true
      return {
        user: {
          equals: user.id,
        },
      }
    },
  },
  admin: {
    useAsTitle: 'comment',
    group: 'Restaurant',
    defaultColumns: ['rating', 'comment', 'user', 'menuItem'],
  },
  fields: [
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: 'Rating from 1 to 5 stars',
      },
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
