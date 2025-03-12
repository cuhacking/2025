import type { User } from '@/db/payload-types'
import type { AccessArgs, FieldHook } from 'payload'

type IsAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: IsAuthenticated = ({ req }) => Boolean(req.user)

export const isSuperAdmin: IsAuthenticated = ({ req: { user } }) =>
  user?.id === 1 || user?.organizerTeam?.name === "Co-Leads";

export const admins: IsAuthenticated = isSuperAdmin;

export const adminsAndUser: IsAuthenticated = ({ req: { user } }) => {
  if (!user) return false;
  if (isSuperAdmin({ req: { user } })) return true;
  return { id: user.id };
};

export const isSameUser: IsAuthenticated = ({ req: { user } }) => {
  if (!user) return false;
  return {
    id: { equals: user.id }
  };
};

export const anyone: IsAuthenticated = () => true;

export const isOrganizer: IsAuthenticated = ({ req: { user } }) =>
  user?.group?.name === "Organizer";

export const isOrganizerInTeam = (teamNames: string[]) => {
  return ({ req: { user } }: AccessArgs<User>) =>
    isOrganizer({ req: { user } }) && teamNames.includes(user?.organizerTeam?.name);
};

export const protectRoles: FieldHook<{ id: string } & User> = ({ data, req }) => {
  if (!isSuperAdmin({ req })) return ['user'];
  const userRoles = new Set(data?.roles || []);
  userRoles.add('user');
  return [...userRoles];
};
