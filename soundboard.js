var playsound = function(e) {
    let audioEle = e.target.querySelector('audio');
    audioEle.play();
}

var buttons = document.querySelectorAll('#soundboard button');
buttons.forEach( (btn) => {
    btn.addEventListener('click', playsound);
})