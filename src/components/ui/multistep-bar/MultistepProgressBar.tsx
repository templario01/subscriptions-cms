import React from 'react'
import { LargeMultistep } from './variants/LargeMultistep'
import { SmallMultistep } from './variants/SmallMultistep'

export enum ProgressEnum {
  '20%' = '20%',
  '40%' = '40%',
  '60%' = '60%',
  '80%' = '80%',
  '100%' = '100%',
}
export interface MultistepBarProps {
  size: 'small' | 'large'
  phase: ProgressEnum
}

export const MultistepProgressBar: React.FC<MultistepBarProps> = ({ size, phase }) => {
  return (
    <div className="flex flex-row w-full items-center justify-evenly">
      {size === 'small' ? (
        <SmallMultistep phase={phase}></SmallMultistep>
      ) : (
        <LargeMultistep phase={phase}></LargeMultistep>
      )}
    </div>
  )
}
