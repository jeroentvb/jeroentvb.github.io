const app = require('express')
const fs = require('fs')
const work = require('../src/work.json')
const translations = require('../src/translations.json')
const chokidar = require('chokidar')
const watcher = chokidar.watch('src', {
  ignored: /(^|[/\\])\../
})

const server = app()
  .set('view engine', 'ejs')
  .set('views', 'src/pages')
  .use(app.static('src'))

  .get('/', index)
  .get('/:id', render)

  .use(notFound)
  .listen(3000, () => console.log(`[Server] listening on port 3000...`))

const io = require('socket.io')(server)

function index (req, res) {
  res.render('index', {
    pagename: 'Home',
    work: work,
    translations: translations,
    liveReload: `<script src="/devDependencies/socket.io.js"></script><script src="/devDependencies/live-reload.js"></script>`
  })
}

function render (req, res) {
  if (!req.url.includes('.html')) {
    console.log(`Please link your files including '.html'`)
    res.send(`Please link your files including '.html'`)
    return
  }

  const id = req.url.replace('/', '').replace('.html', '')

  if (fs.existsSync(`src/pages/${id}.ejs`)) {
    res.render(id, {
      pagename: id.charAt(0).toUpperCase() + id.substr(1),
      work: work,
      translations: translations,
      liveReload: `<script src="/devDependencies/socket.io.js"></script><script src="/devDependencies/live-reload.js"></script>`
    })
  } else {
    notFound(req, res)
  }
}

function notFound (req, res) {
  res.status(404).send('404 not found')
}

watcher
  .on('add', path => io.emit('reload'))
  .on('change', path => io.emit('reload'))
  .on('unlink', path => io.emit('reload'))
  .on('error', err => console.error('Error happened', err))
