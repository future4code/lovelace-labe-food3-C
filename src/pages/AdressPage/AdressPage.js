import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";

const AdressPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>opa</div>
    )
}

export default AdressPage