import type { RequiredDataFromCollectionSlug } from 'payload'

export const tenantsSeedData: RequiredDataFromCollectionSlug<'tenants'>[] = [
  {
    name: 'Chillim Kitchen',
    domain: 'chillim',
    slug: 'chillim',
    allowPublicRead: true,
    updatedAt: '2025-04-15 11:59:04.276+00',
    createdAt: '2025-04-15 11:48:36.292+00',
    logo: null,
    coverImage: null,
    description: 'Chillim Kitchen',
    contactInfo: {
      email: 'momo@gmail.com',
      phone: '+44 9841234567',
    },
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
    },
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
  },
  {
    name: 'Just Momo',
    domain: 'just-momo',
    slug: 'just-momo',
    allowPublicRead: true,
    updatedAt: '2025-04-15 11:59:04.276+00',
    createdAt: '2025-04-15 11:48:36.292+00',
    logo: null,
    coverImage: null,
    description: 'Just Momo',
    contactInfo: {
      email: 'momo@gmail.com',
      phone: '+44 9841234567',
    },
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
    },
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
  },
]
