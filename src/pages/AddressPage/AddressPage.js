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




 // <InputsContainer>
        //         <form 
        //         //   onSubmit={onSubmitForm}
        //          >
         
        //     <TextEditStyle
        //         required
        //         id="outlined-required"
        //         label="Logradouro"
        //         defaultValue=""
        //         variant="outlined"
        //         fullWidth
        //         margin={'dense'}
        //     />
        //     <TextEditStyle
        //         required
        //         id="outlined-required"
        //         label="Número"
        //         defaultValue=""
        //         variant="outlined"
        //         fullWidth
        //         margin={'dense'}
        //     />
        //     <TextEditStyle
        //         id="outlined-required"
        //         label="Complemento"
        //         defaultValue=""
        //         variant="outlined"
        //         fullWidth
        //         margin={'dense'}
        //     />
        //     <TextEditStyle
        //         required
        //         id="outlined-required"
        //         label="Bairro"
        //         type='number'
        //         // defaultValue=""
        //         variant="outlined"
        //         fullWidth
        //         margin={'dense'}
        //     />
        //     <TextEditStyle
        //         required
        //         id="outlined-required"
        //         label="Cidade"
        //         // defaultValue="Rua Alessandra Vieira"
        //         variant="outlined"
        //         fullWidth
        //         margin={'dense'}
        //     />
        //     <TextEditStyle
        //         required
        //         id="outlined-required"
        //         label="Estado"
        //         // defaultValue="Rua Alessandra Vieira"
        //         variant="outlined"
        //         fullWidth
        //         margin={'dense'}
        //     />
        //     <Button
        //                 type={"submit"}
        //                 fullWidth
        //                 variant={"contained"}
        //                 color={"primary"}

        //             >
        //         Salvar
        //         </Button>
            
            
        //     </form>
        //     </InputsContainer>