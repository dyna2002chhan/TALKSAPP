
//Authentification.....................................................................//

const user_login = document.querySelector('.login');
user_login.addEventListener('click',()=>{
    const user_name = document.querySelector('.user_name');
    const user_password = document.querySelector('.user_password'); 
    const chat_box = document.querySelector('.chat_box');
    const login_form = document.querySelector('.Login_form');
    const name = document.querySelector('.username');

    //if there are input of password and username, the process works...................//

    if (user_name.value !== '' && user_password.value !== ''){
        console.log(user_name.value);
        // login_form.style.display = 'none';
        // chat_box.style.display = 'block';
        name.textContent = user_name.value;
        name.style.paddingBottom = '17px';
        name.style.marginLeft = '10px';
    }
})

//send and recieve message..............................................................//

const send = document.querySelector('#send');
let count = 0;
send.addEventListener('click',(event)=>{
    count +=1
    const message_input = document.querySelector("#text_entered");
    if (message_input.value === '' || message_input.value === null){
        confirm('Write any messages!');
    }
    else if(event.target.id === "send"){
        const message_send = document.querySelector('.p_message');
        let p = document.createElement('p');
        p.textContent = message_input.value;
        p.style.height = '5vh';
        // p.style.width = '48%';
        p.style.float = 'right'
        p.style.paddingTop = '7px';
        p.style.borderRadius = '15px';
        message_send.appendChild(p);
        message_input.value = "";
        p.style.marginLeft = '10px';
        p.style.backgroundColor = 'rgb(243, 95, 95)';
        p.style.marginLeft='50%';
        // if (count %2 ==0){
        //     p.style.backgroundColor = 'teal';
        //     p.style.marginRight = "50%"
           
        // }else{
        //     p.style.backgroundColor = 'rgb(243, 95, 95)';
        //     p.style.marginLeft='50%';
        // }
    }
})
//send by enter...................................................................//






