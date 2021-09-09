import axios from "axios"
import { BASE_URL, HEADERS } from "../constants/urls"
import { goToAddress, goToHome, goToProfile } from "../routes/coordinator"

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/fourFoodA/login`, body)

    .then((res) => {
        
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        res.data.user.hasAddress === false ? goToAddress(history) 
        : goToHome(history)
        
    })
    .catch((err) => {
        setIsLoading(false)
        
        alert("Erro ao fazer Login", err.response.data.errors)
    })
}   

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/fourFoodA/signup`, body)
    .then((res) => {
        
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


export const UpdateProfile = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    console.log('url', `${BASE_URL}/fourFoodA/profile`, body, HEADERS)
    axios.post(`${BASE_URL}/fourFoodA/profile`, body, HEADERS)
        .then((res) => {
            console.log(res.data)
            setIsLoading(false)
            clear()
            history.GoBack()
        })
        .catch((err) => {
            alert('Erro ao atualizar perfil!')
            console.log(err.response)
            setIsLoading(false)
        })
  
export const saveAddress = (body, clear, history, setIsLoading) => {
    const token = localStorage.getItem("token")
    const headers = {
        headers: {
            auth: token
        }
    }

    setIsLoading(true)
    axios.put(`${BASE_URL}/fourFoodA/address`, body, headers)
    .then((res) => {
        localStorage.removeItem("token")
        localStorage.setItem("token", res.data.token)
        console.log("DATA TOTAL", res.data)
        console.log("TOKEN NOVO", res.data.token)
        clear()
        setIsLoading(false)
        alert("Endereço Cadastrado com sucesso")
        goToHome(history)
        
    })
    .catch((err) => {
        setIsLoading(false)
        console.log("ERRO ENDEREÇO", err.response)
    })

}

