import React from "react";
import {useHistory} from "react-router-dom";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import useRequestData from "../../hooks/useRequestData";

//STYLES
import {StyledHomePage} from "./styled";

//COMPONENTS
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import CardFeed from "../../components/CardFeed/CardFeed";
import Footer from "../../components/Footer/Footer";


const HomePage = () => {
    useProtectedPage();
    const history = useHistory();

    const [data, setData] = useRequestData(`/fourFoodA/restaurants`, {});

    const restaurants = {
        tipo1: [
            {name: "restaurante1", category: "tipo1"},
            {name: "restaurante2", category: "tipo1"},
            {name: "restaurante3", category: "tipo1"},
        ],
        tipo2: [
            {name: "restaurante4", category: "tipo2"},
            {name: "restaurante5", category: "tipo2"},
            {name: "restaurante6", category: "tipo2"},
            {name: "restaurante7", category: "tipo2"},
        ],
        tipo3: [
            {name: "restaurante8", category: "tipo3"},
            {name: "restaurante9", category: "tipo3"},
            {name: "restaurante10", category: "tipo3"},
            {name: "restaurante11", category: "tipo3"},
        ],
        tipo4: [
            {name: "restaurante1", category: "tipo1"},
            {name: "restaurante2", category: "tipo1"},
            {name: "restaurante3", category: "tipo1"},
        ],
        tipo5: [
            {name: "restaurante4", category: "tipo2"},
            {name: "restaurante5", category: "tipo2"},
            {name: "restaurante6", category: "tipo2"},
            {name: "restaurante7", category: "tipo2"},
        ],
        tipo6: [
            {name: "restaurante8", category: "tipo3"},
            {name: "restaurante9", category: "tipo3"},
            {name: "restaurante10", category: "tipo3"},
            {name: "restaurante11", category: "tipo3"},
        ],
        tipo7: [
            {name: "restaurante1", category: "tipo1"},
            {name: "restaurante2", category: "tipo1"},
            {name: "restaurante3", category: "tipo1"},
        ],
        tipo8: [
            {name: "restaurante4", category: "tipo2"},
            {name: "restaurante5", category: "tipo2"},
            {name: "restaurante6", category: "tipo2"},
            {name: "restaurante7", category: "tipo2"},
        ],
        tipo9: [
            {name: "restaurante8", category: "tipo3"},
            {name: "restaurante9", category: "tipo3"},
            {name: "restaurante10", category: "tipo3"},
            {name: "restaurante11", category: "tipo3"},
        ],
    }

    return (
        <StyledHomePage>
            <SearchField/>
            <TapPanel restaurants={restaurants}/>
            <CardFeed/>
            <Footer/>
        </StyledHomePage>
    )
}

export default HomePage