import React, { useContext } from 'react';
import { useState } from "react"
import { InputsContainer } from "./styled"
import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useHistory } from "react-router-dom"
import GlobalContext from '../../global/GlobalContext';

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

const LoginForm = () => {
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const { setters } = useContext(GlobalContext)
    const [showPassword, setShowPassword] = useState(false)


    const onSubmitForm = (event) => {
        event.preventDefault()
        form.password.length < 6 ? alert("Digite uma senha maior que 6 caracteres") 
        : login(form, clear, history, setIsLoading, setters.setUserProfile)
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
                        margin={"dense"}
                        required
                        type={"email"}
                    />

                <FormControl variant="outlined" style={{ width: '100%', marginTop: 20, marginBottom: 8 }}>
                    <InputLabel htmlFor="passwordField" style={{ margin: -7, marginLeft: 1 }}>Senha</InputLabel>
                    <OutlinedInput
                        id="passwordField"
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        name={'password'}
                        onChange={handleInputChange}
                        margin={'dense'}
                        endAdornment={
                            <InputAdornment position="end" style={{marginBottom: 8}}>
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