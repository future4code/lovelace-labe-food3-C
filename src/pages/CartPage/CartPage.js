import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import { MainContainer} from "../LoginPage/styled";
import {useHistory} from "react-router-dom";

const CartPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>CART PAGE - Carrinho</div>
    )
}

export default CartPage 