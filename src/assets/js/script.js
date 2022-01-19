(() => {
  /**
   * Show more or less work items
   */
  function toggleWork (e, work) {
    const text = {
      more: e.target.dataset.moreWork,
      less: e.target.dataset.lessWork
    }

    if (work[0].classList.contains('hidden')) {
      e.target.textContent = text.less
    } else {
      e.target.textContent = text.more
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

  /**
   * Scroll to section on click of nav item
   */
  if (document.documentElement.scrollIntoView) {
    const navItems = document.getElementsByClassName('menu-item')

    Array.from(navItems).forEach(navItem => {
      navItem.addEventListener('click', e => {
        e.preventDefault()

        const el = document.getElementById(navItem.href.split('#')[1])

        el.scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }
})()
