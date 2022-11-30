import { useMutation, useQuery } from '@apollo/client'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {
  CreateSubscriptionAccountInput,
  CreateSubscriptionAccountResponse,
  CREATE_SUBSCRIPTION_ACCOUNT,
  SuscriptionAccount,
} from '../../../graphql/mutations/create-subscription-account'
import {
  GetAllPlatformsParams,
  GetAllPlatformsResponse,
  GET_ALL_PLATFORMS,
  Platform,
} from '../../../graphql/queries/get-all-platforms'
import { parseEnum } from '../../../shared/utils/utils'
import { LeftArrow } from '../../icons/LeftArrow'
import { Buttom } from '../../ui/buttoms/Buttom'
import { InputTextSection } from '../../ui/form/molecules/InputTextSection'
import { Dropdown } from '../../ui/input/Dropdown'
import { DropdownItem } from '../../ui/input/DropdownItem'
import { CheckboxItem, InputCheckbox } from '../../ui/input/InputCheckbox'
import { InputGroup } from '../../ui/input/InputGroup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AutoincrementInput } from '../../ui/input/Autoincrement'
import { GraphQLError } from '../../../shared/utils/errors'
import { CreateAccountContext, CreateAccountContextType } from '../../../context/createAccountContext'

export interface CreateAccountSectionProps {
  isVisible?: boolean
  handleBack?: () => void
}

