import { EntityType, formatAdminURL } from '@payloadcms/ui/shared'
import { FC } from 'react'
import { getTranslation, I18nClient } from '@payloadcms/translations'
import { Card } from '@payloadcms/ui'
import Link from 'next/link'
import { BasePayload, CollectionSlug, StaticLabel } from 'payload'

import './index.scss'
import { navAccordions } from '@/db/collections/navAccordions'
import { FeatureCard } from '../DashboardFeatureCard'

type Props = {
  adminRoute: string
  label: string
  i18n: I18nClient
  entities: {
    label: StaticLabel
    slug: string
    type: EntityType
  }[]
  payload: BasePayload
}

export const DashboardGroup: FC<Props> = async ({
  label: groupLabel,
  adminRoute,
  i18n,
  entities,
  payload,
}) => {
  const getCounts = async () => {
    const docCounts: Record<string, number> = {}
    for (let i = 0; i < entities.length; i++) {
      const slug = entities[i].slug as CollectionSlug
      const { totalDocs } = await payload.count({ collection: slug })
      docCounts[slug] = totalDocs
    }
    return docCounts
  }

  const isFeaturedGroup = groupLabel === navAccordions.featured
  let counts: Record<string, number>

  if (isFeaturedGroup) {
    counts = await getCounts()
  }

  return (
    <div className="dashboard__group">
      <p className="dashboard__label">{groupLabel}</p>
      <ul className="dashboard__card-list">
        {entities.map(({ slug, type, label }, entityIndex) => (
          <li key={entityIndex}>
            {isFeaturedGroup ? (
              <FeatureCard
                title={getTranslation(label, i18n)}
                href={formatAdminURL({
                  adminRoute,
                  path:
                    type === EntityType.collection ? `/collections/${slug}` : `/globals/${slug}`,
                })}
                Link={Link}
                count={counts[slug] ?? 0}
              />
            ) : (
              <Card
                title={getTranslation(label, i18n)}
                href={formatAdminURL({
                  adminRoute,
                  path:
                    type === EntityType.collection ? `/collections/${slug}` : `/globals/${slug}`,
                })}
                Link={Link}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
