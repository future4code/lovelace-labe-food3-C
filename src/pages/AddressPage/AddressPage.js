import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { signUp } from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const AddressPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (

        <form 
        // onSubmit={onSubmitForm}
        >
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            // value={}
            name={'name'}
            // onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'dense'}
            helperText="Nome e Sobrenome"
          />
          <TextField
            // value={form.email}
            name={'email'}
            // onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'dense'}
            helperText="Digite seu melhor e-mail"
          />
          <TextField
            // value={form.cpf}
            name={'cpf'}
            // onChange={onChange}
            label={'CPF'}
            variant={'outlined'}
            type={'cpf'}
            fullWidth
            required
            margin={'dense'}
            inputProps={{ pattern: "[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" }}
            helperText="Formato 000.111.222-33"
          />
          <TextField
            // value={form.password}
            name={'password'}
            // onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'dense'}
            helperText="Deve ter no mínimo 6 dígitos"
          />
          <TextField
            // value={form.passwordConfirmation}
            name={'passwordConfirmation'}
            // onChange={onChange}
            label={'Confirmar a senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'dense'}
            helperText="A confirmação deve ser igual à senha"
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {/* {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Criar</>} */}
        </Button>
      </SignUpFormContainer>
    </form>

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
    )
}

export default AddressPage