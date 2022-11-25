import React from 'react'
import { Edit } from '../../../icons/Edit'
import { Trash } from '../../../icons/Trash'

export const RowPlatformTable = () => {
  return (
    <tr>
      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">Netflix</p>
          </div>
        </div>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">agumonrapid@gmail.com</p>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">camaleon$234</p>
      </td>
      <td className="px-5  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">n/a</p>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">S/. 32.00</p>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-ui-gray-700 leading-tight">
          <span aria-hidden className="absolute inset-0 bg-ui-gray-300 opacity-50 rounded-full"></span>
          <span className="relative">2/4</span>
        </span>
      </td>
      <td className="px-5  border-b border-gray-200 bg-white text-sm">
        <div className='flex gap-1'>
          <Edit />
          <Trash />
        </div>
      </td>
    </tr>
  )
}
