import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core'
import { PokeApiService } from '../../services/poke-api.service'
import { Subject, map, mergeMap, takeUntil } from 'rxjs'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent implements OnInit, OnDestroy {
  _pokemonUrl: string = ''

  get pokemonUrl(): string {
    return this._pokemonUrl
  }

  @Input() set pokemonUrl(pokemonUrl: string) {
    this._pokemonUrl = pokemonUrl
    this.getPokemon()
  }

  public pokemon!: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }

  private readonly pokeApiService = inject(PokeApiService)

  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.getPokemon()
  }

  private getPokemon(): void {
    this.pokeApiService
      .getPokemonSpecie(this.pokemonUrl)
      .pipe(
        takeUntil(this.destroy$),
        mergeMap((pokemonSpecieResult) =>
          this.pokeApiService
            .getPokemon(pokemonSpecieResult.varieties[0].pokemon.url)
            .pipe(
              map((pokemonResult) => {
                return { pokemonSpecieResult, pokemonResult }
              })
            )
        )
      )
      .subscribe(
        (pokemonSpecieResult: {
          pokemonSpecieResult: PokeApiPokemonSpecieResponse
          pokemonResult: PokeApiPokemonResponse
        }) => {
          this.pokemon = pokemonSpecieResult
        }
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
