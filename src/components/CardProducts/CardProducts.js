import React, { useState, useContext } from "react";
import { CardFood, MiniPicture, TextCard, QuantityCard } from "./styled";
import UIModal from "../Modal/UIModal";
import { Button, Select } from "@material-ui/core";
import CardModal from "./CardModal";
import GlobalContext from "../../global/GlobalContext";

const CardProducts = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { states, setters, requests } = useContext(GlobalContext);

  const itemQuantity = states.addedProducts;

  const productQuantity = itemQuantity
    .filter((product) => {
      return product.id === props.id;
    })

    .map((product) => {
      return product.quantity;
    });

  return (
    <CardFood>
      <div>
        <MiniPicture src={props.photoUrl} />{" "}
      </div>{" "}
      <TextCard>
        <h4> {props.name} </h4> <p>{props.description}</p>{" "}
        <h5> R$ {props.price} </h5>{" "}
      </TextCard>{" "}
      <button onClick={() => setShowModal(true)}>
        {" "}
        {!productQuantity[0] ? <span> Adicionar </span> : <span>Alterar</span>}
      </button>
      {productQuantity[0] ? (
        <QuantityCard>{productQuantity[0]}</QuantityCard>
      ) : null}
      {showModal ? (
        <CardModal setShowModal={setShowModal} productId={props.id} />
      ) : null}{" "}
    </CardFood>
  );
};

export default CardProducts;
