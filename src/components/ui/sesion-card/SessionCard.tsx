import React from 'react'
import defaultImage from '../../../shared/assets/default-user-image.png'
import { IconExit } from './IconExit'
import Modal from 'react-modal'
import { Close } from '../../icons/Close'
import { useAuthDispatch } from '../../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

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

interface SessionCardProps {
  avatar?: string
  name?: string
  email?: string
}

Modal.setAppElement('#root')

export const SessionCard: React.FC<SessionCardProps> = ({ avatar, email = 'example@gmail.com', name = 'Unnamed' }) => {
  const authDispatch = useAuthDispatch()
  const navigate = useNavigate()
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

  return (
    <div className="flex items-center gap-10 py-6">
      <div className="flex items-center gap-2.5">
        <img className="rounded-full w-10 h-10 border-line border-ui-primary-200" src={avatar || defaultImage} alt="logo" />
        <div className="text-left">
          <h1 className="text-black">{name}</h1>
          <span className="text-ui-gray-500">{email}</span>
        </div>
      </div>
      <IconExit iconClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between ">
          <div>
            <h1 className="text-ui-gray-500 text-lg font-bold">Cerrar sesión</h1>
          </div>
          <button className="mb-2" onClick={closeModal}>
            <Close></Close>
          </button>
        </div>
        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"></div>
        <div className="mb-5">
          <span className="text-ui-gray-700 text-lg">¿Estas seguro que deseas salir de la aplicación?</span>
        </div>
        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
          <button
            onClick={() => {
              authDispatch({ type: 'logout' })
              navigate('/login')
            }}
            type="button"
            className="inline-block px-6 py-2.5 bg-ui-primary-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-ui-primary-500 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Salir
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="inline-block px-6 py-2.5 bg-ui-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-ui-gray-300 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1"
          >
            cancelar
          </button>
        </div>
      </Modal>
    </div>
  )
}
