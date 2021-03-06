import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage"
import { MainContainer } from "./styled";
import UserInfoForm from "./userInfoForm";

const UserInfoPage = () => {
    useProtectedPage()
    return (
        <MainContainer>
            <UserInfoForm />
        </MainContainer>
    )
}

export default UserInfoPage