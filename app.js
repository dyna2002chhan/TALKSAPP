const express = require('express');
let app = express();

app.listen(process.env.SERVER_PORT || 3000, (req,res)=>{
    console.log("Server is running....")
})
//to read data json from body..........................//
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.post('/recieve', (req,res)=> {
    
})