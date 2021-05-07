const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    item : {
        type : String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
        
    },
    vegan : String,
   
})

const Menudb = mongoose.model('menudb', schema);

module.exports = Menudb;