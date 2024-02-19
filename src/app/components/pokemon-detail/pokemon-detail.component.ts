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
import {
  PokeApiPokemonResponse,
  Stat,
} from '../../models/pokeApi-pokemon-respose.model'
import { CommonModule, TitleCasePipe } from '@angular/common'
import { ToastModule } from 'primeng/toast'
import { SelectedStatus } from '../../models/pokemon-detail/pokemon-detail-const.model'
import { takeUntil, mergeMap, map, forkJoin } from 'rxjs'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeStatService } from '../../services/poke-stat.service'
import { ProgressBarComponent } from '../progressbar/progressbar'
import { PokemonHeightPipe } from '../../pipes/pokemon-height.pipe'
import { PokemonWeightPipe } from '../../pipes/pokemon-weight.pipe'
import { ReplaceCommaPipe } from '../../pipes/replace-comma.pipe'
import { PokemonStatsPipe } from '../../pipes/pokemon-stats.pipe'
import { ThemeService } from '../../services/theme-service.service'
import { PokemonEvolveChainComponent } from '../pokemon-evolve-chain/pokemon-evolve-chain.component'
import { DestroyService } from '../../services/destroy.service'
import {
  NamedAPIResource,
  PokeApiTypeResponse,
} from '../../models/pokeApi-type-response.model'

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarComponent,
    ToastModule,
    TitleCasePipe,
    PokemonStatsPipe,
    PokemonHeightPipe,
    PokemonWeightPipe,
    ReplaceCommaPipe,
    PokemonEvolveChainComponent,
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

  public maxBaseStat: number = 0

  public selectedStat: SelectedStatus = SelectedStatus.BASE

  public selectedStatus = SelectedStatus

  public pokemonGenera: string = ''

  public selectedForm: string = ''

  public from4x!: NamedAPIResource[]
  public from2x!: NamedAPIResource[]
  public from05x!: NamedAPIResource[]
  public from025x!: NamedAPIResource[]
  public from0x!: NamedAPIResource[]

  private pokemonId!: number

  private readonly pokeApiService = inject(PokeApiService)
  private readonly pokeStatService = inject(PokeStatService)
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

    this.pokeStatService
      .getStats()
      .pipe(takeUntil(this.destroy$))
      .subscribe((stat: number) => {
        if (stat > this.maxBaseStat) {
          this.maxBaseStat = stat
        }
      })
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges()
  }

  ngOnDestroy(): void {
    this.themeService.setColorClass('bg-gray-900')
  }

  public showStats(stat: SelectedStatus) {
    this.selectedStat = stat
    this.maxBaseStat = 0
  }

  public changeVariety(varietyUrl: string) {
    this.selectedForm = varietyUrl
    this.maxBaseStat = 0

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
    const pokemonGeneraResult = this.pokemon.pokemonSpecieResult.genera.find(
      (genera) => genera.language.name === 'en'
    )
    this.pokemonGenera = pokemonGeneraResult ? pokemonGeneraResult.genus : ''

    this.selectedForm =
      this.pokemon.pokemonSpecieResult.varieties[0].pokemon.url

    this.themeService.setColorClass(this.pokemon.pokemonSpecieResult.color.name)

    this.calculateStats()
    this.calculateTypes()
  }

  private calculateStats(): void {
    this.maxBaseStat = Math.max(
      ...this.pokemon.pokemonResult.stats.map((stat: Stat) => stat.base_stat)
    )
  }

  private calculateTypes(): void {
    this.from4x = this.types.type1.damage_relations.double_damage_from.filter(
      (type1Element: NamedAPIResource) =>
        this.types.type2.damage_relations.double_damage_from.find(
          (type2Element: NamedAPIResource) =>
            type2Element.url === type1Element.url
        )
    )

    this.from0x = [
      ...this.types.type1.damage_relations.no_damage_from,
      ...this.types.type2.damage_relations.no_damage_from,
    ]

    this.from025x = this.types.type1.damage_relations.half_damage_from.filter(
      (type1Element: NamedAPIResource) =>
        this.types.type2.damage_relations.half_damage_from.find(
          (type2Element: NamedAPIResource) =>
            type2Element.url === type1Element.url
        )
    )

    this.from05x = [
      ...this.types.type1.damage_relations.half_damage_from,
      ...this.types.type2.damage_relations.half_damage_from,
    ]
      .filter(function (elem, index, self) {
        return index === self.findIndex((value) => value.name === elem.name)
      })
      .filter(
        (type1Element: NamedAPIResource) =>
          ![
            ...this.types.type1.damage_relations.double_damage_from,
            ...this.types.type2.damage_relations.double_damage_from,
          ].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )
      .filter(
        (type1Element: NamedAPIResource) =>
          ![...this.from0x, ...this.from025x].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )

    this.from2x = [
      ...this.types.type1.damage_relations.double_damage_from,
      ...this.types.type2.damage_relations.double_damage_from,
    ]
      .filter(function (elem, index, self) {
        return index === self.findIndex((value) => value.name === elem.name)
      })
      .filter(
        (type1Element: NamedAPIResource) =>
          ![
            ...this.types.type1.damage_relations.half_damage_from,
            ...this.types.type2.damage_relations.half_damage_from,
          ].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )
      .filter(
        (type1Element: NamedAPIResource) =>
          ![...this.from0x, ...this.from4x].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )
  }
}
