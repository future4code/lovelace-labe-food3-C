import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import useRequestData from "../../hooks/useRequestData";

//STYLES
import { StyledHomePage } from "./styled";

//COMPONENTS
import SearchField from "../../components/SearchField/SearchField";
import TapPanel from "../../components/TapPanel/TapPanel";
import Footer from "../../components/Footer/Footer";
import CardFeed from "../../components/CardFeed/CardFeed";

//HELPERS
import { getRestaurants } from "../../services/getRestaurants";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  // const [data] = useRequestData(`/fourFoodA/restaurants`, {});
  const [searchMode, setSearchMode] = useState(false);
  const [restaurants, setRestaurants] = useState({});
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  // console.log(data.restaurants)

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
          <p>Busque por nome de restaurante</p>
        )}
      </StyledHomePage>
    );
  }

  if (Object.keys(restaurants).length === 0) {
    getRestaurants((data) => setRestaurants(data));
  }

  return (
    <StyledHomePage>
      <SearchField setSearchMode={setSearchMode} />
      <TapPanel restaurants={restaurants} />
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
