import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const FoodCategory: CollectionConfig = {
  slug: 'food-categories',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: ({ req }) => Boolean(req.user),
    update: superAdminOrTenantAdminAccess,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Restaurant',
    hidden: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'menu',
      type: 'relationship',
      relationTo: 'menu',
      required: true,
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
