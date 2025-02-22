import { type groupNavItems } from '@payloadcms/ui/shared'
import { AdminViewProps, ServerProps } from 'payload'
import { FC, Fragment } from 'react'
import { DashboardBanner } from './DashboardBanner'
import { DashboardGroup } from './DashboardGroup'

type DashboardProps = {
  navGroups: ReturnType<typeof groupNavItems>
} & AdminViewProps &
  ServerProps

export const Dashboard: FC<DashboardProps> = (props) => {
  const {
    navGroups,
    i18n,
    payload,
    payload: {
      config: {
        routes: { admin: adminRoute },
      },
    },
  } = props

  return (
    <Fragment>
      <DashboardBanner />
      <div className="dashboard">
        <div className="dashboard__wrap">
          {navGroups.map(({ label, entities }, entityIndex) => (
            <DashboardGroup
              key={entityIndex}
              label={label}
              entities={entities}
              adminRoute={adminRoute}
              i18n={i18n}
              payload={payload}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}
