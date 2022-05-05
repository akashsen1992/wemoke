const mongoose = require('mongoose');

var userdatas = new mongoose.Schema({
    userToken:{
        type:String,
        required:true
    },
    welcomeotion:{
        type:String,
        default:''
    },
    deliveryType:{
        type:String,
        default:''
    },
    zipcode:{
        type:String,
        default:''
    },
    mokesqty:{
        type:String,
        default:''
    },
    colorSelection:{
        type:String,
        default:''
    }
});



module.exports = new mongoose.model('chatbot', userdatas);