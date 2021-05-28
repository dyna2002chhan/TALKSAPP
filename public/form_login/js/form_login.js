let url = "http://localhost:3000/user";
axios.get(url).then((response) => {
    let dataUser = response.data
    let user_name = document.querySelector('.user_name');
    let user_password = document.querySelector('.user_password');
    let login = document.querySelector('.login');

    login.addEventListener('click', (event) => {

        event.preventDefault();
        for (data of dataUser) {
            if (data.name === user_name.value && data.password === user_password.value) {
                localStorage.setItem('username', JSON.stringify(data.name));
                window.location.pathname = "../form_message/message.html";
            }

        };

    });
    
});