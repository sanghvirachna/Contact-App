const { uniqueId } = require('lodash')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add a username"]
    },
    email:{
        type:String,
        required:[true,"Please add a email address"],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"Please add a password"]
    }
},
{
    timestamps:true
}
)
module.exports = mongoose.model("User",userSchema)