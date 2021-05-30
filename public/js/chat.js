// Submit
// note this code has been refactored by ronan
const PORT = 5000;
const IP = "192.168.88.8";
const GET_URL = "http://" + IP + ":" + PORT + "/login";
const POST_URL = "http://" + IP + ":" + PORT + "/message";

function displayInfo(users) {
  let chatMessages = document.querySelector("#chat-messages");
  if (chatMessages !== null) {
    chatMessages.remove();
  }
  chatMessages = document.createElement("div");
  chatMessages.id = "chat-messages";
 

  for (message of users) {
    let img = document.createElement("img");
    img.src = "img/image1.jpg";
    img.className = "picture";
    chatMessages.appendChild(img);
    

    let text = document.createElement("div");
    text.className = "sms";
    text.textContent = message.username + " : " + message.text;
    

    chatArea.appendChild(chatMessages);
    chatMessages.appendChild(text);

   
  }
}

function addText() {
  if (messageInput.value !== "") {
    let postBody = { username: "COVID", text: messageInput.value };
    // post and create function displayInfo
    axios.post(POST_URL, postBody).then((res) => displayInfo(res.data));
    messageInput.value = "";
  }
  
}

function loadData() {
  axios.get(GET_URL).then((res) => displayInfo(res.data));
}

const btnAdd = document.querySelector(".submit");
btnAdd.addEventListener("click", addText);
const messageInput = document.querySelector("#messageInput");
const chatRoom = document.querySelector(".chat-room");
const chatBtn = document.querySelector(".chat-btn");
const chatArea = document.querySelector("#chat-area");
chatBtn.addEventListener("click", () => chatRoom.classList.toggle("show"));

setInterval(loadData, 5000);
