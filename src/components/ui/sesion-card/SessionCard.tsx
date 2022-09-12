import React from 'react'
import defaultImage from '../../../shared/assets/default-user-image.png'
import { IconExit } from './IconExit'

interface SessionCardProps {
  avatar?: string
  name?: string
  email?: string
}

export const SessionCard: React.FC<SessionCardProps> = ({ avatar, email = 'example@gmail.com', name = 'Unnamed' }) => {
  return (
    <div className="flex items-center gap-10 py-6">
      <div className="flex items-center gap-2.5">
        <img className="rounded-full w-10 h-10" src={avatar || defaultImage} alt="logo" />
        <div className="text-left">
          <h1 className="text-black">{name}</h1>
          <span className="text-ui-gray-500">{email}</span>
        </div>
      </div>
      <IconExit />
    </div>
  )
}
