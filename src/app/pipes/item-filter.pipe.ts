import { Pipe, PipeTransform } from '@angular/core'
import { PokeApiResponse } from '../models/pokeApi-response.model'

@Pipe({ name: 'itemFilter', standalone: true })
export class ItemFilterPipe implements PipeTransform {
  transform(items: PokeApiResponse, itemFilter: string): PokeApiResponse {
    if (!itemFilter || itemFilter === '' || items.results.length === 0) {
      return items
    }
    const filteredResults = items.results.filter((item) =>
      item.name.toLowerCase().includes(itemFilter.toLowerCase())
    )

    return {
      count: items.count,
      next: items.next,
      previous: items.previous,
      results: filteredResults,
    }
  }
}
