import axios from "axios";
import {BASE_URL, HEADERS} from "../constants/urls";
import categorizeRestaurants from "../tools/categorizeRestaurants"

export const getRestaurants = (saveData) => {
    axios.get(`${BASE_URL}/fourFoodA/restaurants`, HEADERS)
        .then((response) => {
            saveData(categorizeRestaurants(response.data.restaurants))

        })
        .catch((err) => {

            console.log(err)
        })
}