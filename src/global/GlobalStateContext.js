import React from "react";
import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";


const GlobalStateContext = (props) => {

    const [maximumDeliveryTime, setMaximumDeliveryTime] = useState(0)

    useEffect(() => {
        if(maximumDeliveryTime>0){
            setTimeout(() => {
                setMaximumDeliveryTime(0)
            }, 5000) //<< trocar 5000 por maximumDeliveryTime
        }
    }, [maximumDeliveryTime])

    const states = { maximumDeliveryTime }
    const setters = { setMaximumDeliveryTime }
    const requests = {}

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
