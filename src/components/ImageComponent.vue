<template>
  <picture>
    <source :srcset="this.webp" type="image/webp" >
    <source :srcset="this.img" type="image/jpeg">
    <img :src="this.img" :alt="this.alt">
  </picture>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    webp: String,
    img: String,
    alt: String
  }
}
</script>