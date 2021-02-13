module.exports = {
  build: {
    minify: {
      js: true,
      css: true
    },
    encodeImagesWebp: true,
    pageTitle: {
      home: 'Home',
      suffix: ''
    }
  },
  development: {
    removeWebpSources: true,
    staticSite: true
  },
  customTemplateVariables: {
    translations: require('./src/translations.json'),
    work: require('./src/work.json')
  },
  sass: true
}
