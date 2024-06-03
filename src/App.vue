<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
const demo = "toto"

</script>

<template>
  <main>
    <HelloWorld :demo="demo">
      <template #header>
        <h2>mon header</h2>
      </template>
      <template #default>
        <p>content</p>
      </template>
      <template #footer>
        <p>footer</p>
      </template>
    </HelloWorld>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
