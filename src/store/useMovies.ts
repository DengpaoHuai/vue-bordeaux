import {
  createMovie,
  deleteMovieById,
  getMovies,
  updateMovieById
} from '@/services/movies.services'
import type { Movie } from '@/types/movies.type'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

const useMovies = defineStore(
  'movies',
  () => {
    const movies = ref<Movie[]>([])
    const loading = ref(false)

    onMounted(() => {
      loading.value = true
      getMovies().then((response) => {
        movies.value = response
        loading.value = false
      })
    })

    const deleteMovie = async (id: string) => {
      await deleteMovieById(id)
      movies.value = movies.value.filter((movie) => movie._id !== id)
    }

    const addMovie = async (movie: Omit<Movie, '_id'>) => {
      const data = await createMovie(movie)
      movies.value.push(data)
    }

    const updateMovie = async (id: string, movie: Omit<Movie, '_id'>) => {
      await updateMovieById(id, movie)
      const index = movies.value.findIndex((movie) => movie._id === id)
      movies.value[index] = { ...movie, _id: id }
    }

    const getMovieById = (id: string) => {
      return movies.value.find((movie) => movie._id === id)
    }

    return {
      movies,
      addMovie,
      loading,
      deleteMovie,
      updateMovie,
      getMovieById
    }
  },
  {
    persist: true
  }
)

export default useMovies
