const mongoose = require('mongoose')

const schema = mongoose.Schema

const userData = new schema(
{
    username:{type: String,trim:true,required:true,unique:true,minlength:3}
},

{
    timestamps:true
}

)


const user = mongoose.model('User', userData)
module.exports= user

