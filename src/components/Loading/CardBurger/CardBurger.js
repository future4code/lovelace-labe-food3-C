import React from "react"
import {CardFood, MiniPicture, TextCard} from "./styled"

const CardBurger = () => {


    return (
        <CardFood>
            <div>
                <MiniPicture src="https://picsum.photos/200/300" />
                
            </div>
            <TextCard>
                <h4>Bullguer</h4>
                <p>Pão Pão e Pão</p>
                <h5>R$23,00</h5>
            </TextCard>
            <button>Adicionar</button>
        </CardFood>
    )
}

export default CardBurger