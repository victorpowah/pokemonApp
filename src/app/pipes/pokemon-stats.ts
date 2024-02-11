/* eslint-disable no-case-declarations */
import { Pipe, PipeTransform, inject } from '@angular/core'
import { SelectedStatus } from '../models/pokemon-detail/pokemon-detail-const.model'
import { PokeStatService } from '../services/poke-stat.service'

@Pipe({ name: 'pokemonStats', standalone: true })
export class PokemonStatsPipe implements PipeTransform {
  private readonly pokeStatService = inject(PokeStatService)

  transform(
    value: number | null,
    pokemonID: number,
    selectedStat: SelectedStatus,
    isHP: boolean
  ): number {
    if (!value || !selectedStat) {
      return 0
    }

    if (pokemonID === 292 && isHP) {
      // Shedinja HP
      return 1
    }

    switch (selectedStat) {
      case SelectedStatus.BASE:
        this.pokeStatService.setStats(value)
        return value
      case SelectedStatus.MIN:
        const baseCalcMin = (2 * value * 100) / 100
        const finalCalcMin = Math.floor(
          isHP ? baseCalcMin + 100 + 10 : Math.floor(baseCalcMin + 5) * 0.9
        )
        this.pokeStatService.setStats(finalCalcMin)
        return finalCalcMin

      case SelectedStatus.MAX:
        const baseCalcMax = ((2 * value + 31 + 63) * 100) / 100
        const finalCalcMax = Math.floor(
          isHP ? baseCalcMax + 100 + 10 : Math.floor(baseCalcMax + 5) * 1.1
        )
        this.pokeStatService.setStats(finalCalcMax)
        return finalCalcMax
      default:
        return 0
    }
  }
}
