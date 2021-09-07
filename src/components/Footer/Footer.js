import React from 'react'
import imgHome from "../../assets/images/homepage.svg"
import imgAvatar from "../../assets/images/avatar.svg"
import imgCart from "../../assets/images/shopping-cart.svg"

import imgHomeSelected from "../../assets/images/homepageSelected.svg"
import imgAvatarSelected from "../../assets/images/avatarSelected.svg"
import imgCartSelected from "../../assets/images/shopping-cartSelected.svg"

import { goToHome, goToProfile, goToCart } from "../../routes/coordinator"

import { StyledFooter, StyledMargin } from "./styled"
import { useHistory } from 'react-router'

export default function Footer(){
    const history = useHistory()

    let isHome=false
    let isCart=false
    let isProfile=false

    switch (history.location.pathname) {
        case '/home':
            isHome=true
            break;
        case '/cart':
            isCart=true
            break;
        case '/profile':
            isProfile=true
            break;
        default:
            break;
    }


    return (
        <>
            <StyledMargin />
            <StyledFooter>
                <button onClick={() => goToHome(history)}>
                    <img src={isHome? imgHomeSelected:imgHome} alt='home'/>
                </button>
                <button onClick={() => goToCart(history)}>
                    <img src={isCart? imgCartSelected:imgCart} alt='cart'/>
                </button>
                <button onClick={() => goToProfile(history)}>
                    <img src={isProfile? imgAvatarSelected:imgAvatar} alt='avatar'/>
                </button>
            </StyledFooter>
        </>
    );
}

