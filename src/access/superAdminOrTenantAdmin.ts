import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { Access } from 'payload'
import { isSuperAdmin } from './isSuperAdmin'

/**
 * Tenant admins and super admins can will be allowed access
 */
export const superAdminOrTenantAdminAccess: Access = ({ req }) => {
  if (!req.user) {
    return false
  }

  if (isSuperAdmin(req.user)) {
    return true
  }

  return {
    tenant: {
      in: getUserTenantIDs(req.user, 'tenant-admin'),
    },
  }
}
