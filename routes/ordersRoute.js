const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_51NLNoeFuShHkWGBYpcOvrhGmv2EeDXqE5cuZmdhe9jXJJYB8ERjbKWWy5DaPJl0jAs576Yqcfnx7TtnK098IOO8M00y0qiuNaH");
const { v4 : uuidv4 } = require("uuid") ;
const  order = require("../models/orderModel");

router.post('/placeorder', async(req, res) =>{

    const {token, subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency: 'ksh',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if(payment)
        {

            const neworder = new order ({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id
            })

            neworder.save()
            
            
            res.send("Order placed successfully")
        }
        else{
            res.send("Payment failed")
        }
    } catch (error) {
        return res.status(400).json({message: "Something went wrong " + error});
    }

});

router.post ("/getuserorders", async(req, res) =>{

    const {userid} = req.body
    try {
        const orders = await find({userid: userid}).sort({_id: -1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message:'Something went wrong'});
    }

});
module.exports = router