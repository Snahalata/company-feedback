const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/company', err =>{
    !err ? console.log('Mongo connected') : console.log(err);

});
module.exports = mongoose;