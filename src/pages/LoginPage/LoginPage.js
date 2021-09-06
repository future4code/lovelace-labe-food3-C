import React from "react"
import {Button, Typography} from "@material-ui/core";
import {goToSignUp} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";
import {ElementLogin, LoginContainer, MainContainer} from "./styled";

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <LoginContainer>
                <ElementLogin>
                    <Typography variant={"h4"}>
                        Login
                    </Typography>

                    <LoginForm/>

                    <Button
                        onClick={() => goToSignUp(history)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}
                    >Não possui conta? Cadastre-se
                    </Button>
                </ElementLogin>

            </LoginContainer>
        </MainContainer>
    )
}

export default LoginPage