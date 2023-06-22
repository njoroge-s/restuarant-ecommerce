
import express, { json } from "express";
import meals from "./models/mealsModel";
import {find} from "./models/mealsModel";
import mealsRoute from "./routes/mealsRoute";
import userRoute from "./routes/userRoute";
import ordersRoute from "./routes/ordersRoute";


import db from "./db";
const app = express();

app.use(json());



app.use("/api/meals/", mealsRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", ordersRoute)

 app.get("/", (req, res) => {
    res.send("Server working");
 });

 app.get("/getmeals", (req, res) => {
    find({}, (docs) =>{
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