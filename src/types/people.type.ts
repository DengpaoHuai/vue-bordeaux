export type People = {
  name: string
  height: string
  mass: string
  hair_color: string
}

export type PeopleResponse = {
  count: number
  next: string | null
  previous: string | null
  results: People[]
}
