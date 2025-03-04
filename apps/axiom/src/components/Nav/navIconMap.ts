import { CollectionSlug, GlobalSlug } from 'payload'
import {
  Image,
  LucideProps,
  Mail,
  Star,
  User,
  Keyboard,
  Users,
PersonStanding,
MousePointer2,
  Inbox,
  Trophy,
  CalendarDays,
  Cpu
} from 'lucide-react'
import { ExoticComponent } from 'react'

export const navIconMap: Partial<
  Record<CollectionSlug | GlobalSlug, ExoticComponent<LucideProps>>
> = {
  media: Image,
  brands: Star,
  users: User,
  emails: Mail,
  constants: Keyboard,
  teams: Users,
  roles: PersonStanding,
  challengePrize: Trophy,
  "base-event": CalendarDays,
  "general-event": CalendarDays,
  forms: MousePointer2,
  "form-submissions": Inbox,
  hardware: Cpu
}

export const getNavIcon = (slug: string) =>
  Object.hasOwn(navIconMap, slug) ? navIconMap[slug as CollectionSlug | GlobalSlug] : undefined
