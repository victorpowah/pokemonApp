import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'pokemonHeight', standalone: true })
export class PokemonHeightPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return ''
    }

    const heightInMetres = value * 0.1
    return `${heightInMetres.toFixed(1)}m ( ${Math.floor(heightInMetres * 3.2808) + '"' + Math.round(((heightInMetres * 3.2808) % 1) * 12) + "'"} )`
  }
}
