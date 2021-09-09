import React from 'react'
import { StyledHeader, StyledMargin } from "./styled"
import imgBackArrow from "../../assets/images/back.svg"
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    const params = useParams()

    let headerText = ""

    switch (history.location.pathname) {
        case '/home':
            headerText = "iFuture"
            break

        case '/signup':
            headerText = ""
            break

        case `/restaurant/${params.id}`:
            headerText = "Restaurante"
            break

        case '/profile':
            headerText = "Meu Perfil"
            break

        case '/profile/edit/address':
            headerText = "Meu Endereço"
            break

        case '/profile/edit/user':
            headerText = "Editar"
            break

        case '/cart':
            headerText = "Meu carrinho"
            break

        default:
            headerText = "iFuture"
            break

    }

    return (
        <>
            <StyledMargin />
            <StyledHeader>
                
                <button onClick={() => history.goBack()}>
                    <img src={imgBackArrow} alt='botão para voltar'/>
                </button>
                <p>{headerText}</p>
            
            </StyledHeader>
        </>
    )
}

export default Header




