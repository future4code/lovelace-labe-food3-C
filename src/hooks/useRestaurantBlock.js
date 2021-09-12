import {useHistory} from "react-router-dom";
import {useContext, useLayoutEffect} from "react";
import {goToCart} from "../routes/coordinator";
import GlobalContext from "../global/GlobalContext";

const useRestaurantBlock = () => {
    const history = useHistory();
    const {states} = useContext(GlobalContext);
    
    useLayoutEffect(() => {
        if (states.addedProducts && states.addedProducts.length > 0) {
            alert("Finalize sua compra para fazer novos pedidos em outros restaurantes!");
            goToCart(history);
        }

        // eslint-disable-next-line
    }, [history]);
};

export default useRestaurantBlock;
