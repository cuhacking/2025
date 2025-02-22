import { ChevronIcon } from '@payloadcms/ui'
import { DefaultAccountIcon } from '@payloadcms/ui/graphics/Account/Default'
import { ServerProps } from 'payload'
import { FC } from 'react'

import './index.scss'

const baseClass = 'avatar'

export const Avatar: FC<ServerProps> = (props) => {
  const { user } = props

  const username = user?.email.split('@').shift()

  return (
    <div className="avatar">
      <DefaultAccountIcon active={false} />
      <span className={`${baseClass}__greeting`}>Hi,</span>
      <span className={`${baseClass}__username`}>{username}</span>
      <ChevronIcon direction="right" size="small" className={`${baseClass}__chevron`} />
    </div>
  )
}
