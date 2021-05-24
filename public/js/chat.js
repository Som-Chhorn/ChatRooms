
let url = "http://192.168.88.8:3000/fruits";

function sendMessage(event){
 
  let messages = {message:messageInput.value};
  
  axios.post(url, messages).then((response)=>{
    refreshMessages(response.data);
    console.log(response.data);
  })
 
}


function loadData(){
  axios.get(url).then((response)=>{
    refreshMessages(response.data);
  })
};

function refreshMessages(valueMessage) {
  // console.log(valueMessage);
};
// add button show and hide of chat
const chatRoom = document.querySelector(".chat-room");
const chatBtn = document.querySelector(".chat-btn");

let messageInput = document.querySelector('#input');


// chatBtn.addEventListener("click", () => {
//   chatRoom.classList.toggle("show");
// });

// Submit
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", sendMessage);


loadData();