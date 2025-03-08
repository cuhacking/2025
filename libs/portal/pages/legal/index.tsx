import type { LegalPageProps } from '@cuhacking/portal/types/terms'
import { Legal } from '@cuhacking/portal/features/legal'
import { Layout } from '@cuhacking/portal/ui/layout'

export function LegalPage({ legalData }: LegalPageProps) {
  return (
    <Layout>
      <Legal legalData={legalData} />
    </Layout>
  )
}
