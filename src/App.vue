<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, onUpdated } from 'vue';
import CounterView from './components/CounterView.vue';
import HelloWorld from './components/HelloWorld.vue';
import PlanetView from './views/PlanetView.vue';
import PeopleView from './views/PeopleView.vue';
const demo = "toto"



onBeforeMount(() => {
  console.log("pas encore monté")
})

onMounted(() => {
  console.log("monté")
})

onUpdated(() => {
  console.log("mis à jour")
})

onUnmounted(() => {
  console.log("démonté")
})

</script>

<template>
  <main>
    <CounterView></CounterView>
    <PlanetView></PlanetView>

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
