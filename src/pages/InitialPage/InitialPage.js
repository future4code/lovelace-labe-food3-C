import React from "react"
import {useHistory} from "react-router-dom";

//STYLES
import styled from "styled-components";
import logo from "../../assets/images/logo-future-eats.svg"
import {Zoom} from "@material-ui/core";
import {goToLogin} from "../../routes/coordinator";

export const MainContainer = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #e8222e;
`

export const Logo = styled.img`
  width: 50%;
`

const InitialPage = () => {
    const history = useHistory()

    setTimeout(()=> goToLogin(history), 3000)

    return (
        <MainContainer>
            <Zoom in style={{transitionDelay: logo ? '1000ms' : '0ms'}}>
                <Logo src={logo} alt={"logo"}/>
            </Zoom>
        </MainContainer>
    )
}

export default InitialPage