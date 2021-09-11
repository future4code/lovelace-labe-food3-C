import React, {useContext, useState} from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {Typography, Radio, RadioGroup, FormControlLabel, Button} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import GlobalContext from "../../global/GlobalContext";
import {CardContainer, Frete, MainContainer, Payments, RestaurantAddress, SubTotal, UserAddress} from "./styled";
import useRequestData from "../../hooks/useRequestData";

const CartPage = () => {
    useProtectedPage();
    const {states, requests} = useContext(GlobalContext);
    const [value, setValue] = useState("money");

    const product = states && states.addedProducts;

    const restaurantId = product.map((restaurant) => {
        return restaurant.restaurantId;
    });

    const [data] = useRequestData(`/fourFoodA/restaurants/${restaurantId[0]}`, {});

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const totalPrice = product.reduce((acc, item) => {
        return acc + item.food.price * item.quantity;
    }, 0);


    return (
        <MainContainer>
            <UserAddress>
                <Typography style={{color: "#b8b8b8", fontSize: "18px"}}>Endereço de entrega</Typography>
                <Typography style={{color: "#000000", fontSize: "18px"}}>Rua Alessandra Vieira, 42</Typography>
            </UserAddress>

            {product.length > 0 ? (
                <>
                    <RestaurantAddress>
                        <Typography color={"primary"} style={{fontSize: "16px", paddingBottom: "5px"}}>
                            {data && data.restaurant && data.restaurant.name}
                        </Typography>

                        <Typography style={{color: "#b8b8b8", fontSize: "16px", paddingBottom: "5px"}}>
                            {data && data.restaurant && data.restaurant.address}
                        </Typography>

                        <Typography style={{color: "#b8b8b8", fontSize: "16px"}}>
                            {data && data.restaurant && data.restaurant.deliveryTime} min
                        </Typography>
                    </RestaurantAddress>

                    <CardContainer>
                        {product.map((product) => {
                            return (
                                <CardProduct
                                    Id={product.food.id}
                                    Name={product.food.name}
                                    Description={product.food.description}
                                    Quantity={product.quantity}
                                    Price={product.food.price}
                                    Photo={product.food.photoUrl}
                                />
                            );
                        })}
                    </CardContainer>
                </>
            ) : (
                <Typography
                    style={{
                        color: "#000000",
                        fontSize: "18px",
                        textAlign: "center",
                        fontWeight: "700",
                        margin: "20px auto"
                    }}
                >
                    Carrinho Vazio
                </Typography>
            )}

            <Frete>
                {product.length > 0 ? (
                    <Typography>
                        Frente:{" "}
                        {data &&
                                    data.restaurant &&
                                    data.restaurant.shipping.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                    </Typography>
                ) : (
                    <Typography>Frente: R$ 00,00</Typography>
                )}
            </Frete>

            <SubTotal>
                <Typography>SUBTOTAL:</Typography>

                {product.length > 0 ? (
                    <Typography color={"primary"} style={{fontWeight: "500"}}>
                        {totalPrice.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </Typography>
                ) : (
                    <Typography color={"primary"} style={{fontWeight: "500"}}>
                        R$ 00,00
                    </Typography>
                )}
            </SubTotal>

            <Payments>
                <Typography style={{borderBottom: "1px solid #000", width: "100%", marginTop: "20px"}}>
                    Formas de Pagamento
                </Typography>

                <RadioGroup aria-label="payment" name="payment" value={value} onChange={handleChange}>
                    <FormControlLabel value="money" control={<Radio color="primary" />} label="Dinheiro" />
                    <FormControlLabel
                        value="creditCard"
                        control={<Radio color="primary" />}
                        label="Cartão de Crédito"
                    />
                </RadioGroup>

                {product.length > 0 ? (
                    <Button variant={"contained"} color={"primary"} style={{width: "100%"}}>
                        Confirmar
                    </Button>
                ) : (
                    <Button variant={"contained"} color={"primary"} style={{width: "100%"}} disabled>
                        Confirmar
                    </Button>
                )}
            </Payments>

            <Footer />
        </MainContainer>
    );
};

export default CartPage;
