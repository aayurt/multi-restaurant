import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: ({ req }) => Boolean(req.user),
    update: superAdminOrTenantAdminAccess,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Events',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'mapLocation',
      type: 'text',
      required: false,
    },
    {
      name: 'longitude',
      type: 'number',
      required: true,
      admin: {
        step: 0.000001,
        description: 'Longitude coordinate of the event location',
      },
    },
    {
      name: 'latitude',
      type: 'number',
      required: true,
      admin: {
        step: 0.000001,
        description: 'Latitude coordinate of the event location',
      },
    },
    {
      name: 'datetime',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MMM d, yyyy h:mm a',
        },
      },
    },
    {
      name: 'enabled',
      type: 'checkbox',
      required: true,
      defaultValue: true,
      admin: {
        description: 'Enable or disable this event',
        position: 'sidebar',
      },
    },
  ],
}
