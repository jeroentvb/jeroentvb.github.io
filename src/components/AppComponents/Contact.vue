<template>
  <section>
    <h2>Contact</h2>
    <p>Heb je een vraag? Heb je een supercool project waar ik zeker vanaf moet weten? Of wil je een keer samen windsurfen?</p>
    <p>Ik ben te vinden op</p>

    <div class="contact-list">
      <ul>
        <li>
          <a href="https://github.com/jeroentvb" target="_blank" rel="noreferrer">
            <GithubLogo />
          </a>
          <a href="https://github.com/jeroentvb" target="_blank" rel="noreferrer" class="link">
            Github: jeroentvb
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeroenvanberkum/" target="_blank" rel="noreferrer">
            <LinkedinLogo />
          </a>
          <a href="https://www.linkedin.com/in/jeroenvanberkum/" target="_blank" rel="noreferrer" class="link">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import GithubLogo from '../../../public/img/github-logo.svg'
import LinkedinLogo from '../../../public/img/linkedin-logo.svg'

export default {
  name: 'Contact',
  components: {
    GithubLogo,
    LinkedinLogo
  }
}
</script>