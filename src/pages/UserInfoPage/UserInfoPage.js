import React from "react"
import Footer from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useUnprotectedPage"
import { MainContainer } from "./styled";
import UserInfoForm from "./userInfoForm";

const UserInfoPage = () => {
    useProtectedPage()
    return (
        <MainContainer>
            <UserInfoForm />
            <Footer />
        </MainContainer>
    )
}

export default UserInfoPage