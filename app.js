const express = require('express');
let app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server is running...')
})
//to read data json from body..........................//
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/user',(req,res)=>{
    res.send("Running....");
});
// app.post('/users',(req,res)=>{
//     let username = req.body;
//     console.log(username);
// })

const fs = require('fs');
let users = JSON.parse(fs.readFileSync('users.json'));
console.log(users);

app.get('/login', (req,res) =>{
    username = req.query.username;
    password = req.query.password;


    //check if password is valid..................................//
    let isValid = false;
    for (let user of users){
        if (user.name === username && user.password === password){
            isValid = true;
        }
    }
    res.send(isValid);
});
