var moreButton = document.getElementById('moreButton');
var moreParagraph = document.getElementById('moreParagraph');

function showMoreLess() {
  if (moreParagraph.classList.contains('hideParagraph')) {
    moreParagraph.classList.replace('hideParagraph', 'showParagraph');
    moreButton.innerHTML = 'Less about me ^';
  } else {
    moreParagraph.classList.replace('showParagraph', 'hideParagraph');
    moreButton.innerHTML = 'More about me ˅';
  }
}

moreButton.addEventListener('click', showMoreLess);
