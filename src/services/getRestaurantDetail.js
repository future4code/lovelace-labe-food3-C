import axios from "axios";
import {BASE_URL} from "../constants/urls";

export const getRestaurantDetail = (saveData, restaurantId, setIsLoading) => {
    const token = localStorage.getItem("token");

    const headers = {
        headers: {
            auth: token
        }
    };

    axios
        .get(`${BASE_URL}/fourFoodA/restaurants/${restaurantId}`, headers)
        .then((response) => {
            saveData(response.data.restaurant);
            setIsLoading(false);
        })
        .catch((err) => {
            if (err.response) {
                alert("Erro ao buscar restaurantes " + err.response.data.message);
            } else {
                alert("Ocorreu um erro no site");
            }
        });
};
