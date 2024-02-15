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
import { takeUntil, mergeMap, map, Subject } from 'rxjs'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeStatService } from '../../services/poke-stat.service'
import { ProgressBarComponent } from '../progressbar/progressbar'
import { PokemonHeightPipe } from '../../pipes/pokemon-height.pipe'
import { PokemonWeightPipe } from '../../pipes/pokemon-weight.pipe'
import { ReplaceCommaPipe } from '../../pipes/replace-comma.pipe'
import { PokemonStatsPipe } from '../../pipes/pokemon-stats.pipe'
import { ThemeService } from '../../services/theme-service.service'
import { PokeApiEvolutionChainResponse } from '../../models/pokeApi-evolution-chain-response.model'

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
  ],
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

  public evolutionChain!: PokeApiEvolutionChainResponse

  public maxBaseStat: number = 0

  public selectedStat: SelectedStatus = SelectedStatus.BASE

  public selectedStatus = SelectedStatus

  public pokemonGenera: string = ''

  public selectedForm: string = ''

  private pokemonId!: number

  private readonly pokeApiService = inject(PokeApiService)
  private readonly pokeStatService = inject(PokeStatService)
  private readonly themeService = inject(ThemeService)
  private destroy$ = new Subject<void>()

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
    this.destroy$.next()
    this.destroy$.complete()

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
        )
      )
      .subscribe(
        (pokemonSpecieResult: {
          pokemonSpecieResult: PokeApiPokemonSpecieResponse
          pokemonResult: PokeApiPokemonResponse
        }) => {
          this.pokemon = pokemonSpecieResult

          this.initializePokemon()
          this.calculateStats()
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

    this.getEvolutionChain()
  }

  private calculateStats(): void {
    this.maxBaseStat = Math.max(
      ...this.pokemon.pokemonResult.stats.map((stat: Stat) => stat.base_stat)
    )
  }

  // evolution.chain.evolves_to[0].species.url
  // evolution.chain.evolves_to[0].evolves_to[0].species.url
  private getEvolutionChain(): void {
    this.pokeApiService
      .getEvolutionChain(this.pokemon.pokemonSpecieResult.evolution_chain.url)
      .pipe(takeUntil(this.destroy$))
      .subscribe((evolutionChain: PokeApiEvolutionChainResponse) => {
        this.evolutionChain = evolutionChain
      })
    return
  }
}
