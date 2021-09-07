import React from 'react'
import { StyledHeader, StyledMargin } from "./styled"
import imgBackArrow from "../../assets/images/back.svg"

const Header = () => {


    return (
        <>
            <StyledMargin />
            <StyledHeader>
                {/* Onclick tem que ser um GoBack */}
                <button onClick={() => null}>
                    <img src={imgBackArrow} alt='botão para voltar'/>
                </button>
                <p>iFuture</p>
            
            </StyledHeader>
        </>
    )

}

export default Header




