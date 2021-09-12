import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router";
import GlobalContext from "../../global/GlobalContext";

//STYLES
import {Typography, Radio, RadioGroup, FormControlLabel, Button} from "@material-ui/core";
import {CardContainer, Frete, MainContainer, Payments, RestaurantAddress, SubTotal, UserAddress} from "./styled";


//COMPONENTS
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";

//HELPERS
import useProtectedPage from "../../hooks/useProtectedPage"

const CartPage = () => {
    useProtectedPage();
    const history = useHistory();
    const {states, requests} = useContext(GlobalContext);
    const [value, setValue] = useState("money");

    const product = states && states.addedProducts;

    const restaurantId = product.map((restaurant) => {
        return restaurant.restaurantId;
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const subtotal = product.reduce((acc, item) => {
        return acc + (item.food.price * item.quantity);
    }, 0);

    useEffect(() => {
        requests.getProfile();
        requests.getRestaurantDetail(restaurantId[0]);
        
        // eslint-disable-next-line
    }, []);


    return (
        <MainContainer>
            <UserAddress>
                <Typography style={{color: "#b8b8b8", fontSize: "18px"}}>Endereço de entrega</Typography>
                <Typography style={{color: "#000000", fontSize: "18px"}}>{states.userProfile.address}</Typography>
            </UserAddress>

            {product.length > 0 ? (
                <>
                    <RestaurantAddress>
                        <Typography color={"primary"} style={{fontSize: "16px", paddingBottom: "5px"}}>
                            {states.infoRestaurant && states.infoRestaurant.name}
                        </Typography>

                        <Typography style={{color: "#b8b8b8", fontSize: "16px", paddingBottom: "5px"}}>
                            {states.infoRestaurant && states.infoRestaurant.address}
                        </Typography>

                        <Typography style={{color: "#b8b8b8", fontSize: "16px"}}>
                            {states.infoRestaurant && states.infoRestaurant.deliveryTime} min
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
                        {states.infoRestaurant &&
                            states.infoRestaurant.shipping &&
                            states.infoRestaurant.shipping.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                    </Typography>
                ) : (
                    <Typography>Frete: R$ 00,00</Typography>
                )}
            </Frete>

            <SubTotal>
                <Typography>SUBTOTAL:</Typography>

                {product.length > 0 ? (
                    <Typography color={"primary"} style={{fontWeight: "500"}}>
                        {(subtotal + states.infoRestaurant.shipping).toLocaleString("pt-BR", {
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
                        value="creditcard"
                        control={<Radio color="primary" />}
                        label="Cartão de Crédito"
                    />
                </RadioGroup>

                {product.length > 0 ? (
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        style={{width: "100%"}}
                        onClick={() => requests.placeOrder(product, value, restaurantId[0], history, subtotal)}
                    >
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
