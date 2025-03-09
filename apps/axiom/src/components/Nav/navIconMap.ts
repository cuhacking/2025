import { CollectionSlug, GlobalSlug } from 'payload'
import {
  Image,
  LucideProps,
  Mail,
  Star,
  User,
  // Keyboard,
  // Users,
  Signature,
PersonStanding,
MousePointer2,
  Inbox,
  Trophy,
  Flag,
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
  // constants: Keyboard,
  "organizerTeams": Signature,
  groups: PersonStanding,
  challengePrize: Trophy,
  events: CalendarDays,
  forms: MousePointer2,
  "form-submissions": Inbox,
  hardware: Cpu,
  "2025": Flag,
  hackathons: Flag,
}

export const getNavIcon = (slug: string) =>
  Object.hasOwn(navIconMap, slug) ? navIconMap[slug as CollectionSlug | GlobalSlug] : undefined
