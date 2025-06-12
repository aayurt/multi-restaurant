import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: () => true,
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
      type: 'text',
      required: false,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      // required: true,
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
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'location',
          type: 'text',
          required: false,
          admin: {
            description: 'Location of the event location',
          },
        },
        {
          name: 'Map location',
          type: 'text',
          required: false,
          admin: {
            description: 'Map address of the event location for google maps',
          },
        },
        {
          name: 'latitude',
          type: 'number',
          required: false,
          admin: {
            description: 'Latitude coordinate of the event location',
            step: 0.000001,
          },
        },
        {
          name: 'longitude',
          type: 'number',
          required: false,
          admin: {
            description: 'Longitude coordinate of the event location',
            step: 0.000001,
          },
        },
      ],
      admin: {
        description: 'Event location coordinates',
      },
    },
    {
      name: 'startDatetime',
      type: 'date',
      required: false,
      defaultValue: new Date().toISOString(),
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MMM d, yyyy h:mm a',
        },
      },
    },
    {
      name: 'endDatetime',
      type: 'date',
      required: false,
      defaultValue: new Date().toISOString(),
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
