import React from "react";
import { useHistory } from "react-router";
import { CardContainer, RestaurantPicture, ProductPriceAndTax } from "./styled";
import { goToRestaurantDetail } from '../../routes/coordinator'

const CardFeed = (props) => {
  const history = useHistory()

  return (
    <CardContainer
      onClick={() => goToRestaurantDetail(history, props.id)}
    >
      <div>
        <RestaurantPicture src={props.logoUrl} />
      </div>
      <did>
        <h4>{props.name}</h4>
        <ProductPriceAndTax>
          <p>{props.deliveryTime}</p>
          <p>{props.shipping}</p>
        </ProductPriceAndTax>
      </did>
    </CardContainer>
  );
};

export default CardFeed;
