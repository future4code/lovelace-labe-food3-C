import React from 'react';
import { LogoImage, ScreenContainer, SignUpButtonContainer, StyledText } from "./styled"
import logo from "../../assets/logo-ifuture.svg"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { goToSignUp } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} alt="logo-I-future-foods" />
            <StyledText>
                Login
            </StyledText>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"default"}
                >
                    Não possui cadastro? Clique aqui.
                </Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage