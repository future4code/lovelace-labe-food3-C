import React from "react"
import styled from "styled-components";
import product from "../../assets/images/mao-santa-burguer-900-x-506.png"
import { Button, Typography} from "@material-ui/core";

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
    position: relative;
    margin-bottom: 10px;
    
    button {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 90px;
        height: 30px;
        border-radius: 8px 0 8px 0;
        background-color: white;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        border: 1px solid #e8222e;
        color: #e8222e;
    } 
    
    span {
        width: 90px;
        height: 30px;
        text-align: center;
        border: solid 1px #e8222e;
        border-radius: 0 8px 0 8px;
        color: #e8222e;
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
    height: auto;
    width: 150px;
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
  // border: 1px solid #000;
}
`
const CardProduct = () => {

    return (
        <CardContainer>

            <ProductImage Background={product}/>

            <TextCard>
                <Typography color={"primary"} style={{fontSize: "20px", fontWeight: "400", margin: "10px 0px 0px 5px"}}>
                    Stencil
                </Typography>

                <Typography style={{color: "#b8b8b8", fontSize: "14px", margin: "5px"}}>
                    Pão, carne, queijo, cebola roxa, tomate, alface e molho.
                </Typography>

                <Typography style={{color: "#000", fontSize: "18px", margin: "5px"}}>
                    R$46,00
                </Typography>

            </TextCard>

            <span>
                2
            </span>

            <button>Remover</button>
        </CardContainer>
    )
}

export default CardProduct