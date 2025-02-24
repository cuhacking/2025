import { CollectionSlug, GlobalSlug } from 'payload'
import {
  Image,
  LucideProps,
  Mail,
  Star,
  User,
} from 'lucide-react'
import { ExoticComponent } from 'react'

export const navIconMap: Partial<
  Record<CollectionSlug | GlobalSlug, ExoticComponent<LucideProps>>
> = {
  media: Image,
  brands: Star,
  users: User,
  emails: Mail,
}

export const getNavIcon = (slug: string) =>
  Object.hasOwn(navIconMap, slug) ? navIconMap[slug as CollectionSlug | GlobalSlug] : undefined
