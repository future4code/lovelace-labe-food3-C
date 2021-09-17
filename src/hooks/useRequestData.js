import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../constants/urls";

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        const token = localStorage.getItem("token")

        const headers = {
            headers: {
                auth: token
            }
        }

        axios.get(`${BASE_URL}${endpoint}`, headers)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                if(error.response){
                    alert(error.response.data.message)
                }
                else{
                    alert('Ocorreu um erro, tente novamente')
                }
            })

    }, [endpoint])

    return [data, setData]
}

export default useRequestData



// >>>>>>>>>>> Fiz outro useRequestData !!! ABAIXO ...

export const useRequestDataX = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        const token = localStorage.getItem("token")
        const headers = {
            headers: {
                auth: token
            }
        }

        axios.get(url, headers)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                if(error.response){
                    alert(error.response.data.message)
                }
                else{
                    alert('Sem dados iniciais no formulário')
                }
            })

    }, [url])

    return [data, setData]
}
