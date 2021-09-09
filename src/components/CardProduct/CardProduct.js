import React from "react"
import styled from "styled-components";
import product from "../../assets/images/mao-santa-burguer-900-x-506.png"
import {Typography} from "@material-ui/core";

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
    display: flex;
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

const TextCard = styled.div`
/* 580px */
@media (max-width: 36em) {

}

/* 520px */
@media (max-width: 32em) {

}

/* 480px */
@media (max-width: 30em) {
   margin: 0 10px;
   width: 100%;
  border: 1px solid #000;
  
}
`

const CardProduct = () => {

    return (
        <CardContainer>

            <ProductImage Background={product}/>

            <TextCard>
                <Typography color={"primary"} style={{fontSize: "18px"}}>
                    teste
                </Typography>
            </TextCard>
        </CardContainer>
    )
}

export default CardProduct