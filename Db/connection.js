const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wemokestging:8zmzpch0mruuapqi@cluster0.pupic.mongodb.net/wemokestaging?retryWrites=true&w=majority',()=>{
    console.log('database connection successfully');
})