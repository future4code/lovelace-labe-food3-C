import React, { useState } from "react";
import UIModal from "../Modal/UIModal";
import { Button, MenuItem, TextField } from "@material-ui/core";

const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardModal = (props) => {
  const [quantity, setQuantity] = useState(0);
  const handleChange = (event) => {
    setQuantity(event.target.value);
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
      <Button
        variant={"contained"}
        type={"submit"}
        onClick={() => props.setShowModal(false)}
      >
        Adicionar ao Carrinho
      </Button>
    </UIModal>
  );
};

export default CardModal;
