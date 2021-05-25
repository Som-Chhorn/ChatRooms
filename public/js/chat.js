// Submit
// note this code has been refactored by ronan
const PORT = 5000;
const IP = "192.168.88.11";
const GET_URL = "http://" + IP + ":" + PORT + "/messages";
const POST_URL = "http://" + IP + ":" + PORT + "/message";

function displayInfo(messages) {
  let chatMessages = document.querySelector("#chat-messages");
  if (chatMessages !== null) {
    chatMessages.remove();
  }
  chatMessages = document.createElement("div");
  chatMessages.id = "chat-messages";
  chatArea.appendChild(chatMessages);

  for (message of messages) {
    let img = document.createElement("img");
    img.src = "img/image12.jpg";
    img.className = "picture";
    chatArea.appendChild(img);

    let text = document.createElement("div");
    text.className = "sms";
    text.textContent = message.username + " : " + message.text;
    chatArea.appendChild(text);
  }
}

function addText() {
  let postBody = { username: "JavaScript", text: messageInput.value };
  axios.post(POST_URL, postBody).then((res) => displayInfo(res.data));
  messageInput.value = "";
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

loadData();
