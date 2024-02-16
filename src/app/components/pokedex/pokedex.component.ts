import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { PokeApiInfo } from '../../models/pokeApi-info.model'
import { PokeApiResponse } from '../../models/pokeApi-response.model'
import { PokeApiService } from '../../services/poke-api.service'
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { PokeApiPokedexResponse } from '../../models/pokeApi-pokedex-response.model'
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component'
import { Subject, map, mergeMap, takeUntil } from 'rxjs'
import { PaginatorModule, PaginatorState } from 'primeng/paginator'

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    PokemonCardComponent,
    PaginatorModule,
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit, OnDestroy {
  public selectedPokedex: PokeApiPokedexResponse | undefined
  public selectedPokedexDrop: PokeApiInfo | undefined

  public pokedexs!: PokeApiInfo[]

  public selectedPokedexs!: PokeApiInfo[]

  public first: number = 0

  public rows: number = 20

  private readonly pokeApiService = inject(PokeApiService)

  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.pokeApiService
      .getPokedexs()
      .pipe(
        takeUntil(this.destroy$),
        mergeMap((pokedexs: PokeApiResponse) =>
          this.pokeApiService
            .getPokedex(
              pokedexs.results.length > 0 ? pokedexs.results[0].url : ''
            )
            .pipe(
              takeUntil(this.destroy$),
              map((pokedex: PokeApiPokedexResponse) => {
                return { pokedexs, pokedex }
              })
            )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (pokedexResult: {
          pokedexs: PokeApiResponse
          pokedex: PokeApiPokedexResponse
        }) => {
          this.pokedexs = pokedexResult.pokedexs.results
          this.selectedPokedex = { ...pokedexResult.pokedex }
          this.selectedPokedexDrop = this.pokedexs[0]
        }
      )
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  public changePokedex(event: DropdownChangeEvent): void {
    if (!event.value) {
      this.selectedPokedex = undefined
      return
    }

    this.pokeApiService
      .getPokedex(event.value.url)
      .pipe(takeUntil(this.destroy$))
      .subscribe((pokedex: PokeApiPokedexResponse) => {
        this.selectedPokedex = { ...pokedex }
      })
  }

  public onPageChange(event: PaginatorState): void {
    this.first = event.first ? event.first : 0
    this.rows = event.rows ? event.rows : 0

    console.log(event)
  }
}
