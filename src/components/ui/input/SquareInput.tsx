import React, { Fragment } from 'react'

export const SquareInput = () => {
  return (
    <Fragment>
      <input
        className="shadow-sm border aspect-square text-center form-control rounded text-3xl text-ui-gray-500 placeholder:text-ui-gray-300"
        type="text"
        id="first"
        maxLength={1}
        placeholder="0"
      />
    </Fragment>
  )
}
