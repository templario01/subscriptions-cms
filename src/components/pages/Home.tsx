import React, { Fragment } from 'react'
import { PagesRoutes } from '../../routes/PagesRoutes'

export const Home = () => {
  return (
    <Fragment>
      <div className="App bg-ui-gray-25">
        <div className="flex h-full">
          <PagesRoutes />
        </div>
      </div>
    </Fragment>
  )
}
