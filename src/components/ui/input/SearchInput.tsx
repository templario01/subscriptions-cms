import React, { Fragment } from 'react'

export interface SearchInputProps {
  value?: string
  onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => Promise<void>
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <Fragment>
      <div className="sm:w-76">
        <div className="flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-line border-ui-gray-100">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            value={value}
            onChange={onChange}
            className="peer h-full w-full outline-none text-sm text-ui-gray-500 pr-2"
            type="text"
            id="search"
            placeholder="Buscar plataforma, cuenta..."
          />
        </div>
      </div>
    </Fragment>
  )
}
