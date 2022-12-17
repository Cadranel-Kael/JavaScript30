
function playAudio(key) {
    const audios = document.getElementsByTagName('audio');
    for (const audio of audios) {
        if (key === audio.dataset.key) {
            audio.currentTime = 0;
            audio.play();
        }
    }
}

function animate(key) {
    const listItems = document.getElementsByClassName('key');
    for (const listItem of listItems) {
        if (key === listItem.dataset.key) {
            listItem.classList.add('playing');
            listItem.addEventListener('transitionend', () => {
                listItem.classList.remove('playing');
            })
        }
    }
}


window.addEventListener('keydown', (e) => {
    playAudio(e.key);
    animate(e.key);
})