const express=  require("express")
const cors = require('cors')
const mongoose = require('mongoose') // helps us to connect to mongo db


const app = express()


// middle ware
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI // data base usi-> we get from mongodb dash
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true}) // we connect to uri here

app.listen(5000, ()=>{
    console.log("ON PORT", 5000)
})