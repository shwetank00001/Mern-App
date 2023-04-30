const mongoose = require('mongoose')

const schema = mongoose.Schema

const exersiseSchema = new schema(
    {
        username: {type: String, required:true},
        description: {type: String, required:true, trim:true},
        duration: {type: Number , required:true},
        date:{type:Date, required:true}

    }, 
    {
        timestamps:true
    }
)


const exercise = mongoose.model('Exercise', exersiseSchema)
module.exports= exercise