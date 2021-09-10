import React from "react";
import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalStateContext = (props) => {
  const [maximumDeliveryTime, setMaximumDeliveryTime] = useState(0);
  const [waitingRestaurantName, setWaitingRestaurantName] = useState("");
  const [subtotalToWait, setSubtotalToAlert] = useState(0.0);
  const [addedProducts, setAddedProducts] = useState([]);

  const waitingDelivery = {
    maximumDeliveryTime,
    subtotalToWait,
    waitingRestaurantName,
  };
  const setWaitingDelivery = (
    maximumDeliveryTime,
    subtotalToWait,
    waitingRestaurantName
  ) => {
    setMaximumDeliveryTime(maximumDeliveryTime);
    setWaitingRestaurantName(waitingRestaurantName);
    setSubtotalToAlert(subtotalToWait);
  };
  const getActiveOrder = () => {
    const token = localStorage.getItem("token")
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.get(`${BASE_URL}/fourFoodA/active-order`, headers)
      .then((response) => {
        const order = response.data.order
        
        if (order && order !== null) {
          const dt = Number(order.expiresAt) - Number(order.createdAt)
          setWaitingDelivery(dt, order.totalPrice, order.restaurantName)
        }
      })
      .catch((err) => {

        if(err.response){
          alert(err.response.data.message)
        }
        else {
          alert('Erro ao buscar o alerta de pedido')
        }
      })
  }

  const [userProfile, setUserProfile] = useState({});

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
        auth: token,
      },
    };
    axios
      .get(`${BASE_URL}/fourFoodA/profile`, headers)
      .then((res) => {
        setUserProfile(res.data.user);
      })
      .catch((err) => {

        if(err.response){
          alert(err.response.data.message)
        }
        else{
          alert('Erro ao buscar perfil')
        }
      });
  };

  const states = { waitingDelivery, userProfile, addedProducts };
  const setters = { setWaitingDelivery, setUserProfile, setAddedProducts };
  const requests = { getProfile, getActiveOrder };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
