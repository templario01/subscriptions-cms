import React, { Fragment } from 'react'
import { MultistepBar } from '../molecules/MultistepBar'
import { MultistepIcon } from '../molecules/MultistepIcon'

interface LargeMultistepProps {
  phase: '20%' | '40%' | '60%' | '80%' | '100%'
}

export const LargeMultistep: React.FC<LargeMultistepProps> = ({ phase }) => {
  const fourBlocks = () => {
    switch (phase) {
      case '20%':
        return (
          <Fragment>
            <MultistepIcon status={'active'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
          </Fragment>
        )
      case '40%':
        return (
          <Fragment>
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'active'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
          </Fragment>
        )
      case '60%':
        return (
          <Fragment>
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'active'} />
            <MultistepBar status="disabled" />
            <MultistepIcon status={'disabled'} />
          </Fragment>
        )
      case '80%':
        return (
          <Fragment>
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
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
            <MultistepBar status="active" />
            <MultistepIcon status={'done'} />
            <MultistepBar status="active" />
            <MultistepIcon status={'done'} />
          </Fragment>
        )
    }
  }
  return fourBlocks()
}
