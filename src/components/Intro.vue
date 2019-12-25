<template>
  <section>
    <div class="titles">
      <p class="pre-title">Hoi, ik ben Jeroen</p>
      <h1>Front-end developer bij dag.</h1>
      <h1 class="subtitle">Windsurfer bij, uhm... nacht?</h1>
    </div>
    <div class="content">
      <p>Ik studeer Communication & Multimedia design aan de HvA. Hierbij focus ik me op front-end development. Ik bouw (en design) websites en andere digitale producten.</p>
      <div class="contact-platforms">
        <a href="https://github.com/jeroentvb" target="_blank" rel="noreferrer">
          <GithubLogo />
        </a>
        <a href="https://www.linkedin.com/in/jeroenvanberkum/" target="_blank" rel="noreferrer">
          <LinkedinLogo />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import GithubLogo from '../../public/img/github-logo.svg'
import LinkedinLogo from '../../public/img/linkedin-logo.svg'

export default {
  name: 'intro',
  components: {
    GithubLogo,
    LinkedinLogo
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

section {
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.pre-title {
  font-family: monospace;
  font-size: 1.5rem;
  color: #43a5ff;
}

.subtitle {
  color: $color-grey;
}

.icon {
  width: 2.5rem;
}
</style>
