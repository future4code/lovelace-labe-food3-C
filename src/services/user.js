import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToAddress, goToHome } from "../routes/coordinator"

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/fourFoodA/login`, body)
    
    .then((res) => {
        console.log("LOGIN", res.data.user.hasAddress)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        if (res.data.user.hasAddress === false) {
            goToAddress(history)
        } else {
            goToHome(history)
        }
        
    })
    .catch((err) => {
        setIsLoading(false)
        // console.log("LOGIN ERRO", err.response.data.errors)
        alert("Erro ao fazer Login", err.response.data.errors)
    })
}   

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/fourFoodA/signup`, body)
    .then((res) => {
        console.log("SIGN UP", res.data)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToAddress(history)
        
    })
    .catch((err) => {
        setIsLoading(false)
        console.log("Erro no Cadastro", err.response)
    })
}

