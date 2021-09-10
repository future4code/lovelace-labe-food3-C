import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

//STYLES
import { StyledHomePage, StyledSearching } from "./styled";

//COMPONENTS
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import Footer from "../../components/Footer/Footer";
import CardFeed from "../../components/CardFeed/CardFeed";

//HELPERS
import { getRestaurants } from "../../services/getRestaurants";
import Loading from "../../components/Loading/Loading";
import CardWaitingDelivery from "../../components/CardWaitingDelivery/CardWaitingDelivery";
import GlobalContext from "../../global/GlobalContext";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [searchMode, setSearchMode] = useState(false);
  const [restaurants, setRestaurants] = useState({});
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { states, setters, requests } = useContext(GlobalContext);

  if (Object.keys(restaurants).length === 0) {
    getRestaurants(setRestaurants, setIsLoading);
  }

  if (isLoading)
    return (
      <StyledHomePage>
        <Loading />
      </StyledHomePage>
    );

  if (searchMode) {
    return (
      <StyledHomePage>
        <SearchField
          setSearchMode={setSearchMode}
          restaurants={restaurants}
          setSelectedRestaurants={setSelectedRestaurants}
        />
        {Object.keys(selectedRestaurants).length > 0 ? (
          <div>
            {selectedRestaurants.map((restaurant) => (
              <CardFeed
                key={restaurant.id}
                id={restaurant.id}
                description={restaurant.description}
                shipping={restaurant.shipping}
                address={restaurant.address}
                name={restaurant.name}
                logoUrl={restaurant.logoUrl}
                deliveryTime={restaurant.deliveryTime}
                category={restaurant.category}
              />
            ))}
          </div>
        ) : (
          <StyledSearching>Busque por nome de restaurante</StyledSearching>
        )}
      </StyledHomePage>
    );
  }

  return (
    <StyledHomePage>
      <SearchField setSearchMode={setSearchMode} />
      <TapPanel restaurants={restaurants} />
      <Footer />
      {states.waitingDelivery.maximumDeliveryTime > 0 && (
        <CardWaitingDelivery data={states.waitingDelivery} />
      )}
    </StyledHomePage>
  );
};

export default HomePage;
