import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderAction";

export default function Checkout(subtotal){

    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
 
    return(
        <div>
            <StripeCheckout
            amount={subtotal * 100}
            shippingAddress
            token={tokenHandler}
            stripeKey="pk_test_51NLNoeFuShHkWGBYqtOx5KD0mpFpW5FaHHjrQnmDoxKp4txf3o4D7cvTdtQAqLlmh17r0Fhi6nblmpQrE5DzyJsF00RzNa8OXt"
            currency="KSH"
            >

                <button className="btn">Pay Now</button>

            </StripeCheckout>
        </div>
    );
}