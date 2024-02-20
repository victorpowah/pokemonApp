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
import {
  NamedAPIResource,
  PokeApiTypeResponse,
} from '../../models/pokeApi-type-response.model'
import { PokemonDetailMainComponent } from '../pokemon-detail-main/pokemon-detail-main.component'
import { PokemonCatchRate } from '../../pipes/pokemon-catch-rate.pipe'
import { PokemonStatsEv } from '../../pipes/pokemon-stats-ev.pipe'
import { PokemonBaseFriendship } from '../../pipes/pokemon-base-friendship.pipe'
import { PokemonGrowExp } from '../../pipes/pokemon-grow-exp.pipe'
import { PokemonheldItems } from '../../pipes/pokemon-held-items.pipe'
import { PokemonGender } from '../../pipes/pokemon-gender.pipe'

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    PokemonEvolveChainComponent,
    PokemonDetailMainComponent,
    PokemonCatchRate,
    PokemonStatsEv,
    PokemonBaseFriendship,
    PokemonGrowExp,
    PokemonheldItems,
    PokemonGender,
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

  public from4x!: NamedAPIResource[]
  public from2x!: NamedAPIResource[]
  public from05x!: NamedAPIResource[]
  public from025x!: NamedAPIResource[]
  public from0x!: NamedAPIResource[]

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

    this.calculateTypes()
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
