import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { StyledForm } from "./styled";

export default function SearchField({setSearchMode, setSelectedRestaurants, restaurants}) {
  
  const handleChange = e => {
    let selectedRestaurants = []

    Object.values(restaurants).forEach(category => {
      category.forEach(restaurant => {

          if(restaurant.name.toUpperCase().includes(e.target.value.toUpperCase()))
            selectedRestaurants.push(restaurant)
      })
    })

    setSelectedRestaurants(selectedRestaurants)
  }

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
        onBlur={e => setSearchMode(false)}
        onFocus={e => setSearchMode(true)}
        onChange={handleChange}
      />
    </StyledForm>
  );
}
