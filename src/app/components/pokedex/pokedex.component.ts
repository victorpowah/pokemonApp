import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { PokeApiInfo } from '../../models/pokeApi-info.model'
import { PokeApiResponse } from '../../models/pokeApi-response.model'
import { PokeApiService } from '../../services/poke-api.service'
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { PokeApiPokedexResponse } from '../../models/pokeApi-pokedex-response.model'
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component'
import { Subject,  mergeMap, takeUntil } from 'rxjs'

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, PokemonCardComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit, OnDestroy {
  selectedPokedex: PokeApiPokedexResponse | undefined

  pokedexs!: PokeApiInfo[]

  selectedPokedexs!: PokeApiInfo[]

  private readonly pokeApiService = inject(PokeApiService)

  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.pokeApiService
    .getPokedexs()
    .pipe(
      takeUntil(this.destroy$),
      mergeMap((pokedexs: PokeApiResponse) => {
        this.pokedexs = pokedexs.results;
        return this.pokeApiService.getPokedex(this.pokedexs.length > 0 ? this.pokedexs[0].url : '');
      }),
      takeUntil(this.destroy$)
    )
    .subscribe((pokedex: PokeApiPokedexResponse) => {
      this.selectedPokedex = { ...pokedex };
    });
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  changePokedex(event: DropdownChangeEvent): void {
    if (!event.value) return

    this.pokeApiService
      .getPokedex(event.value.url)
      .pipe(takeUntil(this.destroy$))
      .subscribe((pokedex: PokeApiPokedexResponse) => {
        this.selectedPokedex = { ...pokedex }
      })
  }
}
