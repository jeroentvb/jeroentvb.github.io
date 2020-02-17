<template>
  <div id="app">
    <Heading />
    <Intro />
    <FeaturedWork :work="this.featuredWorkData" />
    <Work :work="this.workData" />
    <About />
  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Intro from './components/AppComponents/Intro.vue'
import FeaturedWork from './components/AppComponents/FeaturedWork.vue'
import Work from './components/AppComponents/Work.vue'
import About from './components/AppComponents/About.vue'

import featuredWorkData from './content/featuredWork.json'
import workData from './content/work.json'

export default {
  name: 'app',
  components: {
    Heading,
    Intro,
    FeaturedWork,
    Work,
    About
  },

  data() {
    return {
      featuredWorkData,
      workData
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/variables';

* {
  box-sizing: border-box;
}

body {
  background-color: $color-bg;
  color: #fff;
  padding: 2rem;
  font-size: 1.125rem;
  font-family: Open Sans;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Source Sans Pro,system-ui,sans-serif;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 3.25rem;
  margin: 0 0 1rem;
}

p {
  font-family: Open Sans,sans-serif;
  line-height: 1.575rem;
  margin: 1rem 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon {
  width: 2.5rem;
}
</style>
