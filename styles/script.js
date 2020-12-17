window.addEventListener("load", myVideoControls);
let video = document.querySelector("#splash_video");

let playButton = document.querySelector("#play-pause");
let muteButton = document.querySelector("#mute");
let fullScreenButton = document.querySelector("#full-screen");


let seekBar = document.querySelector("#seek-bar");
let volumeBar = document.querySelector("#volume-bar");

function myVideoControls() {

    playButton.addEventListener("click", myPlay);

    muteButton.addEventListener("click", myMute);

    fullScreenButton.addEventListener("click", myFullscreen);

    seekBar.addEventListener("change", mySeekBar);

    volumeBar.addEventListener("change", myVolumeBar);

    video.addEventListener("timeupdate", myTimeUpdate);
}

function myPlay() {
    if (video.paused == true) {
        video.play();

        playButton.innerHTML = "Pause";
    } else {
        video.pause();
        playButton.scrollIntoView = "Play";
    }

}

function myMute() {
    if (video.muted == false) {
        video.muted == true;

        muteButton.innerHTML = "Unmute";
    } else {
        video.muted == false;
        muteButton.innerHTML = "Mute";
    }
}

function myFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }

}

function mySeekBar() {
    let time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
}

function myTimeUpdate() {
    let value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
}

function myVolumeBar() {
    video.volume = volumeBar.value;
}

// javaScript til burger menu

//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("sidenVises");
//
//    document.querySelector("#menuknap").addEventListener("click", toggleMenu)
//
//}
//
//function toggleMenu() {
//    console.log("toggleMenu");
//
//    document.querySelector("#menu").classList.toggle("hidden");
//
//    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
//
//    if (erSkjult == true) {
//        document.querySelector("#menuknap").textContent = "☰";
//    } else {
//        document.querySelector("#menuknap").textContent = "✖";
//    }
//}
