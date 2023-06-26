const express = require('express');
const Meals = require("../models/mealsModel");

const router = express.Router();

router.get("/getallmeals", async(req, res)=>{

    try{
        const meals = await Meals.find({})
        res.send(meals)
    }catch(error){
        return res.status(400).json({message: error})
    }

});

module.exports = router;