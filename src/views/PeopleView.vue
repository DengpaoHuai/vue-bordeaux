<script setup lang="ts">
import useFetch from '@/composables/useFetch';
import type { PeopleResponse } from '@/types/people.type';

const peopleResponse = useFetch<PeopleResponse>("https://swapi.dev/api/people")

</script>

<template>
    <div v-for="(people, index) in peopleResponse?.results" :key="index">
        <p>
            Name : {{ people.name }} <br>
            Height : {{ people.height }} <br>
            Mass : {{ people.mass }} <br>
            Hair color : {{ people.hair_color }}
        </p>
    </div>
    <button>previous</button>
    <button>next</button>
</template>