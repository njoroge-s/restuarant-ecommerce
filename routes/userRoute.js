const express = require("express");
const user =require("../models/userModel");
const router = express.Router();

router.post("/register", async(req, res) => {

    const {name, email, password} = req.body

    const newUser = new user ({name, email, password})

    try {
        newUser.save()
        res.send('User registered successfully')
    }  catch(error){
        return res.status(400).json({message: error});
    }
});

router.post("/login", async(req, res) => {

    const {email, pass} = req.body

    try {

        const user = await user.find({email, password})
        
        if(user.length > 0)
        {

            const currentUser = {
                name : user[0].name,
                email : user[0].email,
                isAdmin : user[0].isAdmin,
                _id : user[0],_id
            }
            res.send(currentUser);
        }
        else{
            
            return res.status(400).json({message: 'user login failed'});
        }
    } catch(error){
        
        return res.status(400).json({message: 'something went wrong'});
    }
});

module.exports = router