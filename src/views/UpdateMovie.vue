<script setup lang="ts">
import { getMovieById } from '@/services/movies.services';
import useMovies from '@/store/useMovies';
import { useQuery } from '@tanstack/vue-query';
import { onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const id = route.params.id as string

const { data } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
})


const form = reactive({
    title: "",
    director: "",
    description: "",
})

const getData = () => {
    if (!id) return router.push("/list_movies")
    if (!data.value) return
    form.title = data.value.title
    form.director = data.value.director
    form.description = data.value.description
}

onMounted(getData)

const onSubmit = async () => {
    console.log(form)
    // await updateMovie(route.params.id, form)
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