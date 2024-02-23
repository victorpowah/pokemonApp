import { Component, inject, OnInit } from '@angular/core'
import { PokeApiService } from '../../services/poke-api.service'
import { takeUntil } from 'rxjs'
import { PokeApiResponse } from '../../models/pokeApi-response.model'
import { ButtonModule } from 'primeng/button'
import { ItemCardComponent } from '../item-card/item-card.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { DestroyService } from '../../services/destroy.service'

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  imports: [ButtonModule, ItemCardComponent, ProgressSpinnerModule],
  providers: [DestroyService],
})
export class ItemsComponent implements OnInit {
  private readonly pokeApiService = inject(PokeApiService)
  page: number = 1
  items!: PokeApiResponse

  private destroy$ = inject(DestroyService)

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

    this.page = isNext ? this.page + 1 : this.page - 1

    console.log(this.page)
    this.pokeApiService
      .getItemsPaginated(typePagination)
      .pipe(takeUntil(this.destroy$))
      .subscribe((itemResponse: PokeApiResponse) => {
        this.items = itemResponse
      })
  }
}
