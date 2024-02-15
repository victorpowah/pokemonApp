import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { PokeApiService } from '../../services/poke-api.service'
import { Subject, takeUntil } from 'rxjs'
import { PokeApiResponse } from '../../models/pokeApi-response.model'
import { ButtonModule } from 'primeng/button'
import { ItemCardComponent } from '../item-card/item-card.component'

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  imports: [ButtonModule, ItemCardComponent],
})
export class ItemsComponent implements OnInit, OnDestroy {
  private readonly pokeApiService = inject(PokeApiService)
  page: number = 1
  items!: PokeApiResponse

  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.pokeApiService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((itemResponse: PokeApiResponse) => {
        this.items = itemResponse
      })
  }

  nextPage(pagination: string): void {
    const isNext = pagination === 'next'
    const typePagination = isNext ? this.items.next : this.items.previous

    this.page = isNext ? this.page++ : this.page--

    this.pokeApiService
      .getItemsPaginated(typePagination)
      .pipe(takeUntil(this.destroy$))
      .subscribe((itemResponse: PokeApiResponse) => {
        this.items = itemResponse
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
