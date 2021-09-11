import React from "react";
import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";
import {BASE_URL} from "../constants/urls";
import { goToHome } from '../routes/coordinator';

const GlobalStateContext = (props) => {
    const [maximumDeliveryTime, setMaximumDeliveryTime] = useState(0);
    const [waitingRestaurantName, setWaitingRestaurantName] = useState("");
    const [subtotalToWait, setSubtotalToAlert] = useState(0.0);
    const [addedProducts, setAddedProducts] = useState([]);
    const [userProfile, setUserProfile] = useState({});
    const [infoRestaurant, setInfoRestaurant] = useState({});

    const waitingDelivery = {
        maximumDeliveryTime,
        subtotalToWait,
        waitingRestaurantName
    };

    const setWaitingDelivery = (maximumDeliveryTime, subtotalToWait, waitingRestaurantName) => {
        setMaximumDeliveryTime(maximumDeliveryTime);
        setWaitingRestaurantName(waitingRestaurantName);
        setSubtotalToAlert(subtotalToWait);
    };

    const getActiveOrder = () => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                auth: token
            }
        };
        axios
            .get(`${BASE_URL}/fourFoodA/active-order`, headers)
            .then((response) => {
                const order = response.data.order;

                if (order && order !== null) {
                    const dt = Number(order.expiresAt) - Number(order.createdAt);
                    setWaitingDelivery(dt, order.totalPrice, order.restaurantName);
                }
            })
            .catch((err) => {
                if (err.response) {
                    alert(err.response.data.message);
                } else {
                    alert("Erro ao buscar o alerta de pedido");
                }
            });
    };

    useEffect(() => {
        if (maximumDeliveryTime > 0) {
            setTimeout(() => {
                setMaximumDeliveryTime(0);
            }, maximumDeliveryTime / 100);
        }
    }, [maximumDeliveryTime]);

    const getProfile = () => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                auth: token
            }
        };
        axios
            .get(`${BASE_URL}/fourFoodA/profile`, headers)
            .then((res) => {
                setUserProfile(res.data.user);
            })
            .catch((err) => {
                if (err.response) {
                    alert(err.response.data.message);
                } else {
                    alert("Erro ao buscar perfil");
                }
            });
    };

    const getRestaurantDetail = (restaurantId) => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                auth: token
            }
        };

        if (restaurantId === undefined) {
            return false;
        } else {
            axios
                .get(`${BASE_URL}/fourFoodA/restaurants/${restaurantId}`, headers)
                .then((res) => {
                    setInfoRestaurant(res.data.restaurant);
                })
                .catch((err) => {
                    if (err.response) {
                        alert(err.response.data.message);
                    } else {
                        alert("Erro! Restaurante não encontrado");
                    }
                });
        }
    };

    const placeOrder = (products, payment, restaurantId, history) => {
        const token = localStorage.getItem("token");

        const headers = {
            headers: {
                auth: token
            }
        };

        const body = {
            products: products.map((product) => {
                return {
                    id: product.food.id,
                    quantity: product.quantity
                };
            }),
            paymentMethod: payment
        };

        axios.post(`${BASE_URL}/fourFoodA/restaurants/${restaurantId}/order`, body, headers)
        .then((response) => {
            alert("Pedido realizado com sucesso!")
            setInfoRestaurant({});
            setAddedProducts([])
            goToHome(history)
        })
        .catch((error) => {
             if (error.response) {
                 alert(error.response.data.message);
             } else {
                 alert("Erro ao realizar pedido");
             }
        });
    };

    const removeFromCart = (productId) => {
        
    };

    const states = {waitingDelivery, userProfile, addedProducts, infoRestaurant};
    const setters = {setWaitingDelivery, setUserProfile, setAddedProducts, setInfoRestaurant, removeFromCart};
    const requests = {getProfile, getActiveOrder, getRestaurantDetail, placeOrder};

    return <GlobalContext.Provider value={{states, setters, requests}}>{props.children}</GlobalContext.Provider>;
};

export default GlobalStateContext;
