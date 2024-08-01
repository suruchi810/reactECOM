const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } =
      action.payload;

    let existingProduct =
      state.cart.find(
        (item) => item.id === id + color
      );

    if (existingProduct) {
      let updatedProduct =
        state.cart.map((currItem) => {
          if (
            currItem.id ==
            id + color
          ) {
            let newAmount =
              currItem.amount + amount;
              if(newAmount>=currItem.max){
                newAmount = currItem.max;
              }
            return {
              ...currItem,
              amount: newAmount,
            };
          } else {
            return currItem;
          }
        });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        image: product.image[0].url,
        name: product.name,
        color,
        amount,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [
          ...state.cart,
          cartProduct,
        ],
      };
    }
  }

  if(action.type==="DECREASE_ITEM"){
    let updatedProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let newAmount = currItem.amount - 1;
        if(newAmount<=0){
          newAmount = 0;
        }
        return {
         ...currItem,
          amount: newAmount,
        };
      } else {
        return currItem;
      }
    });
    return {
     ...state,
      cart: updatedProduct,
    };
  }

  if(action.type === "INCREASE_ITEM"){
    let updatedProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let newAmount = currItem.amount + 1;
        if(newAmount>=currItem.max){
          newAmount = currItem.max;
        }
        return {
         ...currItem,
          amount: newAmount,
        };
      } else {
        return currItem;
      }
    });
    return {
     ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) =>
        curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if(action.type=="CART_TOTAL_ITEM"){
    let totalItem = state.cart.reduce((acc,currItem)=>{
      let {amount} = currItem;
      acc = acc+amount;
      return acc;
    }, 0);
    return {
      ...state,
      total_item: totalItem,
    }
  }

  return state;
};
export default cartReducer;
