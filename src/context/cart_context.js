import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";
const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("thapaCart");
    if(newCartData == []){
        return [];
    }else{
        return JSON.parse(newCartData);
    }
}

const initialState = {
    // cart: [],
    cart :getLocalCartData(),
    total_item: 0,
    total_price: 0,
    shiping_fee: 90000,
};

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) =>{
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
    };

    const setDecrease = (id) => {
        dispatch({type: "DECREASE_ITEM", payload: id})
    }

    const setIncrease = (id) => {
        dispatch({type: "INCREASE_ITEM", payload: id})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"})
        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext}