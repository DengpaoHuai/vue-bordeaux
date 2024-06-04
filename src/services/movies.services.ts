import type { Movie } from '@/types/movies.type'

export const createMovie = async (movie: Omit<Movie, '_id'>) => {
  const response = await fetch('https://crudcrud.com/api/9483b9bbbde446c4a634a2ec6a626a79/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  await response.json()
}

type GetMovie = () => Promise<Movie[]>
export const getMovies: GetMovie = async () => {
  const response = await fetch('https://crudcrud.com/api/9483b9bbbde446c4a634a2ec6a626a79/movies')
  return await response.json()
}

export const deleteMovieById = async (id: string) => {
  await fetch(`https://crudcrud.com/api/9483b9bbbde446c4a634a2ec6a626a79/movies/${id}`, {
    method: 'DELETE'
  })
}
