<script setup lang="ts">
import useMovies from '@/store/useMovies';
import { storeToRefs } from 'pinia';

const movieStore = useMovies()
const { movies, loading } = storeToRefs(movieStore)
const { deleteMovie } = movieStore
</script>


<template>
    <div>
        <p v-if="loading">loading</p>
        <h1>List of Movies</h1>
        <RouterLink to="/create/movie">Create Movie</RouterLink>
        <ul>
            <li v-for="movie in movies" :key="movie._id">

                <h2>{{ movie.title }}</h2>
                <p>{{ movie.director }}</p>
                <p>{{ movie.description }}</p>
                <RouterLink :to="{ name: 'EditMovie', params: { id: movie._id } }">Edit</RouterLink>
                <button @click="deleteMovie(movie._id)">Delete</button>
            </li>
        </ul>
    </div>
</template>
