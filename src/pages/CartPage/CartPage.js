import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {Typography} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";


const MainContainer = styled.div`
  /* 580px */
  @media (max-width: 36em) {

  }

  /* 520px */
  @media (max-width: 32em) {

  }

  /* 480px */
  @media (max-width: 30em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const UserAddress = styled.div`
  /* 580px */
  @media (max-width: 36em) {

  }

  /* 520px */
  @media (max-width: 32em) {

  }

  /* 480px */
  @media (max-width: 30em) {
    width: 100%;
    background-color: #EEE;
    padding: 20px;
    //border: 1px solid #000;

  }
`

const RestaurantAddress = styled.div`
  /* 580px */
  @media (max-width: 36em) {

  }

  /* 520px */
  @media (max-width: 32em) {

  }

  /* 480px */
  @media (max-width: 30em) {
    width: 100%;
    padding: 10px 20px;
    //border: 1px solid #000;

  }
`

const CardContainer = styled.div`
  /* 580px */
  @media (max-width: 36em) {

  }

  /* 520px */
  @media (max-width: 32em) {

  }

  /* 480px */
  @media (max-width: 30em) {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #000;

  }
`


const CartPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <h5>Header</h5>

            <UserAddress>
                <Typography style={{color: "#b8b8b8", fontSize: "18px"}}>Endereço de entrega</Typography>
                <Typography style={{color: "#000000", fontSize: "18px"}}>Rua Alessandra Vieira, 42</Typography>
            </UserAddress>

            <RestaurantAddress>
                <Typography color={"primary"} style={{fontSize: "16px", paddingBottom: "5px"}}>
                    Bullguer Vila Madalena
                </Typography>

                <Typography style={{color: "#b8b8b8", fontSize: "16px", paddingBottom: "5px"}}>
                    R. Fradique Coutinho, 1136 - Vila Madalena
                </Typography>

                <Typography style={{color: "#b8b8b8", fontSize: "16px"}}>
                    30 - 45 min
                </Typography>
            </RestaurantAddress>

            <CardContainer>
                <CardProduct/>
            </CardContainer>


            <Footer/>
        </MainContainer>
    )
}

export default CartPage 