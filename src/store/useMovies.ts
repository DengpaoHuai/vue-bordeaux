import { getMovies } from '@/services/movies.services'
import type { Movie } from '@/types/movies.type'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

const useMovies = defineStore(
  'movies',
  () => {
    const movies = ref<Movie[]>([])

    onMounted(() => {
      getMovies().then((response) => {
        movies.value = response
      })
    })

    const addMovie = (movie: Movie) => {
      movies.value.push(movie)
    }

    return {
      movies,
      addMovie
    }
  },
  {
    persist: true
  }
)

export default useMovies
