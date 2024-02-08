onmouseover="play";
function play(video) {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}