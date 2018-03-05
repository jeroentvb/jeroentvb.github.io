var moreButton = document.getElementById("moreButton");
var moreParagraph = document.getElementById("moreParagraph");

function showMoreLess() {
  if (moreParagraph.classList.contains("hideParagraph")) {
    moreParagraph.classList.replace("hideParagraph", "showParagraph");
  } else {
    moreParagraph.classList.replace("showParagraph", "hideParagraph");
  }
}

moreButton.addEventListener("click", showMoreLess);
