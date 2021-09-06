import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";

const UserInfoPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>opa</div>
    )
}

export default UserInfoPage