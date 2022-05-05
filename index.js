const express = require("express")
const app = express();
const port = process.env.port || 8080;
const bodyParser = require("body-parser")
require('./Db/connection');
const {Chatbots } = require('./model/userModel');


app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', async(req,res)=>{
    try {
        const data= await Chatbots.find();

        res.send('server start',data)
    } catch (error) {
        res.send(error)
    }
   
})
app.post('/data',async(req,res)=>{
    try {
        
         const data = req.body;
         var myobj = { userToken: "projects/wemoke-chpj/locations/global/agent/sessions/428ce66c-2955-2711-008a-5e0159aac39c"};
         const result = await Chatbots.insertOne(myobj);
         console.log(`A document was inserted with the _id: ${result.insertedId}`);
        res.send('data get',saveddata);
      
    } catch (error) {
        console.log(error);
        res.send(error);
    }
   
}) 

app.listen(port,()=>{
    console.log(`server start at port ${port}`);
})


