const url = "http://localhost:3000/addmessageuser";

function display_message(value_message){
    let oldcontainer_p = document.querySelector('.p_message');
    if(oldcontainer_p !== null){
        oldcontainer_p.remove();
    }
    let newcontainer_p = document.createElement('div');
        newcontainer_p.className = "p_message";
    for( text of value_message){
        let p = document.createElement('p');
        if(User_nameLog === "Lanh"){
            p.style.background = "red";
            p.style.float= "left";
            p.style.marginRight= "50%";
            p.style.borderRadius = "15px";
            p.style.height = "6vh";
        }else{
            p.style.background = "purple";
            p.style.float= "right";
            p.style.marginLeft = "50%";
            p.style.borderRadius = "15px";
            p.style.height = "6vh";
        }
        p.className = "text";
        p.textContent = text.message;
        newcontainer_p.appendChild(p);
        contain_message.appendChild(newcontainer_p);
    }
}
function add_mesage(event){
    event.preventDefault();
    let message_data ={
        message: textArea.value
    }
    axios.post(url,message_data).then(response => {
        display_message(response.data);
    })
    loadData();
    textArea.value = "";
}
function loadData() {

    axios.get(url).then(response => {
        display_message(response.data);
    })
}

let textArea = document.querySelector('#text_entered');
let btnsend = document.querySelector('#send');
let contain_message = document.querySelector('.message');

let user_Login = localStorage.getItem("username");
let user_h1 = document.querySelector('.username');
let User_nameLog = "";
for (let character = 0; character< user_Login.length; character++){
    if (user_Login[character] === "L" || user_Login[character] === "a" || user_Login[character] === "n" || user_Login[character] === "h" || user_Login[character] === "D" || user_Login[character] === "y" || user_Login[character] === "n" || user_Login[character] === "a"){
        User_nameLog += user_Login[character];
    }
}
console.log(User_nameLog);
user_h1.textContent = user_Login;

btnsend.addEventListener('click', add_mesage)

setInterval(loadData,50)

