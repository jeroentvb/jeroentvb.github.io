(() => {
  function toggleWork (e, work) {
    if (work[0].classList.contains('hidden')) {
      e.target.textContent = 'Minder werk'
    } else {
      e.target.textContent = 'Meer werk'
    }

    for (let i = 0; i < work.length; i++) {
      work[i].classList.toggle('hidden')
    }
  }

  if (document.querySelector('.load-more-button')) {
    const button = document.querySelector('.load-more-button')
    const moreWork = document.getElementsByClassName('more-work')

    button.addEventListener('click', e => toggleWork(e, moreWork))
  }

  if (document.documentElement.scrollIntoView) {
    const nav = document.getElementsByClassName('menu-item')

    for (let i = 0; i < nav.length; i++) {
      nav[i].addEventListener('click', e => {
        e.preventDefault()

        const el = document.getElementById(nav[i].href.split('#')[1])

        el.scrollIntoView({
          behavior: 'smooth'
        })
      })
    }
  }
})()
