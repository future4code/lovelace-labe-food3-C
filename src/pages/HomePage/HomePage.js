import React from "react"
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import { StyledHomePage } from "./styled";

import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";

const HomePage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <StyledHomePage>
        <SearchField />
        <TapPanel />
        <div>Home</div>
      </StyledHomePage>
    )
}

export default HomePage