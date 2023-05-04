const express = require('express')
const app = express()
require('dotenv').config()
const Port = process.env.PORT || process.env.PORT2
const bodyParser = require('body-parser')
const ejs = require('ejs');
const getSlash = require('./routes/dashboard.route');
const { renderPort, renderSlash } = require('./Controllers/budget.controller');
const mongoose = require('mongoose');
const URI = process.env.URI


mongoose.connect(URI)
.then(()=>{
    console.log('successfully connected')
})
.catch((err)=>{
    console.log(err);
})
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use('/', getSlash)



// app.get("/", getSlash)
app.listen(Port , renderPort)