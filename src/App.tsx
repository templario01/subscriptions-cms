import { ApolloProvider } from '@apollo/client'
import React from 'react'
import './App.css'
import { Home } from './components/pages/Home'
import { RegisterProvider } from './context/RegisterProvider'
import { SessionProvider } from './context/SessionProvider'
import { apolloClient } from './graphql/apolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider>
        <RegisterProvider>
          <Home />
        </RegisterProvider>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default App
