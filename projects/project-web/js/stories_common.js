/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
console.log("stories_common.js loaded");

// download animation
var downloadButton = document.querySelector("#download");
var downloadImage = document.querySelector("#download_icon");

function downloadAnimation() {
  if (downloadImage.getAttribute("src") == "images/download2.png") {
    downloadImage.setAttribute("src", "images/download.gif");
  } else {
    downloadImage.setAttribute("src", "images/download2.png");
  }
  // downloadImage.classList.toggle("downloading");
}
downloadButton.addEventListener("click", downloadAnimation);


// Leeslijst button animation trigger
var leeslijstButton = document.querySelector("#leeslijst");
var leeslijstIcon = document.querySelector("#leeslijst_icon");

function addToLeeslijst() {
  leeslijstIcon.classList.toggle("leeslijstAnimation");
  setTimeout(function() {
    if (leeslijstIcon.getAttribute("src") == "images/book.png") {
      leeslijstIcon.setAttribute("src", "images/book2.png");
    } else {
      leeslijstIcon.setAttribute("src", "images/book.png");
    }
  }, 190);
}
leeslijstButton.addEventListener("click", addToLeeslijst);


// Like button animation trigger
var likeButton = document.querySelector("#like");
var likeIcon = document.querySelector("#like_icon");

function likeAnimation() {
  likeIcon.classList.toggle("likeAnimation");
  setTimeout(function() {
    if (likeIcon.getAttribute("src") == "images/heart.png") {
      likeIcon.setAttribute("src", "images/heart2.png");
    } else {
      likeIcon.setAttribute("src", "images/heart.png");
    }
  }, 450);
}
likeButton.addEventListener("click", likeAnimation);
