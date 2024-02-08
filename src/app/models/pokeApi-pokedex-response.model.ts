export interface PokeApiPokedexResponse {
  descriptions: Description[]
  id: number
  is_main_series: boolean
  name: string
  names: Name[]
  pokemon_entries: PokemonEntry[]
  region: null
}

export interface Description {
  description: string
  language: Language
}

export interface Language {
  name: string
  url: string
}

export interface Name {
  language: Language
  name: string
}

export interface PokemonEntry {
  entry_number: number
  pokemon_species: Language
}
