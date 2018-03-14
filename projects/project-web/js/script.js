/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log("JS loaded");

var buttonImage = document.querySelector(".button_leeslijst img");


function addToLeeslijst() {
  buttonImage.classList.toggle("leeslijstAnimation");

  setTimeout(function() {
    if (buttonImage.getAttribute("src") == "images/book.svg") {
      buttonImage.setAttribute("src", "images/book2.svg");
    } else {
      buttonImage.setAttribute("src", "images/book.svg");
    }
  }, 190);
}

buttonImage.addEventListener("click", addToLeeslijst);


// Uitklapbaar Zoeken
var search = document.querySelector("#search");
var searchField = document.querySelector("#search_field");

function expandSearch() {
  if (searchField.className == "") {
    searchField.classList.add("showSearchAnimation");

  } else if (searchField.className == "showSearchAnimation") {
    searchField.classList.remove("showSearchAnimation");
    searchField.classList.add("hideSearchAnimation");

  } else if (searchField.className == "hideSearchAnimation") {
    searchField.classList.remove("hideSearchAnimation");
    searchField.classList.add("showSearchAnimation");
  }
}

search.addEventListener("click", expandSearch);
