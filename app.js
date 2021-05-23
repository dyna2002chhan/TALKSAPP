const express = require('express');
let app = express();

app.listen(process.env.PORT || 3000, (req,res)=>{
    console.log("Server is running....")
})
//to read data json from body..........................//
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));



app.get('/user',(req,res)=>{
    res.send("Running....")
})
app.post('/users',(req,res)=>{
    let username = req.body;
    console.log(username)
})