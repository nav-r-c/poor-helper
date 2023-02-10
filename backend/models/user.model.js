const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String, 
        required : true,
        trim : true,
        minLength : 3
    },
    phoneNumber : {
        type : Number,
        required : true,
        trim : true,
        minLength : 10
    },
    
    password : {
        type : String,
        required : true,
        minLength : 7,
    },

    email : {
        type: String,
    }, 

    type : {
        type : String, 
        required : true
    },

    gender : {
        type : String,
        required : true
    },
    
    address : {
        type : String
    }
},

    {timestamps : false}
);

const User = mongoose.model("User", userSchema);
module.exports = User;