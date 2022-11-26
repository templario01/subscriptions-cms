import React, { Fragment } from 'react'

export interface PaginateSectionProps {
  currentPage?: number
  totalCount?: number
  handlePrev?: () => void
  handleNext?: () => void
}

export const PaginateSection: React.FC<PaginateSectionProps> = ({
  totalCount,
  handleNext,
  handlePrev,
  currentPage,
}) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <span className="text-sm text-ui-gray-500 dark:text-gray-400">
          <span className="font-semibold text-ui-gray-700 dark:text-white">Pagina {currentPage ?? 1}</span> de{' '}
          <span className="font-semibold text-ui-gray-700 dark:text-white">
            {totalCount && Math.ceil(totalCount / 10)}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;Registros:{' '}
          <span className="font-semibold text-ui-gray-700 dark:text-white">{totalCount}</span>
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={true}
            onClick={handlePrev}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-ui-gray-500 rounded-l hover:bg-ui-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-ui-gray-500  border-0 border-l border-gray-400  rounded-r hover:bg-ui-gray-400  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Siguiente
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Fragment>
  )
}
