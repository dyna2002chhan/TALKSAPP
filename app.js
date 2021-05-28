const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is Runnig...");
});
//to read data json from body..........................//
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
let data_login = [{
        name: "Dyna",
        password: "123"
    },
    {
        name: "Lanh",
        password: "121"
    },
];
app.get('/user', (req, res) => {
    res.send(data_login);
});
// Read file userdata.json replay to front end

let message_data = [];
//---------------------------------------------------------
app.post('/addmessageuser', (req, res) => {
    let usermessge = req.body;
    message_data.push(usermessge);
    
});

app.get("/addmessageuser", (req, res)=>{
    res.send(message_data)
})

app.post('/users', (req, res) => {
    let username = req.body;
    console.log(username);
})

