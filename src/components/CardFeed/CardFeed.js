import React from "react";
import { CardContainer, RestaurantPicture, ProductPriceAndTax } from "./styled";

const CardFeed = (props) => {
  return (
    <CardContainer>
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
