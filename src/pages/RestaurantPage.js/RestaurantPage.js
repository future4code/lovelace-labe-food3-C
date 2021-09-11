import React, {useContext} from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {
    MainContainer,
    HeaderContainer,
    CardRestaurant,
    RestaurantPicture,
    DeliverTaxSpan,
    CardMenu,
    GeralContainer
} from "./styled";
import {useHistory, useParams} from "react-router-dom";
import CardProducts from "../../components/CardProducts/CardProducts";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import categorizeRestaurants from "../../tools/categorizeRestaurants";
import GlobalContext from "../../global/GlobalContext";

const RestaurantPage = () => {
    useProtectedPage();
    const params = useParams();
    const [data] = useRequestData(`/fourFoodA/restaurants/${params.id}`, {});
    const {setters} = useContext(GlobalContext);

    const arrayFoods =
        data &&
        data.restaurant &&
        data.restaurant.products &&
        Object.keys(categorizeRestaurants(data.restaurant.products)).map((category) => (
            <CardMenu key={category}>
                <h3>{category}</h3>
                {categorizeRestaurants(data.restaurant.products)[category].map((food) => (
                    <CardProducts Food={food} infoRestaurant={data.restaurant}/>
                ))}
            </CardMenu>
        ));

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
