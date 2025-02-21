export interface LegalItem {
  value: string
  title: string
  content: string
  buttonContent: string
}

export interface LoaderData {
  legalData: LegalItem[]
}
export interface LegalPageProps {
  legalData: LegalItem[]
}
