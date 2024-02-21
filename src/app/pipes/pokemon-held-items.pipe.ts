import { Pipe, PipeTransform } from '@angular/core'
import { HeldItem } from '../models/pokeApi-pokemon-respose.model'
@Pipe({ name: 'heldItems', standalone: true })
export class PokemonheldItemsPipe implements PipeTransform {
  transform(items: HeldItem[]): string {
    if (!items) {
      return ''
    }

    const formattedString = items
      .map((item) => {
        const itemName = item.item.name.replace(/-/g, ' ') // Reemplazar guiones con espacios
        const rarity = item.version_details[0]?.rarity || 0 // Tomar la rareza de la primera versión (o 0 si no hay detalles)

        return `${itemName} (${rarity}%)`
      })
      .join(', ')

    return formattedString
  }
}
