const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title : {
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

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;