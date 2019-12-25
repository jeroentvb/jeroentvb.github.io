<template>
  <header>
    <ul>
      <li><a href="#intro"><img src="/img/jeroentvb-logo-light-blue.svg" alt="logo"></a></li>
      <li><a href="#featured-work" class="menu-item">Werk</a></li>
      <li><a href="#about" class="menu-item">Over mij</a></li>
      <li><a href="#contact" class="menu-item">Contact</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'heading'
}
</script>

<style lang="scss" scoped>
header {
  height: 4rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      &:first-of-type {
        flex-grow: 1;
        a:hover {
          border-bottom: none;
        }
      }
      &:not(:first-of-type) {
        margin-left: 2rem;
      }
      &:last-of-type {
        a {
          padding: .5rem 1rem;
          transition: .2s;
          background-color: #00376f;
          &:hover {
            border-bottom: none;
            background-color: #43a5ff;
          }
        }
      }

      a {
        color: #fff;
        text-decoration: none;
        transition: .2s;
        &:hover {
          border-bottom: 2px solid #fff;
        }

        img {
          width: 4rem;
        }
      }
    }
  }
}
</style>
