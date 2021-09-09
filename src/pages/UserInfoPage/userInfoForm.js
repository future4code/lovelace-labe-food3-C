import React, { useState } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {useHistory} from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import CircularProgress from '@material-ui/core/CircularProgress'
import { updateProfile } from "../../services/user"

const UserInfoForm = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ name: "", email: "", cpf: "" })
    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm = (event) => {
        event.preventDefault()
        updateProfile(form, clear, history, setIsLoading)
    }
    return (
        <form onSubmit={onSubmitForm}>
            <TextField
                required
                name={"name"}
                value={form.name}
                onChange={handleInputChange}
                id="outlined-required"
                label="Nome"
                type={"text"}
                defaultValue=""
                variant="outlined"
                fullWidth
                margin={"dense"}
            />
            <TextField
                required
                name={"email"}
                value={form.email}
                onChange={handleInputChange}
                id="outlined-required"
                label="E-mail"
                type={"email"}
                defaultValue=""
                variant="outlined"
                fullWidth
                margin={"dense"}
            />
            <TextField
                required
                name={"cpf"}
                value={form.cpf}
                onChange={handleInputChange}
                id="outlined-required"
                label="CPF"
                type='text'
                defaultValue=""
                variant="outlined"
                fullWidth
                margin={"dense"}
                inputProps={{ pattern: "[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" }}
                helperText="Formato 000.111.222-33"
            />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Salvar</>}
                </Button>
            </form>
    )
}

export default UserInfoForm