import { Router } from "express";
const router = Router();
const stripe = require("stripe")("sk_test_51NLNoeFuShHkWGBYpcOvrhGmv2EeDXqE5cuZmdhe9jXJJYB8ERjbKWWy5DaPJl0jAs576Yqcfnx7TtnK098IOO8M00y0qiuNaH");
import { v4 as uuidv4 } from "uuid";
 import order, { find } from "../models/orderModel";

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

            const neworder = new order ({
                name: currentUser.name,
                email: currentUser.email,
                userId: currentUser._id,
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
        return res.status(400).json({message: "Something went wrong"});
    }

});

router.post ("/getuserorders", async(req, res) =>{

    const {userId} = req.body
    try {
        const orders = await find({userId: userId}).sort({_id: -1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message:'Something went wrong'});
    }

});
export default router