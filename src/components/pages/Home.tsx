import React, { useContext, useEffect } from 'react'
import { SessionContext, SessionContextType } from '../../context/SessionContext'
import { PagesRoutes } from '../../routes/PagesRoutes'
import { GET_REFRESH_TOKEN } from '../../graphql/mutations/get-refresh-token'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const { setIsAuth, isAuth, setToken, token } = useContext(SessionContext) as SessionContextType
  const [getRefreshToken] = useMutation(GET_REFRESH_TOKEN)
  const navigate = useNavigate()

  const getTokensFromServer = async (refreshToken: string) => {
    const response = await getRefreshToken({
      variables: {
        token: refreshToken,
      },
      
    })
    return response
  }

  const getSession = async () => {
    const localToken = localStorage.getItem('refresh_token')
    if (!localToken || localToken.length === 0) {
      throw new Error('refresh token was not found')
    }
    const userTokens = await getTokensFromServer(localToken)
    setToken(userTokens.data.refreshToken)
    localStorage.setItem('refresh_token', token)
    localStorage.setItem('access_token', userTokens.data.accessToken)
    setIsAuth(true)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      try {
        await getSession()
      } catch (error) {
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        setIsAuth(false)
      }
    })()
  }, [])

  useEffect(() => {
    console.log(isAuth)
    if (isAuth === true) {
      navigate('/cms/home')
    } else {
      navigate('/login')
    }
  }, [navigate])

  return (
    <>
      <div className="App bg-ui-gray-25">
        <div className="flex h-full">
          <PagesRoutes />
        </div>
      </div>
    </>
  )
}
