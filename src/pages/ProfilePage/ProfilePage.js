import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import { MainContainer} from "../LoginPage/styled";
import {useHistory} from "react-router-dom";

const ProfilePage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>opa</div>
    )
}

export default ProfilePage