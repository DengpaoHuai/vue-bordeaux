export type Planet = {
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

export type PlanetResponse = {
    count: number
    next: string | undefined
    previous: string | undefined
    results: Planet[]
}