import React from "react";
import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";


const GlobalStateContext = (props) => {

    const [maximumDeliveryTime, setMaximumDeliveryTime] = useState(0)

    useEffect(() => {
        if(maximumDeliveryTime>0){
            setTimeout(() => {
                setMaximumDeliveryTime(0)
            }, maximumDeliveryTime*100) //<< trocar 100 por valor em 1000*60
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
