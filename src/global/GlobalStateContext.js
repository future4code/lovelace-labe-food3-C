import React from "react";
import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


const GlobalStateContext = (props) => {

    const [maximumDeliveryTime, setMaximumDeliveryTime] = useState(0)
    const [waitingRestaurantName, setWaitingRestaurantName] = useState('')
    const [subtotalToWait, setSubtotalToAlert] = useState(0.0)

    const waitingDelivery = {maximumDeliveryTime, subtotalToWait, waitingRestaurantName}
    const setWaitingDelivery = (maximumDeliveryTime, subtotalToWait, waitingRestaurantName) => {
        setMaximumDeliveryTime(maximumDeliveryTime)
        setWaitingRestaurantName(waitingRestaurantName)
        setSubtotalToAlert(subtotalToWait)
    }

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        if(maximumDeliveryTime>0){
            setTimeout(() => {
                setMaximumDeliveryTime(0)
            }, maximumDeliveryTime*100) //<< trocar 100 por valor em 1000*60
        }
    }, [maximumDeliveryTime])

    const getProfile = () => {
        const token = localStorage.getItem("token")
        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(`${BASE_URL}/fourFoodA/profile`, headers)
        .then((res) => {
            setUserProfile(res.data.user)
        })
        .catch((err) => {
            console.log('erro get profile', err)
        })
    }

    const states = { waitingDelivery, userProfile }
    const setters = { setWaitingDelivery, setUserProfile }
    const requests = { getProfile }

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
