import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'growExp', standalone: true })
export class PokemonGrowExpPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) {
      return ''
    }
    console.log(value)

    switch (value) {
      case 'slow':
        return '1250000'
      case 'medium':
        return '1000000'
      case 'fast':
        return '800000'
      case 'medium-slow':
        return '1059860'
      case 'slow-then-very-fast':
        return '600000'
      case 'fast-then-very-slow':
        return '1640000'
      default:
        return ''
    }
  }
}
