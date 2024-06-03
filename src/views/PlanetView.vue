<script setup lang="ts">
import { ref } from 'vue';
import ListMachin from '../components/ListMachin.vue';

type Planet = {
    name: string;
    population: number;
}

const planets = ref<Planet[]>([
    {
        name: "Demo",
        population: 150000
    },
    {
        name: "Demo 1",
        population: 150000
    },
    {
        name: "Demo 2",
        population: 150000
    }
])


</script>

<template>

    <ListMachin :list="planets" keyObject="name"></ListMachin>


</template>