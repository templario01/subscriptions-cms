import React, { Fragment, useEffect, useState } from 'react'
import { Plus } from '../../icons/Plus'
import { Buttom } from '../../ui/buttoms/Buttom'
import { PageContent } from '../../ui/page-content/PageContent'
import { TableHeader } from '../../ui/table/header/TableHeader'
import { RowPlatformTable } from '../../ui/table/rows/RowPlatformTable'
import Modal from 'react-modal'
import { Close } from '../../icons/Close'
import { useQuery } from '@apollo/client'
import {
  GetSubscriptionAccountParams,
  GetSubscriptionAccountResponse,
  GET_ALL_SUBSCRIPTION_ACCOUNTS,
  SubscriptionAccount,
} from '../../../graphql/queries/get-all-suscription-accounts'
import { parseEnum, platformTitles } from '../../../shared/utils/utils'
import { SearchInput } from '../../ui/input/SearchInput'
import { PaginateSection } from '../../ui/paginate-section/PaginateSection'

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
  const { data, fetchMore } = useQuery<GetSubscriptionAccountResponse, GetSubscriptionAccountParams>(
    GET_ALL_SUBSCRIPTION_ACCOUNTS,
    {
      variables: {
        take: 100,
      },
      fetchPolicy: 'cache-and-network',
    },
  )
  const [accounts, setAccounts] = useState<SubscriptionAccount[]>([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [searchName, setSearchName] = useState<string>('')
  const [endCursor, setEndCursor] = useState<string[]>([])

  useEffect(() => {
    const getAccounts = data?.getAllSubscriptionAccounts.nodes ?? []
    setAccounts([...getAccounts])
    console.log(accounts)
  }, [data])

  useEffect(() => {
    setEndCursor([...endCursor, accounts[accounts.length - 1]?.uuid])
    console.log(endCursor)
  }, [data])

  useEffect(() => {
    const refetchData = async () => {
      const { data } = await fetchMore({
        variables: {
          name: searchName,
          take: 100,
        },
      })

      setAccounts([...data.getAllSubscriptionAccounts.nodes])
      setEndCursor([data?.getAllSubscriptionAccounts.endCursor ?? ''])
      console.log(endCursor)
    }
    refetchData()
  }, [searchName])

  const handleSearch = async ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(value)
  }

  const handleNext = async () => {
    console.log(endCursor[endCursor.length - 1])
    const { data } = await fetchMore({
      variables: {
        name: searchName,
        after: endCursor[endCursor.length - 1],
        take: 10,
      },
    })
    setAccounts([...data.getAllSubscriptionAccounts.nodes])
  }

  const handlePrev = async () => {
    console.log('prev')
  }

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
          <SearchInput onChange={handleSearch} value={searchName} />
        </div>
        <div className="shadow-md bg-white rounded-sm w-full mt-4">
          <table className="min-w-full leading-normal">
            <TableHeader elements={platformTitles} />
            <tbody>
              {accounts?.map((account) => {
                return (
                  <RowPlatformTable
                    accountEmail={account.email}
                    accountPassword={account.password}
                    completePrice={account.completePrice}
                    image={account.platform.logo}
                    platform={parseEnum(account.platform.name)}
                    slots={account.slots}
                    unitPrice={account.slotPrice}
                    key={account.uuid}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <PaginateSection
            handleNext={handleNext}
            handlePrev={handlePrev}
            totalCount={data?.getAllSubscriptionAccounts.totalCount}
          />
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
