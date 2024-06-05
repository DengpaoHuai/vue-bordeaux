<script setup lang="ts">
import { deleteMovieById, getMovieById, getMovies } from '@/services/movies.services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';

const queryClient = useQueryClient()

const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies
})
const { error, mutate } = useMutation({
    mutationFn: deleteMovieById,
    onMutate: async (currentId) => {
        await queryClient.cancelQueries({ queryKey: ['movies'] })

        const previousTodo = queryClient.getQueryData(['movies'])

        queryClient.setQueryData(['movies'], (old) => old.filter((movie) => movie._id !== currentId))

        return { previousTodo }
    },
})



const prefetchMovie = async (id: string) => {
    await queryClient.prefetchQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieById(id),
    })
}
</script>


<template>
    <div>
        <p v-if="isLoading">loading</p>
        <h1>List of Movies</h1>
        <RouterLink to="/create/movie">Create Movie</RouterLink>
        <ul>
            <li v-for="movie in movies" :key="movie._id">

                <h2>{{ movie.title }}</h2>
                <p>{{ movie.director }}</p>
                <p>{{ movie.description }}</p>
                <RouterLink @mouseover="prefetchMovie(movie._id)"
                    :to="{ name: 'EditMovie', params: { id: movie._id } }">Edit</RouterLink>
                <button @click="mutate(movie._id)">Delete</button>
            </li>
        </ul>
    </div>
</template>
