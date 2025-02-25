import type { LegalPageProps } from '@cuhacking/portal/types/legal'
import { Legal } from '@cuhacking/portal/features/legal'
import { Layout } from '@cuhacking/portal/ui/layout'

export function LegalPage({ legalData, user }: LegalPageProps) {
  return (
    <Layout user={user}>
      <Legal legalData={legalData} user={user} />
    </Layout>
  )
}
