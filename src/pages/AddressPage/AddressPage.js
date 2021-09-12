import React from 'react'
import { ScreenContainer } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddressForm from "./AddressForm"
import Footer from '../../components/Footer/Footer'

const AddressPage = () => {
    useProtectedPage()
    
    return (
      <ScreenContainer>
        <AddressForm />
        <Footer />
      </ScreenContainer>
    )
}

export default AddressPage
