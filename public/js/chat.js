const chatRoom = document.querySelector('.chat-room');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    emojiBtn.addEventListener('click', () => {
        picker.togglePicker(emojiBtn);
    });
});


// chat button toggle
chatBtn.addEventListener('click', () =>{
    chatRoom.classList.toggle('show');
})

// send msg
submitBtn.addEventListener('click', () =>{
    let userInput = inputElm.value;
    console.log(userInput);
    let temp = `<div class="out-msg">
    <span class = "my-msg">${userInput}</span>
    <img src = "img/image11.jpg" class = "avatar">
    </div>
    `;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
})

