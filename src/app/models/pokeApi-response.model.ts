import { PokeApiInfo } from './pokeApi-info.model'

export interface PokeApiResponse {
  count: number
  next: string
  previous: string
  results: PokeApiInfo[]
}
