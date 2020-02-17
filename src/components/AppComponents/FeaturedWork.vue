<template>
<section>
  <h2>Werk</h2>
  <article class="featured-item featured-item--right" v-for="(item, i) in work" :key="i">
    <div class="featured-item__card">
      <p class="featured-text">Uitgelicht</p>
      <h3>{{ item.title }}</h3>
      <div class="info-card info-card--right">
        <p class="text">{{ item.description }}</p>

        <ProjectMetaData :skills="item.skills" :githubLink="item.github" :externalLink="item.external" />
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
import ProjectMetaData from '../ProjectMetaData'

export default {
  name: 'featuredWork',
  components: {
    ImageComponent,
    ProjectMetaData
  },
  props: {
    work: Array
  }
}
</script>

<style scoped>

</style>
