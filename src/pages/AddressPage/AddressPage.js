import React from 'react'
import { ScreenContainer } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddressForm from "./AddressForm"

const AddressPage = () => {
    useProtectedPage()
    
    return (
      <ScreenContainer>
        <AddressForm />
      </ScreenContainer>
    )
}

export default AddressPage
