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

const refreshAll = async () => {
    await marioModel.deleteMany({})
    // console.log(connection)
    await marioModel.insertMany({name:"Luigi", weight: 60})
}
refreshAll()

module.exports = marioModel;