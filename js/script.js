'use strict'
// Button to show more info on mobile devices
const moreButton = document.getElementById('moreButton')
const moreParagraph = document.getElementById('moreParagraph')
const reqPath = window.location.pathname
// Translations
const dutch = ['Minder over mij ^', 'Meer over mij ˅']
const english = ['Less about me ^', 'More about me ˅']

// function to actually hide or show the paragraph and change button text
function hideShowParagraph (show, hide, text) {
  moreParagraph.classList.add(show)
  moreParagraph.classList.remove(hide)
  moreButton.textContent = text
}
// Check wether to hide or show the paragraph
function showOrHide (translation) {
  if (moreParagraph.classList.contains('hideParagraph')) {
    hideShowParagraph('showParagraph', 'hideParagraph', translation[0])
  } else {
    hideShowParagraph('hideParagraph', 'showParagraph', translation[1])
  }
}
// Check if the english or dutch translations are needed
function showMoreLess () {
  if (reqPath === '/en/index.html') {
    showOrHide(english)
  } else {
    showOrHide(dutch)
  }
}

// Only execute the js if the user is on the homepage
if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/en/index.html') {
  moreButton.addEventListener('click', showMoreLess)
}
