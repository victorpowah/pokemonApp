import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core'
import {
  Ability,
  PokeApiPokemonResponse,
  Stat,
} from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokemonHeightPipe } from '../../pipes/pokemon-height.pipe'
import { PokemonStatsPipe } from '../../pipes/pokemon-stats.pipe'
import { PokemonWeightPipe } from '../../pipes/pokemon-weight.pipe'
import { ReplaceCommaPipe } from '../../pipes/replace-comma.pipe'
import { CommonModule } from '@angular/common'
import { SelectedStatus } from '../../models/pokemon-detail/pokemon-detail-const.model'
import { takeUntil } from 'rxjs'
import { DestroyService } from '../../services/destroy.service'
import { PokeStatService } from '../../services/poke-stat.service'
import { ProgressBarComponent } from '../progressbar/progressbar'
import { ToastModule } from 'primeng/toast'
import { TranslateModule } from '@ngx-translate/core'
import { AbilitiesModalComponent } from '../abilities-modal/abilities-modal.component'

@Component({
  selector: 'app-pokemon-detail-main',
  standalone: true,
  templateUrl: './pokemon-detail-main.component.html',
  styleUrl: './pokemon-detail-main.component.scss',
  imports: [
    CommonModule,
    PokemonStatsPipe,
    PokemonHeightPipe,
    PokemonWeightPipe,
    ReplaceCommaPipe,
    ProgressBarComponent,
    ToastModule,
    TranslateModule,
    AbilitiesModalComponent,
  ],
})
export class PokemonDetailMainComponent implements OnInit {
  private _pokemon!: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }

  @Input() set pokemon(pokemon: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }) {
    this._pokemon = pokemon
    this.initalizePokemon()
  }

  get pokemon(): {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  } {
    return this._pokemon
  }

  @Output() changeVariety = new EventEmitter<string>()
  public visible: boolean = false

  public pokemonGenera: string = ''

  public selectedForm: string = ''

  public selectedStat: SelectedStatus = SelectedStatus.BASE

  public selectedStatus = SelectedStatus

  public maxBaseStat: number = 0

  public abilitySelected: Ability | null = null

  private readonly pokeStatService = inject(PokeStatService)
  private destroy$ = inject(DestroyService)

  ngOnInit(): void {
    this.pokeStatService
      .getStats()
      .pipe(takeUntil(this.destroy$))
      .subscribe((stat: number) => {
        if (stat > this.maxBaseStat) {
          this.maxBaseStat = stat
        }
      })
  }

  private initalizePokemon(): void {
    const pokemonGeneraResult = this.pokemon.pokemonSpecieResult.genera.find(
      (genera) => genera.language.name === 'en'
    )
    this.pokemonGenera = pokemonGeneraResult ? pokemonGeneraResult.genus : ''

    this.selectedForm =
      this.pokemon.pokemonSpecieResult.varieties[0].pokemon.url

    this.calculateStats()
  }

  private calculateStats(): void {
    this.maxBaseStat = Math.max(
      ...this.pokemon.pokemonResult.stats.map((stat: Stat) => stat.base_stat)
    )
  }

  public showStats(stat: SelectedStatus) {
    this.selectedStat = stat
    this.maxBaseStat = 0
  }

  public changeVarietyFn(varietyUrl: string) {
    this.selectedForm = varietyUrl
    this.maxBaseStat = 0

    this.changeVariety.emit(varietyUrl)
  }

  showDialog(ability: Ability) {
    this.abilitySelected = ability
    this.visible = true
  }
}
