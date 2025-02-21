import type { LegalPageProps } from '@cuhacking/portal/types/legal'
import { Legal } from '@cuhacking/portal/features/legal'

export function LegalPage({ legalData }: LegalPageProps) {
  return <Legal legalData={legalData} />
}
