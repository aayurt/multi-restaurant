import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const MenuItem: CollectionConfig = {
  slug: 'menu-items',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: ({ req }) => Boolean(req.user),
    update: superAdminOrTenantAdminAccess,
  },
  admin: {
    useAsTitle: 'name',
    hidden: true,
    group: 'Restaurant',
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
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        step: 0.01,
        description: 'Price in your local currency',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'foodCategory',
      type: 'relationship',
      relationTo: 'food-categories',
      required: true,
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Vegan', value: 'vegan' },
        { label: 'Vegetarian', value: 'vegetarian' },
        { label: 'Spicy', value: 'spicy' },
        { label: 'Gluten-Free', value: 'gluten-free' },
        { label: 'Dairy-Free', value: 'dairy-free' },
        { label: 'Nuts', value: 'nuts' },
      ],
    },
  ],
}
