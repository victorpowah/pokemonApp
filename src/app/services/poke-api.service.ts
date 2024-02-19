import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { PokeApiResponse } from '../models/pokeApi-response.model'
import { PokeApiPokedexResponse } from '../models/pokeApi-pokedex-response.model'
import { PokeApiPokemonSpecieResponse } from '../models/pokeApi-pokemon-specie-response.model'
import { PokeApiPokemonResponse } from '../models/pokeApi-pokemon-respose.model'
import { PokeApiEvolutionChainResponse } from '../models/pokeApi-evolution-chain-response.model'
import { PokeApiItemResponse } from '../models/pokeApi-item-response.model'
import { PokeApiTypeResponse } from '../models/pokeApi-type-response.model'

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private pokeApiUrl = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) {}

  public getTypes(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(`${this.pokeApiUrl}/type`)
  }

  public getPokedexs(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(`${this.pokeApiUrl}/pokedex`)
  }

  public getPokedex(pokedexUrl: string): Observable<PokeApiPokedexResponse> {
    return this.http.get<PokeApiPokedexResponse>(pokedexUrl)
  }

  public getPokemonSpecie(
    pokemonSpecieUrl?: string
  ): Observable<PokeApiPokemonSpecieResponse> {
    return pokemonSpecieUrl
      ? this.http.get<PokeApiPokemonSpecieResponse>(`${pokemonSpecieUrl}`)
      : of({} as PokeApiPokemonSpecieResponse)
  }

  public getPokemon(pokemonUrl: string): Observable<PokeApiPokemonResponse> {
    return this.http.get<PokeApiPokemonResponse>(pokemonUrl)
  }

  public getPokemonById(
    pokemonID?: number
  ): Observable<PokeApiPokemonResponse> {
    return pokemonID
      ? this.http.get<PokeApiPokemonResponse>(
          `${this.pokeApiUrl}/pokemon/${pokemonID}`
        )
      : of({} as PokeApiPokemonResponse)
  }

  public getPokemonSpecieById(
    pokemonID: number
  ): Observable<PokeApiPokemonSpecieResponse> {
    return this.http.get<PokeApiPokemonSpecieResponse>(
      `${this.pokeApiUrl}/pokemon-species/${pokemonID}`
    )
  }

  public getItems(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(`${this.pokeApiUrl}/item`)
  }

  public getItem(itemUrl: string): Observable<PokeApiItemResponse> {
    return this.http.get<PokeApiItemResponse>(itemUrl)
  }

  public getItemsPaginated(itemUrl: string): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(itemUrl)
  }

  public getEvolutionChain(
    evolutionUrl: string
  ): Observable<PokeApiEvolutionChainResponse> {
    return this.http.get<PokeApiEvolutionChainResponse>(evolutionUrl)
  }

  public getType(typeUrl: string | undefined): Observable<PokeApiTypeResponse> {
    return typeUrl
      ? this.http.get<PokeApiTypeResponse>(typeUrl)
      : of({
          damage_relations: {
            double_damage_from: [],
            double_damage_to: [],
            half_damage_from: [],
            half_damage_to: [],
            no_damage_from: [],
            no_damage_to: [],
          },
        } as unknown as PokeApiTypeResponse)
  }
}
