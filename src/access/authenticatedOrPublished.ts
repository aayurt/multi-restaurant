import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import type { Access } from 'payload'

export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    tenant: {
      in: getUserTenantIDs(user, 'tenant-admin'),
    },
    _status: {
      equals: 'published',
    },
  }
}
