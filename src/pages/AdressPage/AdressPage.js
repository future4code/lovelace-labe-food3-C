import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";

const AdressPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>ADDRESS PAGE - CADASTRO DE ENDEREÇO</div>
    )
}

export default AdressPage