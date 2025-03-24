import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

type isEditorType = (args: AccessArgs<User>) => boolean

export const authenticated: isEditorType = ({ req: { user } }) => {
  return Boolean(user)
}

export const isAdmin: isEditorType = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true
  }

  return false
}
