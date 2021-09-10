import React, { useState, useContext } from "react";
import UIModal from "../Modal/UIModal";
import { Button, MenuItem, TextField } from "@material-ui/core";
import GlobalContext from "../../global/GlobalContext";

const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardModal = (props) => {
  const { states, setters, requests } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(0);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  const addItems = () => {
    setters.setAddedProducts([
      ...states.addedProducts,
      { id: props.productId, quantity: quantity },
    ]);
    props.setShowModal(false);
    console.log(states.addedProducts);
  };

  return (
    <UIModal isOpen={Boolean(props.itemId)}>
      <h4>Selecione a quantidade desejada</h4>
      <TextField
        select
        variant={"outlined"}
        fullWidth
        value={quantity ? quantity : ""}
        onChange={handleChange}
      >
        {quantities.map((number) => {
          return (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          );
        })}
      </TextField>
      <Button variant={"contained"} type={"submit"} onClick={addItems}>
        Adicionar ao Carrinho
      </Button>
    </UIModal>
  );
};

export default CardModal;
