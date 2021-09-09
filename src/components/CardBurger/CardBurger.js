import React, { useState } from "react";
import { CardFood, MiniPicture, TextCard } from "./styled";
import UIModal from "../Modal/UIModal";
import { Button, Select } from "@material-ui/core";
import CardModal from "./CardModal";

const CardBurger = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <CardFood>
      <div>
        <MiniPicture src={props.photoUrl} />
      </div>
      <TextCard>
        <h4>{props.name}</h4> <p>{props.description}</p>{" "}
        <h5> R${props.price} </h5>{" "}
      </TextCard>
      <button onClick={() => setShowModal(true)}> Adicionar </button>
      {showModal ? <CardModal setShowModal={setShowModal} /> : null}
    </CardFood>
  );
};

export default CardBurger;
