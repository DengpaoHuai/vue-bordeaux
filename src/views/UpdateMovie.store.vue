<script setup lang="ts">
import useMovies from '@/store/useMovies';
import { onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const movieStore = useMovies()
const { updateMovie, getMovieById } = movieStore
const id = route.params.id as string

const form = reactive({
    title: "",
    director: "",
    description: "",
})

const getData = () => {
    if (!id) return router.push("/list_movies")
    const currentMovie = getMovieById(id)
    if (!currentMovie) return
    form.title = currentMovie.title
    form.director = currentMovie.director
    form.description = currentMovie.description
}

onMounted(getData)
watch(() => movieStore.movies, getData)

const onSubmit = async () => {
    console.log(form)
    await updateMovie(route.params.id, form)
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