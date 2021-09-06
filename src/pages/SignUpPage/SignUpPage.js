import React from 'react'
import logo from "../../assets/logo-ifuture.svg"
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import Typography from '@material-ui/core/Typography'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} alt="logo-I-future-foods" />
      <Typography variant={"h6"}>
                        Cadastrar
                    </Typography>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage