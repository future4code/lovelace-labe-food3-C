import { StyledHomePage } from "./styled";
import React from "react"
import {useHistory} from "react-router-dom";
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import categorizeRestaurants from "../../tools/categorizeRestaurants"
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    useProtectedPage()
    const history = useHistory()

    const restaurants = [
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
          "category": "Burger"
        },
        {
          "id": "5",
          "description": "Habib's é uma rede de restaurantes",
          "shipping": 6,
          "address": "Rua das Margaridas, 110 - Jardim das Flores",
          "name": "Habibs",
          "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
          "deliveryTime": 60,
          "category": "Burger"
        },
      ]


    return (
      <StyledHomePage>
        <SearchField />
        <TapPanel restaurants={categorizeRestaurants(restaurants)}/>
        <Footer />
      </StyledHomePage>
    )
}

export default HomePage