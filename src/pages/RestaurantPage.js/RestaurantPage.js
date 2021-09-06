import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import { MainContainer, HeaderContainer, CardRestaurant, RestaurantPicture,DeliverTaxSpan, CardMenu} from "./styled";
import {useHistory} from "react-router-dom";
import CardBurger from "../../components/CardBurger/CardBurger";

const RestaurantPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <HeaderContainer>Header</HeaderContainer>
            
            <CardRestaurant>
                <RestaurantPicture src="https://picsum.photos/400" />
                <h5>
                    Burger Villa Madalena                    
                </h5>
                <p>
                    Burger
                </p>
                <p>
                    <span>50-60 min</span>
                    <DeliverTaxSpan>Frete R$6</DeliverTaxSpan>
                </p>
                <p>R. Fradique Coutinho, 111 Vila Madalena</p>
            </CardRestaurant>
            <CardMenu>
                <h3>Principais</h3>
            <CardBurger /> 
            <CardBurger />  
            </CardMenu>
        </MainContainer>
    )
}

export default RestaurantPage