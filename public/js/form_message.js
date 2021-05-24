//Send and Recieve............................................................//
const send = document.querySelector('#send');
let count = 0;
send.addEventListener('click',(event)=>{
    count = count + 1;
    let message_input = document.querySelector("#text_entered");
        if (message_input.value === '' || message_input.value === null){
            confirm('Write any messages!');
        }else if (event.target.id === "send" ){
            // const message_input = document.querySelector("#text_entered");
            const message_send = document.querySelector('.p_message');
            let p = document.createElement('p');
            p.textContent = message_input.value;
            // p.style.width = "50%";
            p.style.height = "6vh";
            message_send.appendChild(p);
            message_input.value = "";
            p.style.background = "green";
            p.style.marginLeft = "50%";
            p.style.float = "right";
            p.style.borderRadius = "15px";
        }
    const username = document.querySelector('.username');
    const user_name = document.querySelector('.user_name');
    username.textContent = user_name;
})


