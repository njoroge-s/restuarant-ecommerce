import { useDispatch } from "react-redux"

export const addtocart=(meals, quantity, varient)=>(dispatch, getState)=>{

    var cartItem ={
        name : meals.name, 
        _id : meals._id,
        image : meals.imageUrl,
        varient : varient,
        quantity : quantity,
        prices : meals.prices,
        price : meals.prices[0][varient] * quantity

    }

    dispatch({type:"ADD_TO_CART", payload: cartItem})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

export const deleteFromCart = (meals) => dispatch=>{

    dispatch({type: "DELETE_FROM_CART", payload:meals})

}