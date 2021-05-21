const send = document.querySelector('#send');
let count = 0;
send.addEventListener('click',(event)=>{
    count +=1
    if (event.target.id === "send"){
        
        const message_input = document.querySelector("#text_entered");
        const message_send = document.querySelector('.p_message');
        let p = document.createElement('p');
        p.textContent = message_input.value;
        p.style.height = '5vh';
        p.style.width = '48%';
        p.style.borderRadius = '10px';
        message_send.appendChild(p);
        message_input.value = "";
        if (count %2 ==0){
            p.style.backgroundColor = 'teal';
            p.style.marginRight = "50%"
           
        }else{
            p.style.backgroundColor = 'rgb(243, 95, 95)';
            p.style.marginLeft='52%';
        }
    }
})







