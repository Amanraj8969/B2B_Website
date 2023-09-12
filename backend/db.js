const mongoose=require("mongoose")

// require('dotenv').config()

const connection=mongoose.connect("mongodb+srv://aman:12345@cluster0.trvgrs8.mongodb.net/?retryWrites=true&w=majority")

module.exports=connection