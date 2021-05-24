const { default: axios } = require("axios");

//Authentification...........................................................//
const PORT = 3000;
const GET_LOGIN_REQUEST = "http://localhost" + ":" + PORT + "/login";




function login(event){
    event.preventDefault();

    axios.get(querry).then((response){
        let isValid = response.data;
        console.log(isValid);
    })
}





console.log(user_login);
const user_login = document.querySelector('.to_message');
user_login.addEventListener('click',(event)=>{
    const user_name = document.querySelector('.user_name');
    const user_password = document.querySelector('.user_password');
    const login = document.querySelector('.login')
    // if (user_name.value != "" && user_password.value != ""){
    //     // username.textContent = user_name.value;
    //     user_login.style.display = "none";
    //     login.style.display = "block";
    // }
    
 })








