const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_51NLNoeFuShHkWGBYpcOvrhGmv2EeDXqE5cuZmdhe9jXJJYB8ERjbKWWy5DaPJl0jAs576Yqcfnx7TtnK098IOO8M00y0qiuNaH");
const { v4: uuidv4 } = require("uuid");

router.post('/placeorder', async(req, res) =>{

    const {token, subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency: 'KSH',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if(payment)
        {
            res.send("Payment was successful")
        }
        else{
            res.send("Payment failed")
        }
    } catch (error) {
        return res.status(400).json({message: "Something went wrong"});
    }

});
module.exports=router