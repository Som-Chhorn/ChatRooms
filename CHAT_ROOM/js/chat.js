const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

window.addEventListener('DOMContentLoaded', () =>{

    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    emojiBtn.addEventListener('clikc', () => {
        picker.togglePicker(emojiBtn);
    });
})