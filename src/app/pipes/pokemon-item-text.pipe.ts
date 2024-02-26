import { Pipe, PipeTransform } from '@angular/core'
import { FlavorTextEntry } from '../models/pokeApi-item-response.model'

@Pipe({ name: 'pokemonItemText', standalone: true })
export class PokemonItemTextPipe implements PipeTransform {
  transform(value: FlavorTextEntry[] | null): string {
    if (!value) {
      return ''
    }
    const flavorText = value.find((flavorText: FlavorTextEntry) => {
      return flavorText.language.name === 'en'
    })

    return flavorText ? flavorText.text : 'No information available'
  }
}
