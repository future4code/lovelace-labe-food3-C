import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, HEADERS } from "../constants/urls";

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
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response)
                alert('Ocorreu um erro, tente novamente')
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
                // console.log("RESPONSE", response.data)
            })
            .catch((error) => {
                // console.log("ERRO GET FULL ADD", error)
                alert('Ocorreu um erro, tente novamente')
            })

    }, [url])

    return [data, setData]
}
