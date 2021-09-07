import React from 'react'
import imgHome from "../../assets/images/homepage.svg"
import imgAvatar from "../../assets/images/avatar.svg"
import imgCart from "../../assets/images/shopping-cart.svg"

import imgHomeSelected from "../../assets/images/homepageSelected.svg"
import imgAvatarSelected from "../../assets/images/avatarSelected.svg"
import imgCartSelected from "../../assets/images/shopping-cartSelected.svg"

import { StyledFooter, StyledMargin } from "./styled"

export default function Footer({isHome=false, isCart=false, isProfile=false}){
    return (
        <>
            <StyledMargin />
            <StyledFooter>
                <button>
                    <img src={isHome? imgHomeSelected:imgHome} alt='home'/>
                </button>
                <button>
                    <img src={isCart? imgCartSelected:imgCart} alt='cart'/>
                </button>
                <button>
                    <img src={isProfile? imgAvatarSelected:imgAvatar} alt='avatar'/>
                </button>
            </StyledFooter>
        </>
    );
}

