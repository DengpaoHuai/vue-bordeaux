/*fetch('https://swapi.dev/api/planets')
  .then((response) => response.json())
  .then((resultats) => console.log(resultats))
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('c finiiii')
  })*/

export const getData = async () => {
  const response = await fetch('https://swapi.dev/api/planets')
  const results = await response.json()
  console.log('là')
  return results
}

export const createPlanet = async (planet) => {
  const response = await fetch('https://swapi.dev/api/planets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(planet)
  })
  return await response.json()
}

export const deletePlanet = async (id) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
    method: 'DELETE'
  })
  return await response.json()
}
