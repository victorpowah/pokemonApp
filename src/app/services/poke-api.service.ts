import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PokeApiResponse } from '../models/pokeApi-response.model'
import { PokeApiPokedexResponse } from '../models/pokeApi-pokedex-response.model'
import { PokeApiPokemonSpecieResponse } from '../models/pokeApi-pokemon-specie-response.model'
import { PokeApiPokemonResponse } from '../models/pokeApi-pokemon-respose.model'

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private pokeApiUrl = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) {}

  getTypes(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(`${this.pokeApiUrl}/type`)
  }

  getPokedexs(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(`${this.pokeApiUrl}/pokedex`)
  }

  getPokedex(pokedexUrl: string): Observable<PokeApiPokedexResponse> {
    return this.http.get<PokeApiPokedexResponse>(pokedexUrl)
  }

  getPokemonSpecie(
    pokemonSpecieUrl: string
  ): Observable<PokeApiPokemonSpecieResponse> {
    return this.http.get<PokeApiPokemonSpecieResponse>(`${pokemonSpecieUrl}`)
  }

  getPokemon(pokemonUrl: string): Observable<PokeApiPokemonResponse> {
    return this.http.get<PokeApiPokemonResponse>(pokemonUrl)
  }
}
