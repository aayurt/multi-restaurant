import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const Menu: CollectionConfig = {
  slug: 'menu',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
