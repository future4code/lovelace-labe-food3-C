import React from "react"
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import { StyledHomePage } from "./styled";

import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";

const HomePage = () => {
    useProtectedPage()
    const history = useHistory()

    const restaurants = {
      "Árabe": [
        {
          "id": "1",
          "description": "Habib's é uma rede de restaurantes",
          "shipping": 6,
          "address": "Rua das Margaridas, 110 - Jardim das Flores",
          "name": "Habibs",
          "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
          "deliveryTime": 60,
          "category": "Árabe"
        },
        {
          "id": "2",
          "description": "Habib's é uma rede de restaurantes",
          "shipping": 6,
          "address": "Rua das Margaridas, 110 - Jardim das Flores",
          "name": "Habibs",
          "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
          "deliveryTime": 60,
          "category": "Árabe"
        },
      ],
      "Burger": [
          {
            "id": "3",
            "description": "Habib's é uma rede de restaurantes",
            "shipping": 6,
            "address": "Rua das Margaridas, 110 - Jardim das Flores",
            "name": "Habibs",
            "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
            "deliveryTime": 60,
            "category": "Burger"
          },
          {
            "id": "4",
            "description": "Habib's é uma rede de restaurantes",
            "shipping": 6,
            "address": "Rua das Margaridas, 110 - Jardim das Flores",
            "name": "Habibs",
            "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
            "deliveryTime": 60,
            "category": "Buerger"
          },
          {
            "id": "5",
            "description": "Habib's é uma rede de restaurantes",
            "shipping": 6,
            "address": "Rua das Margaridas, 110 - Jardim das Flores",
            "name": "Habibs",
            "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
            "deliveryTime": 60,
            "category": "Buerger"
          },
      ]
    }


    return (
      <StyledHomePage>
        <SearchField />
        <TapPanel restaurants={restaurants}/>
        <p>Footer</p>
      </StyledHomePage>
    )
}

export default HomePage