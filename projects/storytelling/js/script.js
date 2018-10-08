if (document.getElementById('from-dest') != undefined) {
  var fromDest = document.getElementById('from-dest'),
  toDest = document.getElementById('to-dest'),
  map = document.getElementById('map')

  fromDest.addEventListener('change', function() {
    switch (fromDest.value) {
      case 'amsterdam':
        toDest.value = 'eindhoven'
        map.setAttribute('src', 'img/nederland.jpg')
        break
      case 'gent':
        toDest.value = 'luik'
        map.setAttribute('src', 'img/belgie.jpg')
        break
      case 'luxemburg':
        toDest.value = 'vianden'
        map.setAttribute('src', 'img/luxemburg.jpg')
        break
      case 'keulen':
        toDest.value = 'frankfurt'
        map.setAttribute('src', 'img/duitsland.jpg')
        break
      default:
        map.setAttribute('src', 'img/default.jpg')
    }
    calculatePrice()
  })

  toDest.addEventListener('change', function() {
    switch (toDest.value) {
      case 'eindhoven':
        fromDest.value = 'amsterdam'
        map.setAttribute('src', 'img/nederland.jpg')
        break
      case 'luik':
        fromDest.value = 'gent'
        map.setAttribute('src', 'img/belgie.jpg')
        break
      case 'vianden':
        fromDest.value = 'luxemburg'
        map.setAttribute('src', 'img/luxemburg.jpg')
        break
      case 'frankfurt':
        fromDest.value = 'keulen'
        map.setAttribute('src', 'img/duitsland.jpg')
        break
      default:
        map.setAttribute('src', 'img/default.jpg')
    }
    calculatePrice()
  })


  // Pricing
  var price = document.getElementById('price'),
  speedingRoad = document.getElementById('speeding-road'),
  speedingHighway = document.getElementById('speeding'),
  redLight = document.getElementById('red-light'),
  usingPhone = document.getElementById('using-phone'),
  alcohol = document.getElementById('alcohol'),
  notes = document.getElementById('notes'),
  otherFines = document.getElementById('other-fines'),
  otherCountryFines = document.getElementById('other-country-fines'),
  payBefore = document.getElementById('pay-before'),
  fineAmount = document.getElementById('fine-amount'),
  fineEnvelope = document.getElementById('fine-envelope')

  var checkboxes = [
    speedingRoad,
    speedingHighway,
    redLight,
    usingPhone,
    alcohol
  ]

  var countries = [
    'nl',
    'be',
    'lu',
    'de'
  ]

  var fineTypes = [
    'speedingRoad',
    'speedingHighway',
    'redLight',
    'usingPhone',
    'alcohol'
  ]

  var fines = {
    speedingRoad: {
      nl: 252,
      be: 207,
      lu: 145,
      de: 80
    },
    speedingHighway: {
      nl: 220,
      be: 143,
      lu: 145,
      de: 70
    },
    redLight: {
      nl: 230,
      be: 174,
      lu: 145, // 49 - 145
      de: 320
    },
    usingPhone: {
      nl: 230,
      be: 116,
      lu: 74,
      de: 250
    },
    alcohol: {
      nl: 425,
      be: 420,
      lu: 1220,
      de: 500
    }
  }

  for (var i=0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', calculatePrice)
  }

  function checkRoute() {
    switch (fromDest.value) {
      case 'amsterdam':
        return 'nl'
        break
      case 'gent':
        return 'be'
        break
      case 'luxemburg':
        return 'lu'
        break
      case 'keulen':
        return 'de'
        break
    }
  }

  function checkBe() {
    var str = ''
    if (speedingRoad.checked) {
      str += '<p>Voor het hard rijden binnen de bebouwde kom krijg je mogelijk een ontzegging van de rijbevoegdheid van 8 dagen tot maximaal 5 jaar. In geval van een rechtszaak: &euro; 80 - 4.000 boete.</p>'
    }

    if (redLight.checked) {
      str += '<p>Voor het rijden door een oranje licht kan je &euro; 116,- boete krijgen.</p>'
    }

    if (alcohol.checked) {
      str += '<p>Voor het rijden onder invloed kan je ook een rijverbod van 6 uur en eventueel ontzegging van de rijbevoegdheid van 15 dagen krijgen.</p>'
    }
    return str
  }

  function checkLu() {
    var str = ''
    if (redLight.checked) {
      str += '<p>Een boete voor het rijden door een rood stoplight kan variëren van &euro; 49 - 145. We zijn uit gegaan van de duurste.</p>'
    }

    if (alcohol.checked) {
      str += '<p>Een boete voor het rijden onder invloed kan variëren van &euro; 24 - 1220. We zijn uit gegaan van de duurste.</p>'
    }
    return str
  }

  function checkDe() {
    var str = ''
    if (speedingRoad.checked) {
      str += '<p>Voor het te hard rijden binnen de bebouwde kom krijg je 1 of 2 strafpunten.</p>'
    }

    if (speedingHighway.checked) {
      str += '<p>Voor het te hard rijden buiten de bebouwde kom krijg je 1 of 2 strafpunten.</p>'
    }

    if (redLight.checked) {
      str += '<p>Voor het rijden door een rood licht krijg je tussen &euro; 90 - 320 boete en 1 of 2 strafpunten.</p>'
    }

    if (usingPhone.checked) {
      str += '<p>Voor het gebruik van een mobiele telefoon tijdens het rijden krijg je tussen &euro; 100 - 250 en 1 strafpunt.</p>'
    }

    if (alcohol.checked) {
      str += '<p>Voor het rijden onder invloed van alcohol krijg je een rijverbod van 1 maand.</p>'
    }
    return str
  }

  function showOtherFines(totalFines, totalPrice, country) {
    if (totalPrice != 0 && country != undefined) {
      otherFines.classList.remove('hidden')

      var str = ''

      if (country != 'nl') {
        str += '<p>Nederland: &euro; ' + totalFines.nl + ',-</p>'
      }
      if (country != 'be') {
        str += '<p>België: &euro; ' + totalFines.be + ',-</p>'
      }
      if (country != 'lu') {
        str += '<p>Luxemburg: &euro; ' + totalFines.lu + ',-</p>'
      }
      if (country != 'de') {
        str += '<p>Duitsland: &euro; ' + totalFines.de + ',-</p>'
      }

      otherCountryFines.innerHTML = str
    } else {
      otherFines.classList.add('hidden')
    }
  }

  function calculatePrice() {
    var totalPrice = 0
    var country = checkRoute()
    var totalFines = {
      nl: 0,
      be: 0,
      lu: 0,
      de: 0
    }

    for (var i=0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        totalPrice += fines[fineTypes[i]][country]

        for (var x = 0; x < countries.length; x++) {
          totalFines[countries[x]] += fines[fineTypes[i]][countries[x]]
        }
      }
    }

    if (country == 'nl') {
      if (alcohol.checked && (speedingRoad.checked || speedingHighway.checked)) {
        map.setAttribute('src', 'img/nederland-verkeersboetes.jpg')
      } else if (alcohol.checked) {
        map.setAttribute('src', 'img/nederland-verkeersboetes-alcohol.jpg')
      } else if (speedingRoad.checked || speedingHighway.checked) {
        map.setAttribute('src', 'img/nederland-verkeersboetes-snelheid.jpg')
      } else {
        map.setAttribute('src', 'img/nederland.jpg')
      }
    }


    switch (country) {
      case 'be':
        notes.innerHTML = checkBe()
        break
        notes.innerHTML = checkLu()
        break
      case 'de':
        notes.innerHTML = checkDe()
        break
      default:
        notes.innerHTML = ''
    }

    showOtherFines(totalFines, totalPrice, country)

    if (isNaN(totalPrice)) {
      price.innerHTML = '&euro;  0,-'
    } else {
      if (country == 'nl' && totalPrice != 0) {
        totalPrice += 9
      }
      price.innerHTML = '&euro; ' + totalPrice + ',-'
      if (totalPrice != 0) {
        payBefore.classList.remove('hidden')
        fineAmount.classList.remove('hidden')
        setEnvelope()
      } else {
        payBefore.classList.add('hidden')
        fineAmount.classList.add('hidden')
      }
    }

    function setEnvelope() {
      console.log(totalPrice)
      if (totalPrice <= 300) {
        fineEnvelope.setAttribute('src', 'img/een-boete.png')
      } else if (totalPrice <= 750) {
        console.log('????')
        fineEnvelope.setAttribute('src', 'img/drie-boetes.png')
      } else {
        console.log('ket')
        fineEnvelope.setAttribute('src', 'img/zes-boetes.png')
      }
    }

  }
}
