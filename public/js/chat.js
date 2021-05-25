
// add button show and hide of chat
const chatRoom = document.querySelector(".chat-room");
const chatBtn = document.querySelector(".chat-btn");
const chatArea = document.querySelector('#chat-area')
chatBtn.addEventListener("click", () => {
  chatRoom.classList.toggle("show");
});

// Submit
function displayInfo(res) {
  let users = res.data;
  let list = document.querySelector('ul');
  if (list !== null) list.remove();
  const ul = document.createElement('ul');
  for(user of users){
    let img = document.createElement('img');
    img.src = "img/image12.jpg"
    img.className = "avatar";
    ul.appendChild(img);
    chatArea.appendChild(img);

    let div = document.createElement('div');
    div.textContent = user.name + " : " + user.text;
    div.className = "sms";
    ul.appendChild(div);
    chatArea.appendChild(div);


  }
}

function addText() {
  
  let user = {name: "sindy", text: text.value};
  axios.post(url, user).then(displayInfo);

}

let text = document.querySelector("#input");

const url = "http://localhost:5000/users";
axios.get(url).then(displayInfo)

const btnAdd = document.querySelector('.submit');
btnAdd.addEventListener('click', addText);