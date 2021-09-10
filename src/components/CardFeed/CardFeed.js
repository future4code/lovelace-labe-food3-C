import React from "react";
import { useHistory } from "react-router";
import { CardContainer, RestaurantPicture, ProductPriceAndTax } from "./styled";
import { goToRestaurantDetail } from "../../routes/coordinator";

const CardFeed = (props) => {
  const shippingFloat = parseFloat(props.shipping);
  const history = useHistory();

  return (
    <CardContainer onClick={() => goToRestaurantDetail(history, props.id)}>
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
