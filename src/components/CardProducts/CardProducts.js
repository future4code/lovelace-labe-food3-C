import React, {useState, useContext, useEffect} from "react";
import {CardFood, MiniPicture, TextCard, QuantityCard} from "./styled";
import CardModal from "./CardModal";
import GlobalContext from "../../global/GlobalContext";

const CardProducts = (props) => {
    const [showModal, setShowModal] = useState(false);
    const {states} = useContext(GlobalContext);

    const itemQuantity = states.addedProducts;

    const productQuantity = itemQuantity
        .filter((product) => {
            return product.food.id === props.Food.id;
        })
        .map((product) => {
            return product.quantity;
        });

    return (
        <CardFood>
            <div>
                <MiniPicture src={props.Food.photoUrl} />
            </div>

            <TextCard>
                <h4> {props.Food.name} </h4>

                <p>{props.Food.description}</p>

                <h5>
                    {props.Food.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}{" "}
                </h5>
            </TextCard>

            {productQuantity && !productQuantity[0] ? (
                <button onClick={() => setShowModal(true)}>
                    <span> Adicionar </span>
                </button>
            ) : (
                <button onClick={() => setShowModal(true)} style={{border: "1px solid #e8222e"}}>
                    <span style={{color: "#e8222e"}}>Alterar</span>
                </button>
            )}

            {productQuantity[0] ? <QuantityCard>{productQuantity[0]}</QuantityCard> : null}

            {showModal ? (
                <CardModal setShowModal={setShowModal} product={props.Food} infoRestaurant={props.infoRestaurant} />
            ) : null}
        </CardFood>
    );
};

export default CardProducts;
