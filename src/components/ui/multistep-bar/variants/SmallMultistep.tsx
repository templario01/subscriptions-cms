import React, { Fragment } from 'react'
import { MultistepBar } from '../molecules/MultistepBar'
import { MultistepIcon } from '../molecules/MultistepIcon'

interface SmallMultistepProps {
  phase: '20%' | '40%' | '60%' | '80%' | '100%'
}

export const SmallMultistep: React.FC<SmallMultistepProps> = ({ phase }) => {
  const twoBlocks = () => {
    switch (phase) {
      case '20%':
        return (
          <Fragment>
            <MultistepIcon status={'active'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
          </Fragment>
        )
      case '60%':
        return (
          <Fragment>
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'active'} />
          </Fragment>
        )
      case '100%':
        return (
          <Fragment>
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'done'} />
          </Fragment>
        )
    }
  }

  return <Fragment>{twoBlocks()}</Fragment>
}
