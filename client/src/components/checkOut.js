import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderAction";
import Loading from "../components/loading";
import Success from "../components/success";
import Error from "../components/error";

export default function Checkout(subtotal){

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading, error, success} = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
 
    return(
        <div>

            {loading && (<Loading/>)}
            {success && (<Success success='Your order was placed successfully'/>)}
            {error && (<Error error='Something went wrong'/>)}
                    

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