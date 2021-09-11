import React, {useContext} from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {useHistory} from "react-router-dom";
import {Typography, Radio, RadioGroup, FormControlLabel, Button} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import GlobalContext from "../../global/GlobalContext";
import {CardContainer, Frete, MainContainer, Payments, RestaurantAddress, SubTotal, UserAddress} from "./styled";

const CartPage = () => {
    useProtectedPage();
    const history = useHistory();
    const {states, setters, requests} = useContext(GlobalContext);
    const [value, setValue] = React.useState("money");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const product = states && states.addedProducts;

    console.log(product);

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
                            Bullguer Vila Madalena
                        </Typography>

                        <Typography style={{color: "#b8b8b8", fontSize: "16px", paddingBottom: "5px"}}>
                            R. Fradique Coutinho, 1136 - Vila Madalena
                        </Typography>

                        <Typography style={{color: "#b8b8b8", fontSize: "16px"}}>30 - 45 min</Typography>
                    </RestaurantAddress>

                    <CardContainer>
                        {/* {product.map(())} */}
                        <CardProduct 
                            // Name={}
                        />
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
                    <Typography>Frente: R$ 00,00</Typography>
                ) : (
                    <Typography>Frente: R$ 00,00</Typography>
                )}
            </Frete>

            <SubTotal>
                <Typography>SUBTOTAL:</Typography>

                {product.length > 0 ? (
                    product.map((product) => {
                        const subTotal = product.quantity * product.food.price;
                        return (
                            <Typography color={"primary"} style={{fontWeight: "500"}}>
                                {subTotal.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </Typography>
                        );
                    })
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
