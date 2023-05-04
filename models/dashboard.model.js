const mongoose = require('mongoose');

let budgetSchema = {
    budgetName: { type: String, required:true},
    price: { type: Number, required:true},
    date: { type: String , required:true}
}

let budgetModel = new mongoose.model('budget', budgetSchema)

module.exports = budgetModel