import React from "react";
import { CardContainer, RestaurantPicture, ProductPriceAndTax } from "./styled";

const CardFeed = (props) => {
  const shippingFloat = parseFloat(props.shipping);

  return (
    <CardContainer>
      <div>
        <RestaurantPicture src={props.logoUrl} />
      </div>
      <did>
        <h4>{props.name}</h4>
        <ProductPriceAndTax>
          <p>{props.deliveryTime} min</p>
          {shippingFloat !== 0 ? (
            <p>R${props.shipping},00</p>
          ) : (
            <p>Frete Grátis</p>
          )}
        </ProductPriceAndTax>
      </did>
    </CardContainer>
  );
};

export default CardFeed;
