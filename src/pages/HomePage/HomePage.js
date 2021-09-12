import React, { useContext, useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

//STYLES
import { StyledHomePage, StyledSearching } from "./styled";

//COMPONENTS
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import Footer from "../../components/Footer/Footer";
import CardFeed from "../../components/CardFeed/CardFeed";
import Loading from "../../components/Loading/Loading";

//HELPERS
import { getRestaurants } from "../../services/getRestaurants";
import CardWaitingDelivery from "../../components/CardWaitingDelivery/CardWaitingDelivery";
import GlobalContext from "../../global/GlobalContext";
import { goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router";

const HomePage = ({ setPageTitle }) => {
  const hasAuthorization = useProtectedPage();

  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isWriting, setIsWriting] = useState(false);
  const [restaurants, setRestaurants] = useState({});
  const history = useHistory()

  const { states, requests } = useContext(GlobalContext);

  
  useEffect(() => {
    if(hasAuthorization){
      if (Object.keys(restaurants).length === 0) {
        getRestaurants(setRestaurants, setIsLoading);
      }
      
      requests.getActiveOrder()
    }
    else if(hasAuthorization===false){
      goToLogin(history)
    }
    // eslint-disable-next-line
  }, [hasAuthorization])

  if (isLoading || !hasAuthorization)
    return (
      <StyledHomePage>
        <Loading />
      </StyledHomePage>
    );

  if (searchMode) {
    setPageTitle('Busca')
    return (
      <StyledHomePage>
        <SearchField
          setSearchMode={setSearchMode}
          restaurants={restaurants}
          setSelectedRestaurants={setSelectedRestaurants}
          setIsWriting={setIsWriting}
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
          <StyledSearching>
            {
              isWriting ?
                'Não encontramos :(' :
                'Busque por nome de restaurante'
            }
          </StyledSearching>
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
