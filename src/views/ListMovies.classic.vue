<script setup lang="ts">
import { deleteMovieById, getMovies } from '@/services/movies.services';
import { type Movie } from '@/types/movies.type';
import { onMounted, ref } from 'vue';

const movies = ref<Movie[]>([]);

onMounted(() => {
    getMovies().then((response) => {
        console.log(response);
        movies.value = response
    });
})

const deleteMovie = async (id: string) => {
    await deleteMovieById(id)
    movies.value = movies.value.filter(movie => movie._id !== id)
}


</script>


<template>
    <div>
        <h1>List of Movies</h1>
        <ul>
            <li v-for="movie in movies" :key="movie._id">
                <h2>{{ movie.title }}</h2>
                <p>{{ movie.director }}</p>
                <p>{{ movie.description }}</p>
                <button @click="deleteMovie(movie._id)">delete</button>
            </li>
        </ul>
    </div>
</template>
