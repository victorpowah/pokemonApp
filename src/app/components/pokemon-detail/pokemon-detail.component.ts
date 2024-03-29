import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PokeApiService } from '../../services/poke-api.service'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { CommonModule, TitleCasePipe } from '@angular/common'
import { takeUntil, mergeMap, map, forkJoin } from 'rxjs'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { ThemeService } from '../../services/theme-service.service'
import { PokemonEvolveChainComponent } from '../pokemon-evolve-chain/pokemon-evolve-chain.component'
import { DestroyService } from '../../services/destroy.service'
import { PokeApiTypeResponse } from '../../models/pokeApi-type-response.model'
import { PokemonDetailMainComponent } from '../pokemon-detail-main/pokemon-detail-main.component'
import { PokemonDetailInfoComponent } from '../pokemon-detail-info/pokemon-detail-info.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner'

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    PokemonEvolveChainComponent,
    PokemonDetailMainComponent,
    PokemonDetailInfoComponent,
    ProgressSpinnerModule,
  ],
  providers: [DestroyService],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent
  implements OnInit, OnDestroy, AfterContentChecked
{
  public pokemon!: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }

  public types!: {
    type1: PokeApiTypeResponse
    type2: PokeApiTypeResponse
  }

  private pokemonId!: number

  private readonly pokeApiService = inject(PokeApiService)
  private readonly themeService = inject(ThemeService)
  private destroy$ = inject(DestroyService)

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params['id']

      this.getPokemon()
    })
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges()
  }

  ngOnDestroy(): void {
    this.themeService.setColorClass('bg-gray-900')
  }

  public changeVariety(varietyUrl: string) {
    this.pokeApiService
      .getPokemon(varietyUrl)
      .pipe(takeUntil(this.destroy$))
      .subscribe((pokemonResult: PokeApiPokemonResponse) => {
        this.pokemon.pokemonResult = pokemonResult
      })
  }

  private getPokemon(): void {
    this.pokeApiService
      .getPokemonSpecieById(this.pokemonId)
      .pipe(
        takeUntil(this.destroy$),
        mergeMap((pokemonSpecieResult: PokeApiPokemonSpecieResponse) =>
          this.pokeApiService
            .getPokemon(pokemonSpecieResult.varieties[0].pokemon.url)
            .pipe(
              takeUntil(this.destroy$),
              map((pokemonResult: PokeApiPokemonResponse) => {
                return { pokemonSpecieResult, pokemonResult }
              })
            )
        ),
        mergeMap(
          (pokemonResult: {
            pokemonSpecieResult: PokeApiPokemonSpecieResponse
            pokemonResult: PokeApiPokemonResponse
          }) =>
            forkJoin({
              type1: this.pokeApiService.getType(
                pokemonResult.pokemonResult.types[0].type.url
              ),
              type2: this.pokeApiService.getType(
                pokemonResult.pokemonResult.types[1]?.type.url
              ),
            }).pipe(
              map(
                (typesResult: {
                  type1: PokeApiTypeResponse
                  type2: PokeApiTypeResponse
                }) => {
                  return { pokemonResult, typesResult }
                }
              )
            )
        )
      )
      .subscribe(
        (result: {
          pokemonResult: {
            pokemonSpecieResult: PokeApiPokemonSpecieResponse
            pokemonResult: PokeApiPokemonResponse
          }
          typesResult: {
            type1: PokeApiTypeResponse
            type2: PokeApiTypeResponse
          }
        }) => {
          this.pokemon = result.pokemonResult
          this.types = result.typesResult

          this.initializePokemon()
        }
      )
  }

  private initializePokemon() {
    this.themeService.setColorClass(this.pokemon.pokemonSpecieResult.color.name)
  }
}
