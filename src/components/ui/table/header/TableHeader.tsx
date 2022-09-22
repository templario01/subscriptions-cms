import React from 'react'

interface TableHeaderProps {
  elements: string[]
}

export const TableHeader: React.FC<TableHeaderProps> = ({ elements }) => {
  return (
    <thead>
      <tr>
        {elements.map((name) => (
          <th
            key={name}
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}
