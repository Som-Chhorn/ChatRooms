const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

document.addEventListener('DOMContentLoaded', () =>{

    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    emojiBtn.addEventListener('click', () => {
        picker.togglePicker(emojiBtn);
    });
})