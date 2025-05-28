import type { CollectionConfig } from 'payload'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const OpeningHours: CollectionConfig = {
  slug: 'opening-hours',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: ({ req }) => Boolean(req.user),
    update: superAdminOrTenantAdminAccess,
  },
  admin: {
    useAsTitle: 'dayOfWeek',
    group: 'Restaurant',
    hidden: true,
  },
  indexes: [
    {
      fields: ['tenant', 'dayOfWeek'],
      unique: true,
    },
  ],
  fields: [
    {
      name: 'dayOfWeek',
      type: 'select',
      required: true,
      options: [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
        { label: 'Sunday', value: 'sunday' },
      ],
    },
    {
      name: 'openTime',
      type: 'date',
      required: true,
      defaultValue: new Date('1970-01-01T08:00:00.000Z').toISOString(),
      admin: {
        description: 'Select opening time',
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm a',
        },
      },
    },
    {
      name: 'closeTime',
      type: 'date',
      required: true,
      defaultValue: new Date('1970-01-01T18:00:00.000Z').toISOString(),

      admin: {
        description: 'Select closing time',
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm a',
        },
      },
    },
    {
      name: 'isClosed',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      admin: {
        description: 'Check this box to mark this day as temporarily closed',
      },
    },
  ],
}
