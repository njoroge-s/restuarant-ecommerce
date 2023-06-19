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


    localStorage.setItem("cartItems", )
}