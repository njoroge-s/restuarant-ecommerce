import { Router } from "express";
import { models } from "mongoose";
const  meals = require("../models/mealsModel")

const router = Router();

router.get("/getallmeals", async(req, res)=>{

    try{
        const meals = await meals.find({})
        res.send(meals)
    }catch(error){
        return res.status(400).json({message: error})
    }

})
module.exports = router;