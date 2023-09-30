let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
  myVideo.pause();
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}