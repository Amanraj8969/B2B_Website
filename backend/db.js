const mongoose=require("mongoose")

// require('dotenv').config()

const connection=mongoose.connect("{enter your mongo url}")

module.exports=connection
