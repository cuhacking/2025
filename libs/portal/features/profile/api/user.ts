import type { User, UserDetails } from '@cuhacking/portal/types/user'
import { UserProfileStatus } from '@cuhacking/portal/types/user'

export function getCurrentUser(): User {
  return {
    profileStatus: UserProfileStatus.notComplete,
    details: {
      firstName: 'Hasith',
      lastName: 'De Alwis',
      middleName: ' ',
      preferredDisplayName: 'Hasith',
      email: 'hasithde24@gmail.com',
    },
  }
}
export function postUser(_user: UserDetails) {
  ;
}
export function patchUser(_user: UserDetails) {
  ;
}
