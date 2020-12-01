const mongoose = require('mongoose');

const marioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    weight:{
        type: Number,
        required: true,
    }
})
const marioModel = mongoose.model('marioModel',marioSchema);

module.exports = marioModel;