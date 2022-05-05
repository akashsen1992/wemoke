const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.url,()=>{
    console.log('database connection successfully');
})