<script setup lang="ts">
import { deleteMovieById, getMovies } from '@/services/movies.services';
import useMovies from '@/store/useMovies';
import { type Movie } from '@/types/movies.type';
import { onMounted, ref } from 'vue';

const movies = useMovies()



</script>


<template>
    <div>
        <h1>List of Movies</h1>
        <RouterLink to="/create/movie">Create Movie</RouterLink>
        <ul>
            <li v-for="movie in movies.movies" :key="movie._id">
                <h2>{{ movie.title }}</h2>
                <p>{{ movie.director }}</p>
                <p>{{ movie.description }}</p>
            </li>
        </ul>
    </div>
</template>
