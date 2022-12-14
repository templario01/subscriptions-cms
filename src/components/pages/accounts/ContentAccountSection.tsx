import { useQuery } from '@apollo/client'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {
  GetSubscriptionAccountParams,
  GetSubscriptionAccountResponse,
  GET_ALL_SUBSCRIPTION_ACCOUNTS,
  SubscriptionAccount,
} from '../../../graphql/queries/get-all-suscription-accounts'
import { customStyles, parseEnum, platformTitles } from '../../../shared/utils/utils'
import { Plus } from '../../icons/Plus'
import { Buttom } from '../../ui/buttoms/Buttom'
import { SearchInput } from '../../ui/input/SearchInput'
import Modal from 'react-modal'
import { TableHeader } from '../../ui/table/header/TableHeader'
import { RowPlatformTable } from '../../ui/table/rows/RowPlatformTable'
import { Close } from '../../icons/Close'
import { CreateAccountContext, CreateAccountContextType } from '../../../context/createAccountContext'
import { Waypoint } from 'react-waypoint'
import { IFetchMore, IFetchMoreResult } from '../../../graphql/types/apollo-types'
import ClipLoader from 'react-spinners/SyncLoader'
Modal.setAppElement('#root')

export interface ContentAccountSectionProps {
  isVisible?: boolean
  handleCreateAccount?: () => void
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

export const ContentAccountSection: React.FC<ContentAccountSectionProps> = ({
  isVisible = true,
  handleCreateAccount,
}) => {
  const take = 8
  const [accounts, setAccounts] = useState<SubscriptionAccount[]>([])
  const [searchName, setSearchName] = useState<string>('')
  const [isLoadingMore, setLoadingMore] = useState(false)
  const { data, fetchMore, loading } = useQuery<GetSubscriptionAccountResponse, GetSubscriptionAccountParams>(
    GET_ALL_SUBSCRIPTION_ACCOUNTS,
    {
      variables: {
        take,
      },
      fetchPolicy: 'cache-and-network',
    },
  )
  const { newAccount } = useContext(CreateAccountContext) as CreateAccountContextType

  useEffect(() => {
    const getAccounts = data?.getAllSubscriptionAccounts.nodes ?? []
    setAccounts([...getAccounts])
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
    }
    refetchData()
  }, [searchName, newAccount])

  const handleWaypoint = (
    accounts: GetSubscriptionAccountResponse,
    fetchMoreAccounts: IFetchMore,
    step: number,
  ): void => {
    const endCursor = accounts.getAllSubscriptionAccounts.endCursor
    if (endCursor && fetchMoreAccounts) {
      setLoadingMore(true)
      fetchMoreAccounts({
        variables: { take: step, after: endCursor },
        updateQuery: (prev: GetSubscriptionAccountResponse, { fetchMoreResult }: IFetchMoreResult) => {
          setLoadingMore(false)
          if (!fetchMoreResult) {
            return prev
          }
          fetchMoreResult.getAllSubscriptionAccounts.nodes = [
            ...prev.getAllSubscriptionAccounts.nodes,
            ...fetchMoreResult.getAllSubscriptionAccounts.nodes,
          ]
          return fetchMoreResult
        },
      })
    }
  }

  const handleSearch = async ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(value)
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <Fragment>
      <div className={isVisible ? '' : 'hidden'}>
        <div className="flex justify-between">
          <div>
            <div>
              <h1 className="text-start text-2xl font-semibold text-ui-gray-700">Cuentas</h1>
            </div>
            <div className="mt-1">
              <span className="text-ui-gray-500">Panel de administraci??n de cuentas</span>
            </div>
          </div>
          <div className="w-auto">
            <Buttom description="Nueva Cuenta" handleClick={handleCreateAccount}>
              <Plus />
            </Buttom>
          </div>
        </div>

        <div className="mt-3 mb-5 flex justify-between">
          <SearchInput onChange={handleSearch} value={searchName} />
          <div>
            <span className="text-ui-gray-500 dark:text-gray-400 text-base">
              Total de registros:{' '}
              <span className="font-semibold text-ui-gray-700 dark:text-white text-lg">
                &nbsp;
                {data?.getAllSubscriptionAccounts.totalCount}
              </span>
            </span>
          </div>
        </div>
        <div className="shadow-md bg-white rounded-sm w-full mt-4">
          <table className="min-w-full leading-normal">
            <TableHeader elements={platformTitles} />
            <tbody>
              {accounts?.map((account, index: number) => {
                return (
                  <Fragment key={account.uuid}>
                    <RowPlatformTable
                      accountEmail={account.email}
                      accountPassword={account.password}
                      completePrice={account.completePrice}
                      image={account.platform.logo}
                      platform={parseEnum(account.platform.name)}
                      slots={account.slots}
                      unitPrice={account.slotPrice}
                    />
                    {index + 1 === data?.getAllSubscriptionAccounts?.nodes.length && (
                      <Waypoint onEnter={() => handleWaypoint(data, fetchMore, take)} />
                    )}
                  </Fragment>
                )
              })}
            </tbody>
          </table>
        </div>

        {(loading || isLoadingMore) && (
          <div className=" w-full inline-block text-center my-2">
            <span className="text-ui-primary-700 font-semibold">Loading</span>
            <ClipLoader className="ml-2" color="#6941C6" size={6} />
          </div>
        )}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CreatePlatformAccountModal closeModal={closeModal}></CreatePlatformAccountModal>
        </Modal>
      </div>
    </Fragment>
  )
}
