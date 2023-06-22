import Router from "express";
import mongoose from "mongoose";
import meals from "../models/mealsModel";

const router = Router();

router.get("/getallmeals", async(req, res)=>{

    try{
        const meals = await meals.find({})
        res.send(meals)
    }catch(error){
        return res.status(400).json({message: error})
    }

})
export default router;