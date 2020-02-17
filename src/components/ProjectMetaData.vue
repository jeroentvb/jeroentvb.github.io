<template>
  <div>
    <div class="skills">
      <p v-for="skill in skills" :key="skill" class="monospace">{{ skill }}</p>
    </div>
    <a v-if="githubLink" :href="githubLink" target="_blank" rel="noreferrer">
      <GithubLogo />
    </a>
    <a v-if="externalLink" :href="externalLink" target="_blank" rel="noreferrer">
      <ExternalLinkSvg />
    </a>
  </div>
</template>

<script>
import GithubLogo from '../../public/img/github-logo.svg'
import ExternalLinkSvg from '../../public/img/external-link.svg'

export default {
  name: 'ProjectMetaData',
  components: {
    GithubLogo,
    ExternalLinkSvg
  },
  props: {
    skills: Array,
    githubLink: String,
    externalLink: String
  }
}
</script>