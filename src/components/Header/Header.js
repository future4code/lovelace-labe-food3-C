import React from 'react'
import { StyledHeader, StyledMargin } from "./styled"
import imgBackArrow from "../../assets/images/back.svg"
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'

const Header = ({pageTitle="", setPageTitle}) => {
    const history = useHistory()
    const params = useParams()

    let canGoBack = true

    switch (history.location.pathname) {
        case '/home':
            setPageTitle("iFuture")
            canGoBack = false
            break

        case '/signup':
            setPageTitle("")
            break

        case `/restaurant/${params.id}`:
            setPageTitle("Restaurante")
            break

        case '/profile':
            setPageTitle("Meu Perfil")
            break

        case '/profile/edit/address':
            setPageTitle("Meu Endereço")
            break

        case '/profile/edit/user':
            setPageTitle("Editar")
            break

        case '/cart':
            setPageTitle("Meu carrinho")
            break

        default:
            setPageTitle("iFuture")
            break

    }

    return (
        <>
            <StyledMargin />
            <StyledHeader>
                {canGoBack && <button onClick={() => history.goBack()}>
                    <img src={imgBackArrow} alt='botão para voltar'/>
                </button>}
                <p>{pageTitle}</p>
            </StyledHeader>
        </>
    )
}

export default Header




