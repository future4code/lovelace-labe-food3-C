import { StyledHomePage } from "./styled";
import React from "react"
import {useHistory} from "react-router-dom";
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import categorizeRestaurants from "../../tools/categorizeRestaurants"
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import CardFeed from "../../components/CardFeed/CardFeed";

const temporario = [
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
    "name": "Mc",
    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
    "deliveryTime": 60,
    "category": "Árabe"
  },
  {
    "id": "3",
    "description": "Habib's é uma rede de restaurantes",
    "shipping": 6,
    "address": "Rua das Margaridas, 110 - Jardim das Flores",
    "name": "Gallo",
    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
    "deliveryTime": 60,
    "category": "Burger"
  },
  {
    "id": "4",
    "description": "Habib's é uma rede de restaurantes",
    "shipping": 6,
    "address": "Rua das Margaridas, 110 - Jardim das Flores",
    "name": "Mato",
    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
    "deliveryTime": 60,
    "category": "Burger"
  },
  {
    "id": "5",
    "description": "Habib's é uma rede de restaurantes",
    "shipping": 6,
    "address": "Rua das Margaridas, 110 - Jardim das Flores",
    "name": "AA",
    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
    "deliveryTime": 60,
    "category": "Burger"
  },
]



const HomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const [searchMode, setSearchMode] = useState(false)
    const [restaurants, setRestaurants] = useState(categorizeRestaurants( temporario ))
    const [selectedRestaurants, setSelectedRestaurants] = useState([])
  
    if(searchMode){
      console.log(selectedRestaurants)

      return (
      <StyledHomePage>
        <SearchField setSearchMode={setSearchMode} restaurants={restaurants} setSelectedRestaurants={setSelectedRestaurants} />
        {Object.keys(selectedRestaurants).length>0?
        <div>{selectedRestaurants.map(restaurant => (
        <CardFeed 
          key={restaurant.id}
          id={restaurant.id}
          description={restaurant.description}
          shipping={restaurant.shipping}
          address={restaurant.address}
          name={restaurant.name}
          logoUrl={restaurant.logoUrl}
          deliveryTime={restaurant.deliveryTime}
          category={restaurant.category}
        />
        ))}</div>
        :<p>Busque por nome de restaurante</p>}
      </StyledHomePage>
      );
    }


    return (
      <StyledHomePage>
        <SearchField setSearchMode={setSearchMode}/>
        <TapPanel restaurants={restaurants}/>
        <Footer/>
      </StyledHomePage>
    )
}

export default HomePage