import type { CollectionConfig } from 'payload'
import { isAdmin } from '@/access/admin'
import { isSuperAdmin } from '@/access/isSuperAdmin'
import { superAdminOrTenantAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const Promotions: CollectionConfig = {
  slug: 'promotions',

  admin: {
    useAsTitle: 'title',
    group: 'Restaurant',
    defaultColumns: ['title', 'discountType', 'value', 'startDate', 'endDate'],
  },
  access: {
    create: superAdminOrTenantAdminAccess,
    read: () => true,
    update: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'discountType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Percentage',
          value: 'percentage',
        },
        {
          label: 'Fixed Amount',
          value: 'fixed',
        },
      ],
    },
    {
      name: 'value',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description:
          'For percentage, enter a value between 0 and 100. For fixed amount, enter the discount amount.',
      },
      validate: (val, { data }) => {
        if (data.discountType === 'percentage' && (val < 0 || val > 100)) {
          return 'Percentage must be between 0 and 100'
        }
        if (data.discountType === 'fixed' && val < 0) {
          return 'Fixed discount amount must be greater than 0'
        }
        return true
      },
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd HH:mm',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd HH:mm',
        },
      },
      validate: (val, { data }) => {
        if (data.startDate && new Date(val) <= new Date(data.startDate)) {
          return 'End date must be after start date'
        }
        return true
      },
    },
    {
      name: 'menuItem',
      type: 'relationship',
      relationTo: 'menu-items',
      hasMany: false,
      admin: {
        description:
          'Optional: Select a specific menu item for this promotion. If none selected, the promotion applies globally.',
      },
    },
  ],
}
