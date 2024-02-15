import { Pipe, PipeTransform } from '@angular/core'
import { EvolutionDetail } from '../models/pokeApi-evolution-chain-response.model'

@Pipe({ name: 'pokemonEvolutionDescription', standalone: true })
export class PokemonEvolutionDescriptionPipe implements PipeTransform {
  transform(evDetail: EvolutionDetail | null): string {
    if (!evDetail) {
      return ''
    }

    let desc = ''
    switch (evDetail.trigger.name) {
      case 'level-up':
        if (evDetail.min_level !== null) {
          desc = 'Level ' + evDetail.min_level + '+'
        } else {
          desc = 'Level up'
        }
        if (evDetail.gender !== null) {
          let gender
          if (evDetail.gender === 2) {
            gender = '(Male)'
          } else {
            gender = '(Female)'
          }
          desc = desc + ' ' + gender
        }
        if (evDetail.held_item !== null && evDetail.held_item !== undefined) {
          const held_item = this.capitalizeSplitJoin(
            evDetail.held_item.name,
            '-',
            ' '
          )
          desc = desc + ' holding ' + held_item
        }
        if (evDetail.known_move !== null) {
          const known_move = this.capitalizeSplitJoin(
            evDetail.known_move.name,
            '-',
            ' '
          )
          desc = desc + ' knowing ' + known_move
        }
        if (evDetail.known_move_type !== null) {
          const known_move_type = this.capitalizeSplitJoin(
            evDetail.known_move_type.name,
            '-',
            ' '
          )
          desc = desc + ' knowing a ' + known_move_type + ' move'
        }
        if (evDetail.min_affection !== null) {
          const min_affection = evDetail.min_affection
          desc = desc + ' with ' + min_affection + '+ Affection'
        }
        if (evDetail.min_beauty !== null) {
          const min_beauty = evDetail.min_beauty
          desc = desc + ' with ' + min_beauty + '+ Beauty'
        }
        if (evDetail.min_happiness !== null) {
          const min_happiness = evDetail.min_happiness
          desc = desc + ' with ' + min_happiness + '+ Happiness'
        }
        if (evDetail.relative_physical_stats !== null) {
          let sign
          if (evDetail.relative_physical_stats === 1) {
            sign = '>'
          } else if (evDetail.relative_physical_stats === -1) {
            sign = '<'
          } else {
            sign = '='
          }
          desc = desc + ' with Attack ' + sign + ' Defence'
        }
        if (evDetail.party_species !== null) {
          const party_species = this.capitalizeSplitJoin(
            evDetail.party_species.name,
            '-',
            ' '
          )
          desc = desc + ' with ' + party_species + ' in party'
        }
        if (evDetail.party_type !== null) {
          const party_type = this.capitalizeSplitJoin(
            evDetail.party_type.name,
            '-',
            ' '
          )
          desc = desc + ' with a ' + party_type + ' type in party'
        }
        if (evDetail.location !== null) {
          const location = this.capitalizeSplitJoin(
            evDetail.location.name,
            '-',
            ' '
          )
          desc = desc + ' at ' + location
        }
        if (evDetail.needs_overworld_rain !== false) {
          desc = desc + ' during Rain'
        }
        if (evDetail.time_of_day !== '') {
          const time_of_day = this.capitalizeSplitJoin(
            evDetail.time_of_day,
            '-',
            ' '
          )
          desc = desc + ' at ' + time_of_day + 'time'
        }
        if (evDetail.turn_upside_down !== false) {
          desc = desc + ' holding 3DS upside-down'
        }
        break
      case 'trade':
        desc = 'Trade'
        if (evDetail.held_item !== null) {
          const held_item = this.capitalizeSplitJoin(
            evDetail.held_item.name,
            '-',
            ' '
          )
          desc = desc + ' holding ' + held_item
        }
        if (evDetail.trade_species !== null) {
          const trade_species = this.capitalizeSplitJoin(
            evDetail.trade_species.name,
            '-',
            ' '
          )
          desc = desc + ' with ' + trade_species
        }
        if (evDetail.gender !== null) {
          let gender
          if (evDetail.gender === 2) {
            gender = '(Male)'
          } else {
            gender = '(Female)'
          }
          desc = desc + ' ' + gender
        }
        break
      case 'use-item':
        desc = 'Use'
        if (evDetail.item !== null) {
          const item = this.capitalizeSplitJoin(evDetail.item.name, '-', ' ')
          desc = desc + ' ' + item
        }
        if (evDetail.gender !== null) {
          let gender
          if (evDetail.gender === 2) {
            gender = '(Male)'
          } else {
            gender = '(Female)'
          }
          desc = desc + ' ' + gender
        }
        break
      case 'shed':
        desc = 'Level 20, with empty PokéBall and an open slot in party'
        break
      case 'spin':
        desc = 'Spin holding a Sweet'
        break
      case 'tower-of-darkness':
        desc = 'Train in the Tower of Darkness/ Waters' // Add forms support to Evolution Chain (sometime... someday...)
        break
      case 'tower-of-waters':
        desc = 'Train in the Tower of Waters'
        break
      case 'three-critical-hits':
        desc = 'Land three critical hits in a battle'
        break
      case 'take-damage':
        desc =
          'Travel under the stone bridge in Dusty Bowl after taking at least 49 HP in damage from attacks without fainting'
        break
    }
    return desc
  }

  private capitalizeSplitJoin(str: string, split: string, join: string) {
    const splitStr = str.split(split)
    for (let i = 0, x = splitStr.length; i < x; i++) {
      splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substr(1)
    }
    return splitStr.join(join)
  }
}
