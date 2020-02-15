<template>
  <div class="contact-platforms">
    <a href="https://github.com/jeroentvb" target="_blank" rel="noreferrer">
      <GithubLogo />
    </a>
    <a href="https://www.linkedin.com/in/jeroenvanberkum/" target="_blank" rel="noreferrer">
      <LinkedinLogo />
    </a>
  </div>
</template>

<script>
import GithubLogo from '../../public/img/github-logo.svg'
import LinkedinLogo from '../../public/img/linkedin-logo.svg'

export default {
  name: 'ContactPlatforms',
  components: {
    GithubLogo,
    LinkedinLogo
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

.contact-platforms {
  a {
    svg:hover g g path, svg:hover path {
      transition: .2s;
      fill: $color-light-blue;
    }

    &:first-of-type {
      margin-right: 1em;
    }
  }
}
</style>