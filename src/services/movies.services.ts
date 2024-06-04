import type { Movie } from '@/types/movies.type'

export const createMovie = async (movie: Omit<Movie, '_id'>) => {
  const response = await fetch('https://crudcrud.com/api/86c42feb3475471fa6d66e7d6933cf4c/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  return (await response.json()) as Movie
}

type GetMovie = () => Promise<Movie[]>
export const getMovies: GetMovie = async () => {
  const response = await fetch('https://crudcrud.com/api/86c42feb3475471fa6d66e7d6933cf4c/movies')
  return await response.json()
}

export const deleteMovieById = async (id: string) => {
  await fetch(`https://crudcrud.com/api/86c42feb3475471fa6d66e7d6933cf4c/movies/${id}`, {
    method: 'DELETE'
  })
}
