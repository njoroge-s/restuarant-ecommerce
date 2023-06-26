import { useDispatch } from "react-redux";

export const addtocart=(meals, quantity, varient)=>(dispatch, getState)=>{

    var cartItem ={
        name : meals.name, 
        _id : meals._id,
        image : meals.imageUrl,
        varient : varient,
        quantity : Number(quantity),
        prices : meals.prices,
        price : meals.prices[0][varient] * quantity

    }

    if(cartItem.quantity>10)
    {
        alert ("Maximum items is 10")
    }
    else{
        if(cartItem.quantity<=0)
        {
            dispatch({type: "DELETE_FROM_CART", payload:meals})
        }
        else{
            dispatch({type:"ADD_TO_CART", payload: cartItem})
    
        }
    }
        

    

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

export const deleteFromCart = (meals) => (dispatch, getState)=>{

    dispatch({type: "DELETE_FROM_CART", payload:meals})
    
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems))


}