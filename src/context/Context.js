import React from 'react'
import { AuthProvider } from './AuthContext'
import { SearchProvider } from './SearchContext'

const Context = ({children}) => {
  return (
    <>
    <AuthProvider>
      <SearchProvider>
    {children}
      </SearchProvider>
    </AuthProvider>
    </>
  )
}

export default Context