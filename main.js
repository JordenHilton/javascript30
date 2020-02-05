window.addEventListener ('keydown', function(e) {
    const audio = document.querySelector(`audio[date-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
});