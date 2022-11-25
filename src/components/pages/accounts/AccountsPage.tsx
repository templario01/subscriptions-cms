import React, { Fragment } from 'react'
import { Plus } from '../../icons/Plus'
import { Buttom } from '../../ui/buttoms/Buttom'
import { PageContent } from '../../ui/page-content/PageContent'
import { TableHeader } from '../../ui/table/header/TableHeader'
import { RowPlatformTable } from '../../ui/table/rows/RowPlatformTable'
import Modal from 'react-modal'
import { Close } from '../../icons/Close'

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .45)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const CreatePlatformAccountModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <Fragment>
      <div className="flex justify-between ">
        <div>
          <h1 className="text-ui-gray-500 text-lg font-bold">Crear nueva cuenta</h1>
        </div>
        <button className="mb-2" onClick={closeModal}>
          <Close></Close>
        </button>
      </div>
      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"></div>
      <div className="mb-5">
        <span className="text-ui-gray-700 text-lg">bla bla bla</span>
      </div>
      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button
          onClick={closeModal}
          type="button"
          className="inline-block mr-1 px-6 py-2.5 bg-ui-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-ui-gray-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1"
        >
          cancelar
        </button>
        <button
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('clic')
          }}
          type="button"
          className="inline-block px-6 py-2.5 bg-ui-primary-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-ui-primary-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal"
        >
          Crear cuenta
        </button>
      </div>
    </Fragment>
  )
}

export const AccountsPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    const subtitle = { style: { color: '' } }
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  const platformTitles = [
    'plataforma',
    'cuenta',
    'contraseña',
    'precio por perfil',
    'precio completo',
    'slots disponibles',
    'accion',
  ]

  return (
    <PageContent>
      <div className="h-full sm:px-8 pt-4">
        <div className="flex justify-between">
          <div>
            <div>
              <h1 className="text-start text-2xl font-semibold text-ui-gray-700">Cuentas</h1>
            </div>
            <div className="mt-1">
              <span className="text-ui-gray-500">Panel de administración de cuentas</span>
            </div>
          </div>
          <div className="w-auto">
            <Buttom description="Nueva Cuenta" handleClick={openModal}>
              <Plus />
            </Buttom>
          </div>
        </div>

        <div className="mt-3 mb-5">
          <div className="max-w-sm">
            <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-line border-ui-gray-100">
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
                className="peer h-full w-full outline-none text-sm text-ui-gray-500 pr-2"
                type="text"
                id="search"
                placeholder="Buscar plataforma, cuenta..."
              />
            </div>
          </div>
        </div>
        <div className="shadow-md bg-white rounded-sm w-full mt-4">
          <table className="min-w-full leading-normal">
            <TableHeader elements={platformTitles} />
            <tbody>
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
            </tbody>
          </table>
        </div>
        <div className="mt-2">
          <div className="flex flex-col items-center">
            <span className="text-sm text-ui-gray-500 dark:text-gray-400">
              <span className="font-semibold text-ui-gray-700 dark:text-white">Pagina 1</span> de{' '}
              <span className="font-semibold text-ui-gray-700 dark:text-white">10</span> de{' '}
              <span className="font-semibold text-ui-gray-700 dark:text-white">100</span> Cuentas
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-ui-gray-500 rounded-l hover:bg-ui-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-ui-gray-500  border-0 border-l border-gray-400  rounded-r hover:bg-ui-gray-400  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CreatePlatformAccountModal closeModal={closeModal}></CreatePlatformAccountModal>
      </Modal>
    </PageContent>
  )
}
