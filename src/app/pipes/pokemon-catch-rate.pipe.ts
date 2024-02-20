import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'catchRate', standalone: true })
export class PokemonCatchRate implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return ''
    }
    return ((value / (3 * 255)) * 100).toFixed(1) + '% PokéBall & Full HP'
  }
}
