<script setup lang="ts">
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route)

const graphik = inject('graphik');
console.log(graphik)


const display = inject('display');
</script>

<template>
  <main>
    <component :is="route.meta.layout ?? 'DefaultLayout'">

      <RouterView></RouterView>

    </component>
    <CustomGraphikButton></CustomGraphikButton>
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
