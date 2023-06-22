import { Schema, model } from "mongoose";

const mealsSchema = Schema({
    name: {type: String, require},
    varients: [],
    prices:[],
    allergens:[],
    description: {type: String, require},
    imageUrl: {type: String, require},

}, {
    timeStramps:true,
})
const mealsModel = model("meals", mealsSchema)

export default mealsModel