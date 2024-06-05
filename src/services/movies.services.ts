import type { Movie } from '@/types/movies.type'

export const createMovie = async (movie: Omit<Movie, '_id'>) => {
  const response = await fetch('https://crudcrud.com/api/73bdcbfaa9bb43f38610cdf22f42c8fa/movies', {
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
  const response = await fetch('https://crudcrud.com/api/73bdcbfaa9bb43f38610cdf22f42c8fa/movies')
  return await response.json()
}

export const deleteMovieById = async (id: string) => {
  await sleep(1500)
  await fetch(`https://crudcrud.com/api/73bdcbfaa9bb43f38610cdf22f42c8fa/movies/${id}`, {
    method: 'DELETE'
  })
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const updateMovieById = async (id: string, movie: Omit<Movie, '_id'>) => {
  await fetch(`https://crudcrud.com/api/73bdcbfaa9bb43f38610cdf22f42c8fa/movies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
}

export const getMovieById = async (id: string) => {
  const response = await fetch(
    `https://crudcrud.com/api/73bdcbfaa9bb43f38610cdf22f42c8fa/movies/${id}`
  )
  return (await response.json()) as Movie
}
