const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here


app.get('/mario',(req,res)=>{
    marioModel.find({})
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(400).json({"message": error.message});
    })
})

app.get('/mario/:id',(req,res)=>{
    const id = req.params.id;
    marioModel.findById(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(400).json({"message": error.message});
    })

})


app.post('/mario',(req,res)=>{
    const {name,weight} = req.body;
    let newMario =new marioModel({
        name : name,
        weight: weight
    })
    newMario.save()
    .then((result)=>{
        res.status(201).json(result);
    })
    .catch((error)=>{
        res.status(400).json({"message": 'either name or weight is missing'});
    })
})

app.patch('/mario/:id',(req,res)=>{
    const id = req.params.id;
    const updates = req.body;
    console.log(updates)
    marioModel.findByIdAndUpdate(id,updates)
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(400).json({"message": error.message});
    })

})

app.delete('/mario/:id',(req,res) =>{
    const id = req.params.id;
    marioModel.findByIdAndDelete(id)
    .then((result)=>{
        res.status(200).json({"message": 'character deleted'});
    })
    .catch((error)=>{
        res.status(400).json({"message": error.message});
    })
})



module.exports = app;