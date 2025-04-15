import { Payload } from 'payload'

export const seedTenants = async (payload: Payload) => {
  // Create default tenant
  const defaultTenant = await payload.create({
    collection: 'tenants',
    data: {
      name: 'Default Tenant',
      domain: 'default',
      slug: 'default-slug',
    },
  })

  // Create demo tenant
  const demoTenant = await payload.create({
    collection: 'tenants',
    data: {
      name: 'Demo Restaurant',
      domain: 'demo',
      slug: 'demo-slug',
    },
  })

  return { defaultTenant, demoTenant }
}
