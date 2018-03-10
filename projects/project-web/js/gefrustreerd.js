/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
console.log("gefrustreerd.js loaded");

// Verder lezen popup
var resumeReading = document.querySelector("#resume_reading");
var footer = document.querySelector("#tabbar");
var closePopup = document.querySelector("#close_popup");
var progressBar = document.querySelector("#progress_bar");

function resume() {
  // Trigger de progress bar animation
  progressBar.classList.add("progress_trigger");
  // Delay het springen van de pagina en het verdwijnen van de tabbar met een getimede functie
  setTimeout(function() {
    // Laat de tabbar verdwijnen
    footer.classList.add("fadeOutAnimation");
    // Laat de pagina scrollen
    var body = document.documentElement;
    body.scrollTop += 750;
  }, 5000);
}
resumeReading.addEventListener("click", resume);

function close() {
  footer.classList.add("fadeOutAnimation");
}
closePopup.addEventListener("click", close);
