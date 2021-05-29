
const rootEndPoint = "http://192.168.43.68:5000"

let loginProcess = (response) =>{
    let messages = response.data; 
    for(let user of messages){
        console.log(user)
        if (user.name === username.value && user.password === password.value){
            window.location.href = "message.html";
        }
    }
}

let username = document.querySelector('#user');
let password = document.querySelector('#pwd');
let login = (e) =>{
    const GET_URL = rootEndPoint + '/login';
    axios.get(GET_URL).then(loginProcess);
}


const btnLogin = document.querySelector('#btn_login');

btnLogin.addEventListener('click', login);