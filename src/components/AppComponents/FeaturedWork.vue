<template>
<section>
  <h2>Werk</h2>
  <article class="featured-item featured-item--right" v-for="(item, i) in work" :key="i">
    <div class="featured-item__card">
      <p class="featured-text">Uitgelicht</p>
      <h3>{{ item.title }}</h3>
      <div class="info-card info-card--right">
        <p class="text">{{ item.description }}</p>

        <div>
          <div class="skills">
            <p v-for="skill in item.skills" :key="skill" class="monospace">{{ skill }}</p>
          </div>
          <a :if="item.github" :href="item.github" target="_blank" rel="noreferrer">
            <GithubLogo />
          </a>
          <a :if="item.external" :href="item.external" target="_blank" rel="noreferrer">
            <ExternalLinkSvg />
          </a>
        </div>
      </div>
    </div>
    <a :href="item.image.link" target="_blank" rel="noreferrer">
      <ImageComponent
        :webp="item.image.webp"
        :img="item.image.img"
        :alt="item.image.alt"
      />
    </a>
  </article>
</section>  
</template>

<script>
import ImageComponent from '../ImageComponent'
import GithubLogo from '../../../public/img/github-logo.svg'
import ExternalLinkSvg from '../../../public/img/external-link.svg'

export default {
  name: 'featuredWork',
  components: {
    GithubLogo,
    ImageComponent,
    ExternalLinkSvg
  },
  props: {
    work: Array
  }
}
</script>

<style scoped>

</style>
