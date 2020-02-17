<template>
  <section>
    <h2>Over mij</h2>

    <div>
      <p>Al vanaf jongs af aan ben ik geïnteresseerd in computers. Daar wilde ik later wat mee gaan doen, en dat is front-end development geworden. Doordat ik Communication and Multimedia Design studeer krijg leer ik niet alleen hoe ik een fraaie front-end in elkaar zet maar ook hoe ik de gebruikservaring prettig maak en hoe ik het er een beetje mooi uit kan laten zien.</p>
      <p>Wanneer ik niet bezig ben met school of werk en het waait ben ik aan het windsurfen. Dat is tevens mijn grootste hobby.</p>
      <p>Wanneer het niet waait ben ik vaak bezig met mijn persoonlijke projecten, die meestal wat te maken hebben met wind. <a href="https://github.com/jeroentvb" target="_blank" rel="noreferrer">Zie daarvoor mijn github</a>.</p>
    </div>

    <div>
      <h3>Skills</h3>
      <div>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>NodeJs</li>
          <li>Git</li>
        </ul>

        <ul>
          <li>Angular</li>
          <li>Vue</li>
          <li>Sketch</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </div>

    <div class="portrait-holder">
      <div class="portrait-container">
        <div class="overlay"></div>
        <ImageComponent 
          :img="'img/jeroen.jpg'"
          :webp="'img/jeroen.webp'"
          :alt="'portret van Jeroen'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ImageComponent from '../ImageComponent'

export default {
  name: 'About',
  components: {
    ImageComponent
  }
}
</script>
