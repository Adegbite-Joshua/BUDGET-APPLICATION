const mongoose = require('mongoose');
const budgetModel = require('../models/dashboard.model');
const budgetSchema = require('../models/dashboard.model');
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))


const renderPort = (req, res)=>{
    console.log(`Port started`)
    // res.render('dashboard')
}
const renderSlash = (req,res)=>{
    budgetModel.find()
    .then((resp)=>{
        res.render('dashboard', {message: '', budgets: resp })
    })
}
    
const postBudget =(req, res)=>{
    let form = budgetModel(req.body)
    form.save()
    .then(()=>{
        budgetModel.find()
        .then((resp)=>{
            res.render('dashboard', {message: 'Budget saved successfully', budgets: resp })
        })
    })
    .catch(()=>{
        budgetModel.find()
        .then((resp)=>{
            res.render('dashboard', {message: 'An error occured while svaing your Budget', budgets: resp })
        })
    })
}

module.exports = {renderPort, renderSlash, postBudget}