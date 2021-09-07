import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";

const UserInfoPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>USER INFO PAGE</div>
    )
}

export default UserInfoPage