import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { StyledForm } from "./styled";

export default function SearchField() {
  return (
    <StyledForm variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        startAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="toggle password visibility" edge="start">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        labelWidth={0}
        placeholder="Restaurante"
      />
    </StyledForm>
  );
}
