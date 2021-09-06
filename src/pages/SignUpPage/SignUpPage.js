import React from 'react'
import logo from "../../assets/logo-ifuture.svg"
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { StyledText } from './styled'


const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} alt="logo-I-future-foods" />
      <StyledText>
          Cadastrar
      </StyledText>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage