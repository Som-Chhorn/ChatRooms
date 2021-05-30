const rootEndPoint = "http://192.168.88.8:5000"
let loginProcess = (response) =>{
    let users = response.data; 
    for(let user of users){
        if (user.name === username.value && user.password === password.value){
            window.location.href = "message.html";
            localStorage.setItem('username', user.name);
            localStorage.setItem('color', user.name);
        }
    }
}
// call user and pwd
let username = document.querySelector('#user');
let password = document.querySelector('#pwd');
let login = (e) =>{
    const GET_URL = rootEndPoint + '/login';
    axios.get(GET_URL).then(loginProcess);
}

// call button 
const btnLogin = document.querySelector('#btn_login');

btnLogin.addEventListener('click', login);