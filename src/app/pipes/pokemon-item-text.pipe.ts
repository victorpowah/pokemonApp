import { Pipe, PipeTransform } from '@angular/core'
import { EffectEntry } from '../models/pokeApi-item-response.model'

@Pipe({ name: 'pokemonItemText', standalone: true })
export class PokemonItemTextPipe implements PipeTransform {
  transform(value: EffectEntry[] | null): string {
    if (!value) {
      return ''
    }
    const effect = value.find((effectEntry: EffectEntry) => {
      effectEntry.language.name === 'en'
    })?.effect

    console.log(effect)

    return effect ? effect : ''
  }
}
