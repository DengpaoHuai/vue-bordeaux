<script setup lang="ts">
import { ref } from 'vue';
import ListMachin from '../components/ListMachin.vue';

type People = {
    name: string;
    size: number;
}

const people = ref<People[]>([
    {
        name: "Demo",
        size: 150000
    },
    {
        name: "Demo 1",
        size: 150000
    },
    {
        name: "Demo 2",
        size: 150000
    }
])


</script>

<template>

    <ListMachin :list="people" keyObject="name"></ListMachin>


</template>