
import express from "express";
const meals = require("./models/mealsModel")

const db = require("./db")
const app = express();

app.use(express.json());

const mealsRoute = require("./routes/mealsRoute")
const userRoute = require("./routes/userRoute")
const ordersRoute = require("./routes/ordersRoute")

app.use("/api/meals/", mealsRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", ordersRoute)

 app.get("/", (req, res) => {
    res.send("Server working");
 });

 app.get("/getmeals", (req, res) => {
    meals.find({}, (docs) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
 });
 const port = process.env.PORT || 5000;

 app.listen(port, () => "Server running on port")