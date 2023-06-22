 import { Schema, model } from "mongoose";


 const userSchema = Schema({
    name : {type:String, require},
    email : {type: String, require},
    password : {type: String, require},
    isAdmin : {type: Boolean, require, default:false}
 } , {
    timestamps: true,
 })

 export default model('users', userSchema)