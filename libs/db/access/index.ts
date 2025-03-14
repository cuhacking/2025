import type { User } from '@/db/payload-types'
import type { AccessArgs, FieldHook } from 'payload'

type IsAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: IsAuthenticated = ({ req }) => {
  return Boolean(req.user)
}

export const anyone: IsAuthenticated = ({ req: { user } }) => {
  if (!user) return false;
  return { id: user.id };
};

export const isSuperAdmin: IsAuthenticated = ({ req: { user } }) =>
  user?.id === 1 || user?.organizerTeam?.name === "Co-Leads";

export const admins: IsAuthenticated = isSuperAdmin;

export const adminsAndUser: IsAuthenticated = ({ req: { user } }) => {
  if (!user) return false;
  if (isSuperAdmin({ req: { user } })) return true;
  return { id: user.id };
};

export const isSelf = ({ req: {user} }) => {
  if (!user) return false;
  if (user){
  return {
    id: {
      equals: user.id
    }
  }
};
}

export const isOrganizerOrSelf = ({ req: {user} }) => {
  if (user){
   if (user.organizerTeam?.name){
     return true
   }
  return {
    id: {
      equals: user.id
    }
  }
};
  return false
}

export const isSponsor = ({ req: {user} }) => {
  if (user){
   if (user.group.name === "Sponsor"){
     return true
   }
  }
  return false
};


export const isOrganizer = ({ req: {user} }) => {
  if (user){
   if (user.organizerTeam?.name){
     return true
   }
    return false
};
    return false
}

export const isOrganizerOrSponsor = ({ req: {user} }) => {
  if (user){
   if (user.organizerTeam?.name){
     return true
   }
   if (user?.group?.name === "Sponsor"){
     return true
   }
};
  return false
}

export const isMentor = ({ req: {user} }) => {
  if (user){
   if (user?.group.name === "Mentor"){
     return true
   }
  }
  return false
};


export const isJudge = ({ req: {user} }) => {
  if (user){
   if (user.group.name === "Mentor"){
     return true
   }
  }
  return false
};

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
