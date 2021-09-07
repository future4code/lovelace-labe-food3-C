import React from "react";
import { CardFood, MiniPicture, TextCard } from "./styled";

const CardBurger = (props) => {
  return (
    <CardFood>
      <div>
        <MiniPicture src={props.photoUrl} />
      </div>
      <TextCard>
        <h4>{props.name}</h4> <p>{props.description}</p>{" "}
        <h5> R${props.price} </h5>{" "}
      </TextCard>
      <button> Adicionar </button>
    </CardFood>
  );
};

export default CardBurger;
