import type { User } from './user'

export interface LegalItem {
  value: string
  title: string
  content: string
  href: string
  buttonContent: string
  buttonContent2?: string
}

export interface LoaderData {
  legalData: LegalItem[]
}
export interface LegalPageProps {
  legalData: LegalItem[]
  user: User
}
