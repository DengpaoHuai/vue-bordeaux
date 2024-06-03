<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue';
const counter = reactive({
    nom: 0,
    prenom: "toto"
})

const updateCounter = () => {
    counter.nom = 0
    console.log(counter)
}

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
    <p>
        counter : {{ counter.nom }}
    </p>
    <button v-on:click="updateCounter">
        increment
    </button>
</template>