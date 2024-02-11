import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'pokemonWeight', standalone: true })
export class PokemonWeightPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return ''
    }

    const weightInKgs = value * 0.1
    return `${weightInKgs.toFixed(1)}kg ( ${(weightInKgs * 2.205).toFixed(1)}lbs. )`
  }
}
