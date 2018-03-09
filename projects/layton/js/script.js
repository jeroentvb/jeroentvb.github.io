/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var music = document.getElementsByTagName("audio")[0];
music.play();
music.volume = 0.4;

// Audio loop van https://stackoverflow.com/questions/3273552/html5-audio-looping
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

// Windows.location.replace van https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage-in-javascript-jquery
var i;
function randomPuzzle() {
    i = Math.floor(Math.random() * 2);
    if (i === 1) {
        window.location = "./puzzle1.html";
    } else {
        window.location = "./puzzle2.html";
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", randomPuzzle);
