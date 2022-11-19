
import { ApolloProvider } from '@apollo/client'
import React from 'react'
import './App.css'
import { Home } from './components/pages/Home'
import { AuthProvider } from './context/AuthProvider'
import { RegisterProvider } from './context/RegisterProvider'
import { apolloClient } from './graphql/apolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <RegisterProvider>
          <Home />
        </RegisterProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App