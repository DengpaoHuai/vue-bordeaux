<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';


type Planet = {
    name: string
    diameter: string
    climate: string
    terrain: string
    population: string
    gravity: string
    orbital_period: string
    rotation_period: string
    surface_water: string
    films: string[]
    residents: string[]
    created: string
    edited: string
    url: string
}

type PlanetResponse = {
    count: number
    next: string | undefined
    previous: string | undefined
    results: Planet[]
}

const planets = ref<PlanetResponse>({
    count: 0,
    next: undefined,
    previous: undefined,
    results: []
})
const loading = ref(true)

const getData = async (url: string) => {
    loading.value = true

    await sleep(500)
    const response = await fetch(url)
    const results: PlanetResponse = await response.json()
    planets.value = results
    loading.value = false
}

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

onMounted(() => {
    getData("https://swapi.dev/api/planets")

})




</script>

<template>
    <div class="loading" v-if="loading">

    </div>
    <div v-for="(planet, index) in planets.results" :key="index">
        <p>Name : {{ planet.name }}</p>
    </div>
    <button @click="planets.previous && getData(planets.previous)" :disabled="!planets.previous">
        Previous
    </button>

    <button @click="planets.next && getData(planets.next)" :disabled="!planets.next">

        Next
    </button>


</template>

<style scoped>
.loading {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 4px solid black;
    border-top-color: white;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>