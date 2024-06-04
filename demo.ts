interface Demo {
  name: string
  age: number
}

interface Demo {
  address: string
}

const demo: Demo = {
  name: 'John',
  age: 25
}

//Génériques

const getData = async <T>() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const results: T = await response.json()
  return results
}

type PeopleResponse = {
  count: number
  next: string | null
  previous: string | null
}

const data = await getData<PeopleResponse>()
