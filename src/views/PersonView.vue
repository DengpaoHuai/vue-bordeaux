<script setup lang="ts">
import useFetch from '@/composables/useFetch';
import type { People } from '@/types/people.type';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params)

const peopleResponse = useFetch<People>("https://swapi.dev/api/people/" + route.params.id)

</script>

<template>
    <div>
        <p>
            Name : {{ peopleResponse?.name }} <br>
            Height : {{ peopleResponse?.height }} <br>
            Mass : {{ peopleResponse?.mass }} <br>
            Hair color : {{ peopleResponse?.hair_color }}
        </p>
    </div>
    <button>previous</button>
    <button>next</button>
</template>