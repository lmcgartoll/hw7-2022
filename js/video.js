var video;

// window.addEventListener("load", function () {
//   console.log("Good job opening the window");
// });

// function loading() {
// 	console.log("Good job opening the window");
// 	video=document.getElementById("player1");
// 	video.autoplay=false;
// 	video.loop=false;
// 	video.load();
// }

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  video.load();
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play video!");
  video.play();
  var volume = document.getElementById("slider").value;
  document.getElementById("volume").innerHTML = volume + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause video!");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow video!");
  video.playbackRate *= 0.9;
  console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed video!");
  video.playbackRate *= 1.111111111111;
  console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip 10s!");
  video.currentTime += 10;

  if (video.currentTime == video.duration) {
    video.currentTime = 0;
  }

  console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  console.log("Mute/Unmute!");
  if (video.muted === false) {
    video.muted = true;
    document.querySelector("#mute").innerHTML = "Unmute";
  } else {
    video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
  }
  console.log(video.muted);
});

document.querySelector("#slider").addEventListener("change", function () {
  console.log("Change Volume!");
  video.volume = this.value / 100;
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
  console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old School!");
  video.className = "video" + " oldSchool";
  console.log(video.className);
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Regular!");
  video.className = "video";
  console.log(video.className);
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
