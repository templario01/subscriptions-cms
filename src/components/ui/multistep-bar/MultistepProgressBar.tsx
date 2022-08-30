import React from 'react'
import { LargeMultistep } from './variants/LargeMultistep'
import { SmallMultistep } from './variants/SmallMultistep'

interface MultistepBarProps {
  size: 'small' | 'large'
  phase: '20%' | '40%' | '60%' | '80%' | '100%'
}

export const MultistepBar: React.FC<MultistepBarProps> = ({ size, phase }) => {
  return (
    <div className="flex flex-row w-full items-center">
      {size === 'small' ? (
        <SmallMultistep phase={phase}></SmallMultistep>
      ) : (
        <LargeMultistep phase={phase}></LargeMultistep>
      )}
    </div>
  )
}
