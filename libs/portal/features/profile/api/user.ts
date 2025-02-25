import type { User, UserDetails } from '@cuhacking/portal/types/user'
import { UserProfileStatus } from '@cuhacking/portal/types/user'

export function getCurrentUser(): User {
  return {
    profileStatus: UserProfileStatus.complete,
    details: {
      firstName: 'Hasith',
      lastName: 'De Alwis',
      middleName: ' ',
      preferredDisplayName: 'Hasith',
      email: 'hasithde24@gmail.com',
    },
  }
}
export async function postUser(_user: Partial<UserDetails>): Promise<Response> {
  // some API call here
  // check the status
  // throw error if invalid status
  return new Response('Created User', { status: 200 })
}
export async function patchUser(_user: Partial<UserDetails>): Promise<Response> {
  return new Response('Updated User', { status: 200 })
}
