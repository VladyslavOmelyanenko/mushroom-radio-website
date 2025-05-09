const textElements = document.getElementsByTagName('p')

const chatColumn = document.getElementsByClassName('chat-column')[0];
const logo = document.getElementsByClassName('logo')[0];
const playBtn = document.getElementById('playButton');
const liveAudio = document.getElementsByClassName('live-audio')[0];
var player = document.querySelector("audio");
var currentTime = document.querySelector(".current-time");
let isLive = false;

// if (window.innerWidth < 900) {
//   Array.from(logo.getElementsByTagName('path')).forEach((path) => {
//     path.setAttribute('fill', 'url(#mobileGradient)')
//   })
// }


Array.from(textElements).forEach(textElement => {
  // console.log(
  //   textElement.getBoundingClientRect().left,
  //   textElement.getBoundingClientRect().width,
  //   window.innerWidth
  // );
  const textElementRect = textElement.getBoundingClientRect();
  textElement.style.background = `linear-gradient(to right, #502978 ${-textElementRect.left}px, #63502f calc(60vw - ${
    textElementRect.left
  }px), #a3a651 calc(100vw - ${textElementRect.left}px))`;
  textElement.style.backgroundClip = "text";
  textElement.style.webkitBackgroundClip = "text";
  textElement.style.webkitTextFillColor = "transparent";
});

playBtn.addEventListener('click', () => {
  const svgPath = playBtn.getElementsByTagName('path')[0];
  if (!isLive) {
    svgPath.setAttribute("d", "M0 0h6v24H0zM12 0h6v24h-6z");
    isLive = true;
    liveAudio.play();
  } else {
    svgPath.setAttribute("d", "M18 12L0 24V0");
    isLive = false;
    liveAudio.pause();

  }
})
player.addEventListener("timeupdate", updateProgress);


function updateProgress() {
  var current = player.currentTime;
  var percent = (current / player.duration) * 100;

  currentTime.textContent = formatTime(current);
}

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}