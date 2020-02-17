<template>
  <section>
    <h2>Andere projecten</h2>

    <article v-for="(item, i) in work" :key="i">
      <div class="item__header">
        <ImageComponent
          :img="item.image.img"
          :webp="item.image.webp"
          :alt="item.image.alt"
        />
      </div>

      <div class="item__content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        
        <ProjectMetaData 
          :skills="item.skills"
          :githubLink="item.github"
          :externalLink="item.external"
        />
      </div>
    </article>
  </section>
</template>

<script>
import ImageComponent from '../ImageComponent'
import ProjectMetaData from '../ProjectMetaData'

export default {
  name: 'Work',
  components: {
    ImageComponent,
    ProjectMetaData
  },
  props: {
    work: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
