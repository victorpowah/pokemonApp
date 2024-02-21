import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'baseFriendship', standalone: true })
export class PokemonBaseFriendshipPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return ''
    }
    let result = ''
    switch (true) {
      case value > 100:
        result = 'High'
        break
      case value > 70:
        result = 'Higher than Normal'
        break
      case value === 70:
        result = 'Normal'
        break
      case value >= 35:
        result = 'Lower than Normal'
        break
      case value > 0:
        result = 'Low'
        break
      default:
        result = 'Minimum'
        break
    }

    return result
  }
}
