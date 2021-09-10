import React from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {
  MainContainer,
  HeaderContainer,
  CardRestaurant,
  RestaurantPicture,
  DeliverTaxSpan,
  CardMenu,
  GeralContainer,
} from "./styled";
import { useHistory, useParams } from "react-router-dom";
import CardBurger from "../../components/CardBurger/CardBurger";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import categorizeRestaurants from '../../tools/categorizeRestaurants'

const RestaurantPage = () => {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [data, setData] = useRequestData(
    `/fourFoodA/restaurants/${params.id}`,
    {}
  );

  const arrayFoods =
    data &&
    data.restaurant &&
    data.restaurant.products &&
    Object.keys(categorizeRestaurants(data.restaurant.products))
      .map(category => (
        <CardMenu key={category}>
          <h3>{category}</h3>
          {
            categorizeRestaurants(data.restaurant.products)[category]
            .map(food => (
              <CardBurger
                name={food.name}
                price={food.price}
                photoUrl={food.photoUrl}
                description={food.description}
                key={food.id}
                id={food.id}
              />
            ))}
        </CardMenu>
      ))

  return (
    <GeralContainer>
      {arrayFoods ? (
        <MainContainer>
          {data.restaurant && (
            <CardRestaurant>
              <RestaurantPicture src={data.restaurant.logoUrl} />
              <h5>{data.restaurant.name}</h5>
              <p>{data.restaurant.category}</p>
              <p>
                <span>{data.restaurant.deliveryTime} min</span>
                <DeliverTaxSpan>R${data.restaurant.shipping}</DeliverTaxSpan>
              </p>
              <p>{data.restaurant.address}</p>
            </CardRestaurant>
          )}
          {arrayFoods}
        </MainContainer>
      ) : (
        <Loading />
      )}
    </GeralContainer>
  );
};

export default RestaurantPage;
