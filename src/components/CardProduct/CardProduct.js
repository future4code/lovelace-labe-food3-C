import React from "react"
import styled from "styled-components";
import product from "../../assets/images/mao-santa-burguer-900-x-506.png"

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
    border-radius: 8px;
    border: 1px solid #000;
  }
`

const ProductImage = styled.div`
  /* 580px */
  @media (max-width: 36em) {

  }

  /* 520px */
  @media (max-width: 32em) {

  }

  /* 480px */
  @media (max-width: 30em) {
    height: 100px;
    width: 100px;
    background-image: ${(props) => `url(${props.Background})` || "#1D2025"};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    
  }
`

const CardProduct = () => {

    return (
        <CardContainer>

            <ProductImage Background={product}/>


            {/*<did>*/}
            {/*    <h4>Vinil Butantã</h4>*/}
            {/*    <ProductPriceAndTax>*/}
            {/*        <p>50 - 60 min </p>*/}
            {/*        <p>Frete R$6.00</p>*/}
            {/*    </ProductPriceAndTax>*/}
            {/*</did>*/}
        </CardContainer>
    )
}

export default CardProduct