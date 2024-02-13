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
  items!: PokeApiResponse | undefined

  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.pokeApiService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: PokeApiResponse) => {
          this.items = data
          console.log('Items received:', data)
        },
        error: (error) => {
          console.error('Error fetching items:', error)
        },
      })
  }

  nextPage(pagination: string): void {
    let typePagination: any

    console.log(pagination)
    if (pagination === 'next') {
      typePagination = this.items?.next
      this.page = this.page + 1
    } else if (pagination === 'previous') {
      typePagination = this.items?.previous
      this.page = this.page - 1
    }

    this.pokeApiService
      .getItemNextPage(typePagination)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: PokeApiResponse) => {
          this.items = data
          console.log('Items received:', data)
        },
        error: (error) => {
          console.error('Error fetching items:', error)
        },
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
