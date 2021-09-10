import axios from "axios";
import {BASE_URL, HEADERS} from "../constants/urls";
import categorizeRestaurants from "../tools/categorizeRestaurants"

export const getRestaurants = (saveData, setIsLoading) => {
    const token = localStorage.getItem("token")
    const headers = {
        headers: {
            auth: token
        }
    }
    axios.get(`${BASE_URL}/fourFoodA/restaurants`, headers)
        .then((response) => {
            saveData(categorizeRestaurants(response.data.restaurants))
            setIsLoading(false)
        })
        .catch((err) => {
            if(err.response){
                alert(err.response.data.message)
            }
            else{
                alert('Ocorreu um erro no site')
            }
        })
}