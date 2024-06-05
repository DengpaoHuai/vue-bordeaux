/*fetch('https://swapi.dev/api/planets')
  .then((response) => response.json())
  .then((resultats) => console.log(resultats))
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('c finiiii')
  })*/

type Planet = {
  name: string
  diameter: string
  climate: string
  terrain: string
  population: string
  gravity: string
  orbital_period: string
  rotation_period: string
  surface_water: string
  films: string[]
  residents: string[]
  created: string
  edited: string
  url: string
}

type PlanetResponse = {
  count: number
  next: string | undefined
  previous: string | undefined
  results: Planet[]
}

type GetDataFn = () => Promise<PlanetResponse>

export const getData = async (page = 1) => {
  const response = await fetch('https://swapi.dev/api/planets?page=' + page)
  const results: PlanetResponse = await response.json()
  return results
}

const demo = await getData()

type DeletePlanetFn = (id: string) => Promise<void>

export const deletePlanet = async (id: string) => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
      method: 'DELETE'
    })
    await response.json()
  } catch (error: unknown) {
    //narrowing
    if (error instanceof Error) {
      console.error(error.message)
      logger(error.message)
    }
    if (typeof error === 'string') {
      console.error(error)
      logger(error)
    } else {
      console.error('unknown error')
      logger('unknown error')
    }
  }
  return 'ok'
}

const logger = (message: string) => {
  console.log(message)
}

export const addition = (a: number, b: number): number => {
  return a + b
}
