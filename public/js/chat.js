function displayInfo(res) {
  let users = res.data;
  console.log(users);
  let list = document.querySelector('.list_message');
  if(list !== null){
    list.remove();
  }
  list = document.createElement('div');
  for(user of users){
    let li = document.createElement('li');
    li.className = 'name';
    // li.textContent = user.name;
    let sms = document.createElement('p');
    sms.className = 'sms';
    sms.textContent = user.text;
  
    list.appendChild(li);
    list.appendChild(sms);
    list_message.appendChild(list);
  }
}

function addText() {
  
  let users = {name: "Iphone", text: messages.value}
  axios.post(url, users).then(displayInfo);
  messages.value = '';

}

const url = "http://localhost:5000/users";
axios.get(url).then(displayInfo)


let messages = document.getElementById("input");
let list_message = document.querySelector('.contain-message');

const btnAdd = document.querySelector('.submit');
btnAdd.addEventListener('click', addText);