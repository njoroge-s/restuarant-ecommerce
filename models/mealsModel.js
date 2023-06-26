const mongoose = require("mongoose");

const mealsSchema = mongoose.Schema({
    name: {type: String, require},
    varients: [],
    prices:[],
    allergens:[],
    description: {type: String, require},
    imageUrl: {type: String, require},

}, {
    timeStamps:true,
})
const mealsModel = mongoose.model('meals', mealsSchema)

module.exports = mealsModel