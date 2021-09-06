import React from 'react';
import { useState } from "react"
import { InputsContainer } from "./styled"
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from '@material-ui/core/Button'
// import { login } from "../../services/user"
import { useHistory } from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = () => {
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (form.password.length < 8) {
            alert("Digite uma senha maior que 8 caracteres")
        } else {
            // login(form, clear, history, setIsLoading)
        }
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={handleInputChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={handleInputChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</>}
                    </Button>

                </form>
            </InputsContainer>
    )
}

export default LoginForm