export const CreateAccountSection: React.FC<CreateAccountSectionProps> = ({ isVisible = false, handleBack }) => {
  const [showDropdownItems, setShowDropDownItems] = useState(false)
  const [dropdownItems, setDropdownItems] = useState<Platform[]>([])
  const [itemLogo, setItemLogo] = useState<string>('')
  const [searchName, setSearchName] = useState<string>('')
  const [checkPersonal, setCheckPersonal] = useState<boolean>(true)
  const [checkShared, setCheckShared] = useState<boolean>(true)
  const [profileCount, setProfileCount] = useState<number>(0)
  const { data, fetchMore } = useQuery<GetAllPlatformsResponse, GetAllPlatformsParams>(GET_ALL_PLATFORMS, {
    variables: {
      name: '',
    },
    fetchPolicy: 'cache-and-network',
  })
  const [createSubscriptionAccount] = useMutation<CreateSubscriptionAccountResponse, CreateSubscriptionAccountInput>(
    CREATE_SUBSCRIPTION_ACCOUNT,
  )
  const [account, setAccount] = useState<SuscriptionAccount>({
    completePrice: 0,
    email: '',
    isSoldBySlots: true,
    password: '',
    platformUUID: '',
    slotPrice: 0,
    slots: 0,
  })
  const { setNewAccount } = useContext(CreateAccountContext) as CreateAccountContextType

  useEffect(() => {
    const items = data?.getAllPlatforms ?? []
    setDropdownItems([...items])
  }, [data])

  useEffect(() => {
    const refetchData = async () => {
      const { data } = await fetchMore({
        variables: {
          name: searchName,
        },
      })

      setDropdownItems([...data.getAllPlatforms])
    }
    refetchData()
  }, [searchName])

  const handleOpenDropdown = () => {
    setShowDropDownItems(!showDropdownItems)
  }

  const handleSearch = async ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setItemLogo('')
    setSearchName(value)
  }

  const handleFocus = () => {
    setShowDropDownItems(true)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleIncrement = (e: any) => {
    e.preventDefault()
    setProfileCount(profileCount + 1)
    setAccount({ ...account, slots: profileCount })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDecrement = (e: any) => {
    e.preventDefault()
    setProfileCount(profileCount - 1)
    setAccount({ ...account, slots: profileCount })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createAccount = async (e: any) => {
    e.preventDefault()
    const payload: SuscriptionAccount = {
      ...account,
      completePrice: Number(account.completePrice),
      slotPrice: Number(account.slotPrice),
    }
    try {
      setNewAccount({ ...payload })
      await createSubscriptionAccount({ variables: { data: payload } })
      toast.success('🦄 Cuenta registrada exitosamente!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } catch (error) {
      const err = error as GraphQLError
      toast.error(`${err.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  return (
    <Fragment>
      <div className={isVisible ? '' : 'hidden'}>
        <div className="flex justify-end">
          <button
            className="font-semibold text-lg text-ui-gray-500 flex items-center gap-2 justify-end hover:underline"
            onClick={handleBack}
          >
            <LeftArrow color="#667085" />
            <span>Regresar al panel de cuentas</span>
          </button>
        </div>
        <div className="container mx-auto w-full h-full flex items-center justify-center mt-6">
          <div className="flex justify-center flex-col gap-3.5 w-form-2 text-center  ">
            <h1 className="font-bold text-3xl">Registrar nueva cuenta</h1>
            <span className="text-ui-gray-500 pb-3">Por favor ingrese los datos de la cuenta</span>
            <form className=" bg-white p-8 pb-10 shadow-lg rounded-xl w-auto">
              <div className="flex flex-col gap-2">
                <InputTextSection
                  label="Usuario"
                  placeholder="netflix1@example.com"
                  inputHandleChange={(e) => {
                    setAccount({ ...account, email: e.target.value })
                  }}
                />
                <InputTextSection
                  label="Contraseña"
                  placeholder="pS@9Rh53Inkk"
                  inputHandleChange={(e) => {
                    setAccount({ ...account, password: e.target.value })
                  }}
                />
                <div className="flex w-full gap-8">
                  <Dropdown
                    isOpen={showDropdownItems}
                    name="Plataforma"
                    handleOpenDropdown={handleOpenDropdown}
                    handleSearch={handleSearch}
                    handleFocus={handleFocus}
                    inputValue={searchName}
                    inputLogo={itemLogo}
                    elements={dropdownItems.length}
                    handleCleanInput={(e) => {
                      e.preventDefault()
                      setSearchName('')
                      setItemLogo('')
                    }}
                  >
                    {dropdownItems.map(({ logo, name, uuid }) => {
                      return (
                        <DropdownItem
                          key={uuid}
                          name={parseEnum(name)}
                          logo={logo}
                          handleClick={() => {
                            setAccount({ ...account, platformUUID: uuid })
                            setSearchName(parseEnum(name).replace(' ', '_'))
                            setItemLogo(logo)
                            setShowDropDownItems(false)
                          }}
                        ></DropdownItem>
                      )
                    })}
                  </Dropdown>
                  <InputCheckbox name="Tipo de suscripcion">
                    <CheckboxItem
                      handleCheck={() => {
                        setCheckPersonal(!checkPersonal)
                        if (checkPersonal) {
                          setAccount({ ...account, isSoldBySlots: false })
                        }
                      }}
                      isChecked={checkPersonal}
                      name="Personal"
                      description="Puede pertenecer a un unico usuario"
                    />
                    <CheckboxItem
                      handleCheck={() => {
                        setCheckShared(!checkShared)
                        if (checkShared) {
                          setAccount({ ...account, isSoldBySlots: true })
                        }
                      }}
                      isChecked={checkShared}
                      name="Compartida"
                      description="Puede pertenecer a un grupo de usuarios"
                    />
                  </InputCheckbox>
                </div>
                <div className=" flex flex-row w-full gap-8 mt-8">
                  <InputGroup
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    handleChange={({ target }) => {
                      setAccount({ ...account, slotPrice: target.value })
                    }}
                    label="Precio por perfil"
                  />
                  <InputGroup
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    handleChange={({ target }) => {
                      setAccount({ ...account, completePrice: target.value })
                    }}
                    label="Precio completo"
                  />
                </div>
                <div>
                  <AutoincrementInput
                    label="Numero de perfiles"
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    value={profileCount.toString()}
                  />
                </div>
                <div className="flex flex-row w-full justify-end mt-2">
                  <div className="h-8 w-36">
                    <Buttom description="Crear cuenta" handleClick={createAccount}></Buttom>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Fragment>
  )
}
