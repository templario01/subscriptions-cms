import React from 'react'
import { Edit } from '../../../icons/Edit'
import { Trash } from '../../../icons/Trash'

export interface RowPlatformTableProps {
  platform: string
  image: string
  accountEmail: string
  accountPassword: string
  unitPrice?: number
  completePrice: number
  slots: number
}

export const RowPlatformTable: React.FC<RowPlatformTableProps> = ({
  image,
  accountEmail,
  completePrice,
  platform,
  slots,
  unitPrice,
  accountPassword
}) => {
  return (
    <tr>
      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={image}
              alt="logo"
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{platform}</p>
          </div>
        </div>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{accountEmail}</p>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{accountPassword}</p>
      </td>
      <td className="px-5  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{'S/. '+ unitPrice ?? 'n/a'}</p>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{'S/. '+ completePrice}</p>
      </td>
      <td className="px-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-ui-gray-700 leading-tight">
          <span aria-hidden className="absolute inset-0 bg-ui-gray-300 opacity-50 rounded-full"></span>
          <span className="relative">{'2/'+ slots}</span>
        </span>
      </td>
      <td className="px-5  border-b border-gray-200 bg-white text-sm">
        <div className="flex gap-1">
          <Edit />
          <Trash />
        </div>
      </td>
    </tr>
  )
}
