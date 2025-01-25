// Shree Ganeshay namah 

const { Schema } = require("mongoose");

const userSchema = new Schema({
    user_name : String,
    user_id : Number,
    user_bank : String
})

const US