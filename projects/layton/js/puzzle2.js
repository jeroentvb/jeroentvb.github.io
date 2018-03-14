/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// Windows.location.replace van https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage-in-javascript-jquery
function backButton() {
    window.location = "./index.html";
}
document.getElementsByTagName("button")[0].addEventListener("click", backButton);

function nextPuzzle() {
    window.location = "./puzzle1.html";
}


var puzzle = document.getElementsByClassName("puzzle")[0];
var submit = document.getElementsByClassName("submit")[0];
var answer1 = document.getElementsByTagName("img")[1];
var answer2 = document.getElementsByTagName("img")[2];

// AUDIO

// Bron audio https://www.w3schools.com/jsref/met_audio_play.asp
var startSound = document.getElementsByTagName("audio")[0];
//Begingeluidje
startSound.play();
startSound.volume = 0.5;

var puzzleMusic = document.getElementsByTagName("audio")[1];
//Delay voor de puzzel muziek
setTimeout(function () {
    puzzleMusic.play();
    puzzleMusic.volume = 0.2;
}, 1000);

// Audio loop van https://stackoverflow.com/questions/3273552/html5-audio-looping
puzzleMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

var succesSound = document.getElementsByTagName("audio")[2];
var failedSound = document.getElementsByTagName("audio")[3];


//Hints
var hints = ["At its core, this is a simple math problem, so you're just going to have to work it out if you want to solve it. However, there is a way to cut down on the amount of work you need to do. Try thinking about the first and last digits for each number. <br> The leftmost digit in the upper number is 4.", "There are two possible solutions, but some digits are located in the same place for both answers. For example, for both solutions, 7 is the leftmost digit of the bottom number.", "This is the last hint you're going to get. <br> For the top number, going from the left, the first three digits are 4, 1, and 2."];

// P met de tekst van de hint
var hintText = document.getElementById("hinttext");

var hintSection = document.getElementsByTagName("section")[1];

var hintButton1 = document.getElementsByTagName("button")[1];
var hintButton2 = document.getElementsByTagName("button")[2];
var hintButton3 = document.getElementsByTagName("button")[3];

function hint1() {
    // Confirm() bron https://www.w3schools.com/jsref/met_win_confirm.asp
    var confrm = confirm("Are you sure you want to see the first hint?");
    if (confrm === true) {
        hintText.innerHTML = hints[0];
        hintButton2.setAttribute("class", "hintbutton2");
    }
}

function hint2() {
    // Confirm() bron https://www.w3schools.com/jsref/met_win_confirm.asp
    var confrm = confirm("Are you sure you want to see the second hint?");
    if (confrm === true) {
        hintText.innerHTML = hints[1];
        hintButton3.setAttribute("class", "hintbutton3");
    }
}

function hint3() {
    // Confirm() bron https://www.w3schools.com/jsref/met_win_confirm.asp
    var confrm = confirm("Are you sure you want to see the third hint?");
    if (confrm === true) {
        hintText.innerHTML = hints[2];
    }
}

hintButton1.addEventListener("click", hint1);
hintButton2.addEventListener("click", hint2);
hintButton3.addEventListener("click", hint3);


// Layton false images array
var laytonFalseImages = ["./images/layton_false_sequence/1.jpg", "./images/layton_false_sequence/2.jpg", "./images/layton_false_sequence/3.jpg", "./images/layton_false_sequence/4.jpg"];

var i = 1;

function restartPuzzleOne() {
    location.reload();
}

