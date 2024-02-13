import { Component, Input, inject, input } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { PokeApiService } from '../../services/poke-api.service'
import { Observable } from 'rxjs'
import { PokeApiItemResponse } from '../../models/pokeApi-item-response.model'
import { CommonModule } from '@angular/common'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { PokemonItemTextPipe } from '../../pipes/pokemon-item-text.pipe'

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    ProgressSpinnerModule,
    PokemonItemTextPipe,
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  private readonly pokeApiService = inject(PokeApiService)

  _itemUrl: string = ''

  item$!: Observable<PokeApiItemResponse>

  get itemUrl(): string {
    return this._itemUrl
  }

  @Input() set itemUrl(itemUrl: string) {
    this._itemUrl = itemUrl
    this.getItem()
  }

  private getItem(): void {
    this.item$ = this.pokeApiService.getItem(this.itemUrl)
  }
}
