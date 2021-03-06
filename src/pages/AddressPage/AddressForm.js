import React, { useContext, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { saveAddress } from '../../services/user'
import { useRequestDataX } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import GlobalContext from '../../global/GlobalContext'
import { goToHome } from '../../routes/coordinator'

const AddressForm = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const { requests } = useContext(GlobalContext)
  const [form, onChange, clear, setFields] = useForm({
    street: '', number: '', neighbourhood: '',
    city: '', state: '', complement: ''
  })

  const [fullAddress] = useRequestDataX(`${BASE_URL}/fourFoodA/profile/address`, {})

  const onSubmitForm = (event) => {
    event.preventDefault()
    saveAddress(form, clear, setIsLoading, requests.getProfile)
    goToHome(history)
  }

  useEffect(() => {
    if (fullAddress.address) {

      const dados = {
        "city": fullAddress.address.city,
        "complement": fullAddress.address.complement,
        "neighbourhood": fullAddress.address.neighbourhood,
        "number": fullAddress.address.number,
        "state": fullAddress.address.state,
        "street": fullAddress.address.street
      }

      setFields(dados)

    }

    // eslint-disable-next-line
  }, [])


  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.street}
            name={'street'}
            onChange={onChange}
            label={'Logradouro'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            autoFocus
            margin={'dense'}
          />
          <TextField
            value={form.number}
            name={'number'}
            onChange={onChange}
            label={'N??mero'}
            variant={'outlined'}
            type={'number'}
            fullWidth
            required
            margin={'dense'}
          />
          <TextField
            value={form.complement}
            name={'complement'}
            onChange={onChange}
            label={'Complemento - Apto / Bloco'}
            variant={'outlined'}
            fullWidth
            margin={'dense'}
          />
          <TextField
            value={form.neighbourhood}
            name={'neighbourhood'}
            onChange={onChange}
            label={'Bairro'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'dense'}
          />
          <TextField
            value={form.city}
            name={'city'}
            onChange={onChange}
            label={'Cidade'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'dense'}
          />
          <TextField
            value={form.state}
            name={'state'}
            onChange={onChange}
            label={'Estado'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'dense'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default AddressForm
