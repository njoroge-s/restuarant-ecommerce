const express = require("express");

const Meals = require("./models/mealsModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const mealsRoute = require("./routes/mealsRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");


app.use("/api/meals/", mealsRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", ordersRoute)

 app.get("/", (req, res) => {
    res.send("Server working");
 });

 app.get("/getmeals", (req, res) => {
    Meals.find({}, (err, docs) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
 });
 const port = process.env.PORT || 5000;

 app.listen(port, () => "Server running on port");