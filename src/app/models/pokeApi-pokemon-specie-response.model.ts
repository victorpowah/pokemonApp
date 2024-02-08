export interface PokeApiPokemonSpecieResponse {
  base_happiness: number
  capture_rate: number
  color: Color
  egg_groups: Color[]
  evolution_chain: EvolutionChain
  evolves_from_species: null
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: []
  forms_switchable: boolean
  gender_rate: number
  genera: Genus[]
  generation: Color
  growth_rate: Color
  habitat: null
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: Name[]
  order: number
  pal_park_encounters: []
  pokedex_numbers: PokedexNumber[]
  shape: null
  varieties: Variety[]
}

export interface Color {
  name: string
  url: string
}

export interface EvolutionChain {
  url: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: Color
  version: Color
}

export interface Genus {
  genus: string
  language: Color
}

export interface Name {
  language: Color
  name: string
}

export interface PokedexNumber {
  entry_number: number
  pokedex: Color
}

export interface Variety {
  is_default: boolean
  pokemon: Color
}
