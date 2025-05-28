import type { CollectionConfig } from 'payload'

import { isSuperAdminAccess } from '@/access/isSuperAdmin'
import { updateAndDeleteAccess } from './access/updateAndDelete'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  access: {
    create: isSuperAdminAccess,
    delete: updateAndDeleteAccess,
    read: () => true,
    update: updateAndDeleteAccess,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Tenants',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
      required: true,
      admin: {
        description:
          'If checked, the tenant will be shown on the website. If not checked, the tenant will not be shown on the website.',
        position: 'sidebar',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      hidden: true,
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
      name: 'description',
      type: 'text',
      // required: true,
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          // required: true,
        },
        {
          name: 'email',
          type: 'email',
          // required: true,
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          admin: {
            description: 'Facebook profile URL',
          },
        },
        {
          name: 'instagram',
          type: 'text',
          admin: {
            description: 'Instagram profile URL',
          },
        },
        {
          name: 'twitter',
          type: 'text',
          admin: {
            description: 'Twitter profile URL',
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: {
            description: 'LinkedIn profile URL',
          },
        },
      ],
    },
    {
      name: 'domain',
      type: 'text',
      admin: {
        description: 'Used for domain-based tenant handling',
      },
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
            description: 'Location of the restaurant location',
          },
        },
        {
          name: 'Map location',
          type: 'text',
          required: false,
          admin: {
            description: 'Map address of the restaurant location for google maps',
          },
        },
        {
          name: 'latitude',
          type: 'number',
          required: false,
          admin: {
            description: 'Latitude coordinate of the restaurant location',
            step: 0.000001,
          },
        },
        {
          name: 'longitude',
          type: 'number',
          required: false,
          admin: {
            description: 'Longitude coordinate of the restaurant location',
            step: 0.000001,
          },
        },
      ],
      admin: {
        description: 'Restaurant location coordinates',
      },
    },
    {
      name: 'MenuGallery',
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
      name: 'OpeningHour',
      type: 'group',
      fields: [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
        { label: 'Sunday', value: 'sunday' },
      ].flatMap((day) => [
        {
          name: `${day.value}OpenTime`,
          type: 'date',
          defaultValue: '2025-05-28T19:30:00.312Z',
          admin: {
            // description: `${day.label} Opening time`,
            date: {
              pickerAppearance: 'timeOnly',
              displayFormat: 'h:mm a',
            },
          },
        },
        {
          name: `${day.value}CloseTime`,
          type: 'date',
          defaultValue: new Date('1970-01-01T18:00:00.000Z').toISOString(),
          admin: {
            // description: `${day.label} Closing time`,
            date: {
              pickerAppearance: 'timeOnly',
              displayFormat: 'h:mm a',
            },
          },
        },
      ]),
      admin: {
        description: 'Restaurant opening hours',
      },
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        description: 'Used for url paths, example: /tenant-slug/page-slug',
        position: 'sidebar',
      },
      index: true,
      required: true,
    },
    {
      name: 'allowPublicRead',
      type: 'checkbox',
      admin: {
        description:
          'If checked, logging in is not required to read. Useful for building public pages.',
        position: 'sidebar',
      },
      defaultValue: false,
      index: true,
    },
  ],
}
