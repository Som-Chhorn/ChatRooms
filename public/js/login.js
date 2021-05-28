

let loginProcess = (response, username, pass) =>{
    let messages = response.data; 
    for(let user of messages){
        if (user.name === username && user.password === pass){
            window.location.href = rootEndPoint + "../message.html"
        }else{
            console.log("No")
        }
    }
}


let login = (e) =>{
    let username = document.querySelector('#user').value;
    let password = document.querySelector('#pwd').value;
    const url = rootEndPoint + '/messages';
    axios
    .get(url)
    .then(res => loginProcess(res, username, password))
}


const btnLogin = document.querySelector('#btn_login');
const rootEndPoint = "http://localhost:5000/messages"
btnLogin.addEventListener('click', login);