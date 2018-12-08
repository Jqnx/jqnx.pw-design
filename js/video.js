var videoPlayer= document.getElementById('video');
videoPlayer.volume = 0.2;

function playIt(){
videoPlayer.play();

var videos = [
"video1",
"video2",
"video3",
"video4",
"video5",
"video6",
], videos = videos[Math.floor(Math.random() * videos.length)];

videoPlayer.src = "css/videos/" + videos + ".mp4";
}

videoPlayer.addEventListener('ended', playIt, false);

playIt();
