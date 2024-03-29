// Generated by https://quicktype.io

export interface PokeApiEvolutionChainResponse {
  baby_trigger_item: null
  chain: Chain
  id: number
}

export interface Chain {
  evolution_details: EvolutionDetail[]
  evolves_to: Chain[]
  is_baby: boolean
  species: NamedAPIResource
}

export interface EvolutionDetail {
  gender: unknown
  held_item: NamedAPIResource
  item: NamedAPIResource
  known_move: NamedAPIResource
  known_move_type: NamedAPIResource
  location: NamedAPIResource
  min_affection: unknown
  min_beauty: unknown
  min_happiness: unknown
  min_level: number
  needs_overworld_rain: boolean
  party_species: NamedAPIResource
  party_type: NamedAPIResource
  relative_physical_stats: unknown
  time_of_day: string
  trade_species: NamedAPIResource
  trigger: NamedAPIResource
  turn_upside_down: boolean
}

export interface NamedAPIResource {
  name: string
  url: string
}
