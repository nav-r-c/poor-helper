const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    companyName : {
        type : String,
        required: true,
        minLength : 7
    },
    
    description : {
        type : String,
        required : true
    },},
    {timestamps : true}
)

const Charity = mongoose.model("Charities", charitySchema);
module.exports = Charity;