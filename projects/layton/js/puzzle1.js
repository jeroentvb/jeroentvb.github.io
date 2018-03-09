/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// Windows.location.replace van https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage-in-javascript-jquery
function backButton() {
    window.location = "./index.html";
}
document.getElementsByTagName("button")[0].addEventListener("click", backButton);

function nextPuzzle() {
    window.location = "./puzzle2.html";
}

var puzzle = document.getElementsByClassName("puzzle")[0];
var correctHouse = document.getElementsByClassName("correct_house")[0];
var arrowNorth = document.getElementsByClassName("arrownorth")[0];

// AUDIO

// Bron audio https://www.w3schools.com/jsref/met_audio_play.asp
var startSound = document.getElementsByTagName("audio")[0];
//Begingeluidje
startSound.play();
startSound.volume = 0.5;

var puzzleMusic = document.getElementsByTagName("audio")[1];
//Delay voor de puzzel muziek
setTimeout(function() {
    puzzleMusic.play();
    puzzleMusic.volume = 0.2;
}, 1000);

// Audio loop van https://stackoverflow.com/questions/3273552/html5-audio-looping
puzzleMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var succesSound = document.getElementsByTagName("audio")[2];
var failedSound = document.getElementsByTagName("audio")[3];

//Hints
var hints = ["To face the morning sun, one must, of course, look eastward. The map shows north pointing toward the top of the screen, so which direction indicates east?", "The rising sun comes from the east. On this map, that means it comes from the right. Therefore, if you follow the directions, you should be facing to the right after you take your last turn.", "Trying to follow the directions from each house only complicates matters. Instead, why not follow the directions in reverse? Needless to say, going backward means the directions you turn will reverse as well. Start by facing right, then head left down the road, then take a left, then another left..."];

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
    // Verberg de goede afbeelding wanner het loopen begint
    correctHouse.setAttribute("class", "none");
    // Verberg de pijl die naar het noorden wijst
    arrowNorth.setAttribute("class", "none");
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
            // Verwijder de eventlistener van de afbeelding 'puzzle'
            puzzle.removeEventListener("click", falseSequence);
            // Laat de foute tekst zien en maak een button aan
            document.getElementsByTagName("section")[0].innerHTML = "<h1>Try again!</h1>" + "<p>It would be an awful lot of work to try to check the directions from the doorstep of each house. If you end up facing the morning sun, you must be facing...</p>" + "<button>Try again!</button>";

            // Delay voor het verdergaan van de muziek https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
            setTimeout(function() {
                puzzleMusic.play();
                 }, 2900);

            // Zorg er voor dat de button de pagina reload
            document.getElementsByTagName("button")[1].addEventListener("click", restartPuzzleOne);
        } else {
            i++;
        }
    }, 650);
}
// Kijk of het verkeerde huis is aangeklikt
puzzle.addEventListener("click", falseSequence);


// Layton true images array
var laytonTrueImages = ["./images/layton_true_sequence/1.jpg", "./images/layton_true_sequence/2.jpg", "./images/layton_true_sequence/3.jpg", "./images/layton_true_sequence/4.jpg"];

//var i = 1;
//i heeft al een waarde

// Loop door de array images
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

    // Verberg de goede afbeelding wanner het loopen begint
    correctHouse.setAttribute("class", "none");
    // Verberg de pijl die naar het noorden wijst
    arrowNorth.setAttribute("class", "none");
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
            document.getElementsByTagName("img")[3].setAttribute("class", "answer");
            // Laat de goede tekst zien en maak een button aan
            document.getElementsByTagName("section")[0].innerHTML = "<h1>That's right!</h1>" + "<p>This is a problem where working backward gets the job done fastest. It takes far too long to check each house individually!</p>" + "<button>Next Puzzle!</button>";
            // Zet de section weer terug
            hintSection.setAttribute("class", "answersection");
            // Delay voor het verdergaan van de muziek https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
            setTimeout(function() {
                puzzleMusic.play();
                 }, 3000);

            // Zorg er voor dat de button de pagina reload
            document.getElementsByTagName("button")[1].addEventListener("click", nextPuzzle);
        } else {
            i++;
        }
    }, 650);
}
// Kijk of het goede huis is aangeklikt
correctHouse.addEventListener("click", trueSequence);

function hintCoin() {
    console.log("Siiiick!");
}

arrowNorth.addEventListener("click", hintCoin);
