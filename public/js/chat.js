const MESSAGE = [
  { color: "blue", message: "how are you", image: "img/image11.jpg" },
  { color: "red", message: "hi", image: "img/image11.jpg" },
];

const IP = "192.168.88.8";
const PORT = 5000;

function refreshMessages(messages) {
  // let temp = document.createElement('div').value;
  // temp.className = "out-msg";
  // chatArea.appendChild(temp);
  // let span = document.createElement('span').value;
  // span.className = 'my-msg';
  // userInput.appendChild(span);
  // let img = document.createElement('img').value;
  // img.src = "img/image11.jpg";
  // img.className = "avatar";
  // chatArea.appendChild(img);
}

function sendMessage() {}

// add button show and hide of chat
const chatRoom = document.querySelector(".chat-room");
const chatBtn = document.querySelector(".chat-btn");
chatBtn.addEventListener("click", () => {
  chatRoom.classList.toggle("show");
});

// Submit
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", sendMessage);

refreshMessages(MESSAGE);
