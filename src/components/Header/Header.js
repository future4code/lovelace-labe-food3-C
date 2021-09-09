import React from 'react'
import { StyledHeader, StyledMargin } from "./styled"
import imgBackArrow from "../../assets/images/back.svg"
import { useHistory } from 'react-router'

const Header = () => {
    const history = useHistory()
    return (
        <>
            <StyledMargin />
            <StyledHeader>
                {/* Onclick tem que ser um GoBack */}
                <button onClick={() => history.goBack()}>
                    <img src={imgBackArrow} alt='botão para voltar'/>
                </button>
                <p>iFuture</p>
            
            </StyledHeader>
        </>
    )

}

export default Header




