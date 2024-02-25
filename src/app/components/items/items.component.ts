import { Component, inject, OnInit } from '@angular/core'
import { PokeApiService } from '../../services/poke-api.service'
import { takeUntil } from 'rxjs'
import { PokeApiResponse } from '../../models/pokeApi-response.model'
import { ButtonModule } from 'primeng/button'
import { ItemCardComponent } from '../item-card/item-card.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { DestroyService } from '../../services/destroy.service'
import { TranslateModule } from '@ngx-translate/core'
import { PaginatorModule, PaginatorState } from 'primeng/paginator'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { ItemFilterPipe } from '../../pipes/item-filter.pipe'
@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  imports: [
    ButtonModule,
    ItemCardComponent,
    ProgressSpinnerModule,
    TranslateModule,
    PaginatorModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ItemFilterPipe,
  ],
  providers: [DestroyService],
})
export class ItemsComponent implements OnInit {
  private readonly pokeApiService = inject(PokeApiService)
  page: number = 1
  items!: PokeApiResponse
  public first: number = 0

  public rows: number = 20

  public ItemFilter: string = ''

  private destroy$ = inject(DestroyService)

  ngOnInit(): void {
    this.pokeApiService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((itemResponse: PokeApiResponse) => {
        this.items = itemResponse
      })
  }

  public onPageChange(event: PaginatorState): void {
    this.first = event.first ? event.first : 0
    this.rows = event.rows ? event.rows : 0
  }

  public changeRow() {
    this.first = 0
  }
}
