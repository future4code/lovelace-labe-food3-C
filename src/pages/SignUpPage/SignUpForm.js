import React, {useContext, useState} from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'
import GlobalContext from '../../global/GlobalContext'

// MATERIAL UI
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SignUpForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: '', email: '', cpf: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const { setters } = useContext(GlobalContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConf, setShowPasswordConf] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    form.passwordConfirmation === form.password ? signUp(form, clear, history, setIsLoading, setters.setUserProfile) : 
    alert("A confirmação de senha deve ser igual à senha")
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'dense'}
            helperText="Nome e Sobrenome"
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'dense'}
            helperText="Digite seu melhor e-mail"
          />
          <TextField
            value={form.cpf}
            name={'cpf'}
            onChange={onChange}
            label={'CPF'}
            variant={'outlined'}
            type={'cpf'}
            fullWidth
            required
            margin={'dense'}
            inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" }}
            helperText="Formato 000.111.222-33"
          />
         
          <FormControl variant="outlined" style={{width: '100%', marginTop:10, marginBottom:8}}>
          <InputLabel htmlFor="passwordField" style={{margin: -7, marginLeft: 1}}>Senha</InputLabel>
          <OutlinedInput
            id="passwordField"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            name={'password'}
            onChange={onChange}
            margin={'dense'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={e => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={50}
          />
          <FormHelperText id="outlined-weight-helper-text">Deve ter no mínimo 6 dígitos</FormHelperText>
          </FormControl>

          <FormControl variant="outlined" style={{width: '100%', marginTop:10, marginBottom:8}}>
          <InputLabel htmlFor="passwordField2" style={{margin: -7, marginLeft: 1}}>Confirmação de senha</InputLabel>
          <OutlinedInput
            id="passwordField2"
            type={showPasswordConf ? 'text' : 'password'}
            value={form.passwordConfirmation}
            name={'passwordConfirmation'}
            onChange={onChange}
            margin={'dense'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={e => setShowPasswordConf(!showPasswordConf)}
                  edge="end"
                >
                  {showPasswordConf ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={170}
          />
          <FormHelperText id="outlined-weight-helper-text">Deve ter no mínimo 6 dígitos</FormHelperText>
          </FormControl>
        
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Criar</>}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
