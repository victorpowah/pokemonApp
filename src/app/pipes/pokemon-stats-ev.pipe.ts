import { Pipe, PipeTransform } from '@angular/core'
import { Stat } from '../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../models/pokeApi-pokemon-specie-response.model'
@Pipe({ name: 'StatsEv', standalone: true })
export class PokemonStatsEv implements PipeTransform {
  transform(data: { stats: Stat[]; colorName: string } | null): string {
    if (!data) {
      return ''
    }

    const { stats, colorName } = data

    const statsWithEffort = stats
      .filter((stat) => stat.effort > 0)
      .map(
        (stat) =>
          `<span class='${colorName} text border-round-lg px-2'>${stat.effort}</span> ${stat.stat.name}`
      )
      .join(' ')

    return statsWithEffort
  }
}
