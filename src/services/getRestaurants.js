import axios from "axios";
import {BASE_URL, HEADERS} from "../constants/urls";
import categorizeRestaurants from "../tools/categorizeRestaurants"

export const getRestaurants = (saveData, setIsLoading) => {
    axios.get(`${BASE_URL}/fourFoodA/restaurants`, HEADERS)
        .then((response) => {
            saveData(categorizeRestaurants(response.data.restaurants))
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
}