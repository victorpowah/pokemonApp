import { Component, Input, inject } from '@angular/core'
import { PokeApiService } from '../../services/poke-api.service'
import { map, mergeMap, takeUntil } from 'rxjs'
import {
  FlavorTextEntry,
  PokeApiPokemonSpecieResponse,
} from '../../models/pokeApi-pokemon-specie-response.model'
import {
  PokeApiPokemonResponse,
  Stat,
} from '../../models/pokeApi-pokemon-respose.model'
import { CommonModule, DecimalPipe } from '@angular/common'
import { ReplaceCommaPipe } from '../../pipes/replace-comma.pipe'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { DestroyService } from '../../services/destroy.service'

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, DecimalPipe, ReplaceCommaPipe, ProgressSpinnerModule],
  providers: [DestroyService],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  _pokemonUrl: string = ''

  public divide_factor = 10

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

  public pokemonHP: number = 0

  public pokemonText: string = ''

  private readonly pokeApiService = inject(PokeApiService)

  private destroy$ = inject(DestroyService)

  private getPokemon(): void {
    this.pokeApiService
      .getPokemonSpecie(this.pokemonUrl)
      .pipe(
        takeUntil(this.destroy$),
        mergeMap((pokemonSpecieResult: PokeApiPokemonSpecieResponse) =>
          this.pokeApiService
            .getPokemon(pokemonSpecieResult.varieties[0].pokemon.url)
            .pipe(
              takeUntil(this.destroy$),
              map((pokemonResult: PokeApiPokemonResponse) => {
                this.calculatePokemonAttrs(pokemonResult, pokemonSpecieResult)
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

  private calculatePokemonAttrs(
    pokemonResult: PokeApiPokemonResponse,
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
  ): void {
    if (!pokemonResult || !pokemonSpecieResult) return
    this.calculatePokemonHP(pokemonResult)
    this.calculatePokemonText(pokemonSpecieResult)
  }

  private calculatePokemonHP(pokemonResult: PokeApiPokemonResponse): void {
    const stat = pokemonResult.stats.find(
      (pokemon: Stat) => pokemon.stat.name === 'hp'
    )
    this.pokemonHP = stat ? stat.base_stat : 0
  }

  private calculatePokemonText(
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
  ): void {
    const entry = pokemonSpecieResult.flavor_text_entries.find(
      (entry: FlavorTextEntry) => entry.language.name == 'en'
    )
    this.pokemonText = entry
      ? entry.flavor_text.replace('\n', '').replace('\f', '')
      : ''
  }
}
