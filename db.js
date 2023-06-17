import mongoose from "mongoose";

var mongoURL = 'mongodb+srv://Admin:Password1@cluster0.eaudesb.mongodb.net/ray-restuarant'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useUrlParser:true})

var db = mongoose.connection

db.on("connected", ()=>{
    console.log("Datadase connected successfully");
})

db.on("error", ()=>{
    console.log("Connection unsuccessful");
})

module.exports = mongoose