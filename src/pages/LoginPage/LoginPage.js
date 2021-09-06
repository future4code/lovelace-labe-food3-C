import React from 'react';
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo-ifuture.svg"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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
            <Typography variant={"h6"}>
                        Entrar
                    </Typography>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"secondary"}
                >
                    Não possui cadastro? Clique aqui.
                </Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage