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

export const getData = async () => {
  const response = await fetch('https://swapi.dev/api/planets')
  const results: PlanetResponse = await response.json()
  return results
}

const demo = await getData()

type DeletePlanetFn = (id: string) => Promise<void>

export const deletePlanet = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
    method: 'DELETE'
  })
  await response.json()
}
