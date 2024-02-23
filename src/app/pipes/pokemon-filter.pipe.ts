import { Pipe, PipeTransform } from '@angular/core'
import { PokemonEntry } from '../models/pokeApi-pokedex-response.model'

@Pipe({ name: 'pokemonFilter', standalone: true })
export class PokemonFilterPipe implements PipeTransform {
  transform(
    pokemonEntries: PokemonEntry[],
    pokemonFilter: string
  ): PokemonEntry[] {
    if (!pokemonFilter || pokemonFilter === '' || pokemonEntries.length === 0) {
      return pokemonEntries
    }

    return pokemonEntries.filter((pokemonEntry) =>
      pokemonEntry.pokemon_species.name
        .toLowerCase()
        .includes(pokemonFilter.toLowerCase())
    )
  }
}
