import React from "react"
import {Button, Typography} from "@material-ui/core";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {ElementLogin, LoginContainer, MainContainer} from "../LoginPage/styled";
import SignUpForm from "./SignUpForm";
import {goToLogin} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <LoginContainer>
                <ElementLogin>
                    <Typography variant={"h4"}>
                        Criar Conta:
                    </Typography>

                    <SignUpForm/>

                    <Button
                        onClick={() => goToLogin(history)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}
                    >Já Possui conta? Faça Login</Button>
                </ElementLogin>


            </LoginContainer>
        </MainContainer>
    )
}

export default SignUpPage