// Loop door de array images
function falseSequence() {
    puzzleMusic.pause();
    failedSound.play();

    // Verberg de section waar de hints in staan
    hintSection.setAttribute("class", "none");
    // Voorkom een delay bij het starten door het eerste frame hier te veranderen
    puzzle.setAttribute("src", laytonFalseImages[0]);
    // Verwijder de background van de image
    puzzle.style.background = "rgba(0, 0, 0, 0.0)";

    // Bron interval https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
    var falseSequenceLoop = setInterval(function () {
        puzzle.setAttribute("src", laytonFalseImages[i]);

        if (i > 2) {
            // Verwijder de interval van trueSequenceLoop
            clearInterval(falseSequenceLoop);
            // Laat de foute tekst zien en maak een button aan
            document.getElementsByTagName("section")[0].innerHTML = "<h1>Too bad!</h1>" + "<p>Check your calculations and try again.</p>" + "<button class='tryagain'>Try again!</button>";

            // Delay voor het verdergaan van de muziek https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
            setTimeout(function () {
                puzzleMusic.play();
            }, 2900);

            // Zorg er voor dat de button de pagina reload
            document.getElementsByTagName("button")[1].addEventListener("click", restartPuzzleOne);
        } else {
            i++;
        }
    }, 650);
}


// Layton true images array
var laytonTrueImages = ["./images/layton_true_sequence/1.jpg", "./images/layton_true_sequence/2.jpg", "./images/layton_true_sequence/3.jpg", "./images/layton_true_sequence/4.jpg"];

function trueSequence() {
    puzzleMusic.pause();
    succesSound.play();

    // Geeft de css style display: none; mee aan alle buttons doormiddel van een loop.
    var x;
    var removeButton = document.getElementsByTagName("button");
    for (x = 1; x < removeButton.length; x++) {
        removeButton[x].setAttribute("class", "none");
    }
    // Geeft de css class none mee aan de P van de hint tekst
    hintText.setAttribute("class", "none");
    document.getElementsByTagName("h1")[1].setAttribute("class", "none");
    // Hide de section tijdelijk
    hintSection.setAttribute("class", "none");
    // Voorkom een delay bij het starten door het eerste frame hier te veranderen
    puzzle.setAttribute("src", laytonTrueImages[0]);
    // Verwijder de background van de image
    puzzle.style.background = "rgba(0, 0, 0, 0.0)";

    // Bron interval https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
    var trueSequenceLoop = setInterval(function () {
        puzzle.setAttribute("src", laytonTrueImages[i]);

        if (i > 2) {
            // Verwijder de interval van trueSequenceLoop
            clearInterval(trueSequenceLoop);
            // Verwijder de eventlistener van de afbeelding 'puzzle'
            puzzle.removeEventListener("click", falseSequence);
            // Laat de afbeelding met het antwoord zien.
            answer1.setAttribute("class", "answer");
            answer2.setAttribute("class", "answer2");
            // Laat de goede tekst zien en maak een button aan
            document.getElementsByTagName("section")[0].innerHTML = "<h1>That's right!</h1>" + "<p>There are two correct configurations possible. Did you manage to figure out both?</p>" + "<button>Next Puzzle!</button>";
            // Zet de section weer terug
            hintSection.setAttribute("class", "answersection");
            // Delay voor het verdergaan van de muziek https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
            setTimeout(function () {
                puzzleMusic.play();
            }, 3200);

            // Zorg er voor dat de button de pagina reload
            document.getElementsByTagName("button")[1].addEventListener("click", nextPuzzle);
        } else {
            i++;
        }
    }, 650);
}

function checkAnswer() {
    //var topAnswer = document.getElementsByName("topanswer")[0].value;
    //var bottomAnswer = document.getElementsByName("bottomanswer")[0].value;

    if ((document.getElementsByName("topanswer")[0].value == 41268 && document.getElementsByName("bottomanswer")[0].value == 7935) || (document.getElementsByName("topanswer")[0].value == 41286 && document.getElementsByName("bottomanswer")[0].value == 7953)) {
        trueSequence();
    } else {
        falseSequence();
    }
}

var warningText = document.getElementsByTagName("p")[4];

function checkInput() {
    if (document.getElementsByName("topanswer")[0].value === "" || document.getElementsByName("bottomanswer")[0].value === "") {
        warningText.setAttribute("class", "warningtext");
    } else {
        if (warningText.getAttribute("class") == "warningtext") {
            warningText.setAttribute("class", "none");
        }
        checkAnswer();
    }
}

submit.addEventListener("click", checkInput);
