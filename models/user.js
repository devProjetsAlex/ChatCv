const mongoose = require('mongoose')
const Schema= mongoose.Schema

const userSchema = new Schema({
    facebook:{
        type: String
    },
    google:{
        type: String
    },
    firstname:{
        type: String
    },
    fullname:{
        type: String
    },
    lastname:{
        type: String
    },
    image:{
        type: String,
        default:'/img/logo.PNG'
    },
    email: {
        type: String
    },
    city:{
        type: String
    },
    country:{
        type: String
    },
    age:{
        type: String
    },
    searchingFor:{
        type: String      
    },
    about:{
        type: String,
        default:'Type what kind of job your offering or what are you looking for!'
    },
    online:{
        type:Boolean,
        default: false
    },
    wallet:{
        type:Number,
        default:0
    },
    password:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema)