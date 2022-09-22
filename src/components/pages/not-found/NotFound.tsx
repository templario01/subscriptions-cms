import React from 'react'

export const NotFound = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold mb-1 text-ui-gray-700">404</h1>
        <h1 className="text-2xl mb-2 font-semibold text-ui-gray-700">Not Found</h1>
        <p className="text-ui-gray-500">The resource requested could not be found on this server! </p>
      </div>
    </div>
  )
}
