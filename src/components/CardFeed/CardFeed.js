import React from "react"
import { CardContainer, RestaurantPicture, ProductPriceAndTax} from "./styled"


const CardFeed = () => {

    return (
        <CardContainer>
            <div>
                <RestaurantPicture src="https://picsum.photos/200/300" />

            </div>
            <did>
                <h4>Vinil Butantã</h4>
                <ProductPriceAndTax>
                    <p>50 - 60 min </p>
                    <p>Frete R$6.00</p>
                </ProductPriceAndTax>
            </did>
        </CardContainer>
    )
}

export default CardFeed