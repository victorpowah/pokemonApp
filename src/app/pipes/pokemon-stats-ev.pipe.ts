import { Pipe, PipeTransform } from '@angular/core'
import { Stat } from '../models/pokeApi-pokemon-respose.model'
@Pipe({ name: 'StatsEv', standalone: true })
export class PokemonStatsEvPipe implements PipeTransform {
  transform(data: { stats: Stat[]; colorName: string } | null): string {
    if (!data) {
      return ''
    }

    const { stats, colorName } = data

    const statsWithEffort = stats
      .filter((stat) => stat.effort > 0)
      .map(
        (stat) =>
          `<span class='${colorName}-text text border-round-lg px-2'>${stat.effort}</span> ${stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}`
      )
      .join(' ')

    return statsWithEffort
  }
}
