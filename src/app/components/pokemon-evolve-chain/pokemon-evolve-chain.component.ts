import { Component, Input, inject } from '@angular/core'
import { takeUntil, mergeMap, forkJoin, map, Subject } from 'rxjs'
import { PokeApiEvolutionChainResponse } from '../../models/pokeApi-evolution-chain-response.model'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeApiService } from '../../services/poke-api.service'
import { RouterLink } from '@angular/router'
import { PokemonEvolutionDescriptionPipe } from '../../pipes/pokemon-evolution-description.pipe'

@Component({
  selector: 'app-pokemon-evolve-chain',
  standalone: true,
  imports: [RouterLink, PokemonEvolutionDescriptionPipe],
  templateUrl: './pokemon-evolve-chain.component.html',
  styleUrl: './pokemon-evolve-chain.component.scss',
})
export class PokemonEvolveChainComponent {
  private _pokemon!: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }

  @Input() set pokemon(pokemon: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }) {
    this._pokemon = pokemon
    this.getEvolutionChain()
  }

  get pokemon(): {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  } {
    return this._pokemon
  }

  public evolutionChain: PokeApiEvolutionChainResponse | undefined

  public ev1: PokeApiPokemonResponse | undefined
  public ev2: PokeApiPokemonResponse | undefined
  public ev3: PokeApiPokemonResponse | undefined

  private readonly pokeApiService = inject(PokeApiService)
  private destroy$ = new Subject<void>()

  private getEvolutionChain(): void {
    this.pokeApiService
      .getEvolutionChain(this.pokemon.pokemonSpecieResult.evolution_chain.url)
      .pipe(
        takeUntil(this.destroy$),
        mergeMap((evolutionChain: PokeApiEvolutionChainResponse) =>
          forkJoin({
            ev1: this.pokeApiService.getPokemonSpecie(
              evolutionChain.chain.species.url
            ),
            ev2: this.pokeApiService.getPokemonSpecie(
              evolutionChain.chain.evolves_to[0]?.species.url
            ),
            ev3: this.pokeApiService.getPokemonSpecie(
              evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species.url
            ),
          }).pipe(
            map(
              (pokemonsResult: {
                ev1: PokeApiPokemonSpecieResponse
                ev2: PokeApiPokemonSpecieResponse
                ev3: PokeApiPokemonSpecieResponse
              }) => {
                return { evolutionChain, pokemonsResult }
              }
            )
          )
        ),
        mergeMap(
          (pokemonsSpeciesResult: {
            evolutionChain: PokeApiEvolutionChainResponse
            pokemonsResult: {
              ev1: PokeApiPokemonSpecieResponse
              ev2: PokeApiPokemonSpecieResponse
              ev3: PokeApiPokemonSpecieResponse
            }
          }) =>
            forkJoin({
              ev1: this.pokeApiService.getPokemonById(
                pokemonsSpeciesResult.pokemonsResult.ev1?.id
              ),
              ev2: this.pokeApiService.getPokemonById(
                pokemonsSpeciesResult.pokemonsResult.ev2?.id
              ),
              ev3: this.pokeApiService.getPokemonById(
                pokemonsSpeciesResult.pokemonsResult.ev3?.id
              ),
            }).pipe(
              map(
                (pokemonsResult: {
                  ev1: PokeApiPokemonResponse
                  ev2: PokeApiPokemonResponse
                  ev3: PokeApiPokemonResponse
                }) => {
                  return { pokemonsSpeciesResult, pokemonsResult }
                }
              )
            )
        )
      )
      .subscribe(
        (pokemonsResult: {
          pokemonsSpeciesResult: {
            evolutionChain: PokeApiEvolutionChainResponse
            pokemonsResult: {
              ev1: PokeApiPokemonSpecieResponse
              ev2: PokeApiPokemonSpecieResponse
              ev3: PokeApiPokemonSpecieResponse
            }
          }
          pokemonsResult: {
            ev1: PokeApiPokemonResponse
            ev2: PokeApiPokemonResponse
            ev3: PokeApiPokemonResponse
          }
        }) => {
          this.evolutionChain =
            pokemonsResult.pokemonsSpeciesResult.evolutionChain
          this.ev1 = pokemonsResult.pokemonsResult.ev1
          this.ev2 = pokemonsResult.pokemonsResult.ev2
          this.ev3 = pokemonsResult.pokemonsResult.ev3
        }
      )
  }
}
