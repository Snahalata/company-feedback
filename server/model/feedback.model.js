const mongoose = require('../config/database.config');

const feedbackSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true},
    rate:{
        type:Number,
        min:0,max:10
    },
    idea:{type:String},
    performance:{type:Number,min:1,max:5}, 

});

const feedbackModel = mongoose.model('feedback',feedbackSchema);
module.exports = feedbackModel;