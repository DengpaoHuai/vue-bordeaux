<script setup lang="ts">
import useFetch from '@/composables/useFetch';
import router from '@/router/routes';
import { deleteMovieById } from '@/services/movies.services';
import { type Movie } from '@/types/movies.type';

const {
    data: movies,
    refetch,
} = useFetch<Movie[]>('https://crudcrud.com/api/9483b9bbbde446c4a634a2ec6a626a79/movies');

const deleteItem = async (id: string) => {
    await deleteMovieById(id)
    refetch()
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
                <button @click="deleteItem(movie._id)">delete</button>
            </li>
        </ul>
    </div>
</template>
