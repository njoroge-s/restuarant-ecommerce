import mongoose, { connect, connection } from "mongoose";

var mongoURL = 'mongodb+srv://Admin:Password1@cluster0.eaudesb.mongodb.net/ray-restuarant'

connect(mongoURL, {useUnifiedTopology:true, useUrlParser:true})

var db = connection

db.on("connected", ()=>{
    console.log("Datadase connected successfully");
})

db.on("error", ()=>{
    console.log("Connection unsuccessful");
})

export default mongoose