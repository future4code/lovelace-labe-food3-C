import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import { MainContainer} from "../LoginPage/styled";
import {useHistory} from "react-router-dom";

const RestaurantPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            opa
        </MainContainer>
    )
}

export default RestaurantPage