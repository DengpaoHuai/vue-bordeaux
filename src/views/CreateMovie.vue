<script setup lang="ts">
import { createMovie } from '@/services/movies.services';
import useMovies from '@/store/useMovies';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const { addMovie } = useMovies()

const form = reactive({
    title: "",
    director: "",
    description: "",

})

const onSubmit = async () => {
    console.log(form)
    await addMovie(form)
    router.push("/list_movies")
}

</script>


<template>

    <form @submit.prevent="onSubmit">
        <input v-model="form.title" name="title" type="text" placeholder="Title" />
        <input v-model="form.director" name="director" type="text" placeholder="Director" />
        <input v-model="form.description" name="description" type="text" placeholder="Description" />
        <button>display values</button>

    </form>


</template>