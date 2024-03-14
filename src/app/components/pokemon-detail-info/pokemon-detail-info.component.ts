import { Component, Input, inject } from '@angular/core'
import { PokemonCatchRatePipe } from '../../pipes/pokemon-catch-rate.pipe'
import { PokemonStatsEvPipe } from '../../pipes/pokemon-stats-ev.pipe'
import { PokemonBaseFriendshipPipe } from '../../pipes/pokemon-base-friendship.pipe'
import { PokemonGrowExpPipe } from '../../pipes/pokemon-grow-exp.pipe'
import { PokemonheldItemsPipe } from '../../pipes/pokemon-held-items.pipe'
import { PokemonGenderPipe } from '../../pipes/pokemon-gender.pipe'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { CommonModule } from '@angular/common'
import { NamedAPIResource } from '../../models/pokeApi-evolution-chain-response.model'
import { PokeApiTypeResponse } from '../../models/pokeApi-type-response.model'
import { ThemeService } from '../../services/theme-service.service'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-pokemon-detail-info',
  standalone: true,
  imports: [
    CommonModule,
    PokemonCatchRatePipe,
    PokemonStatsEvPipe,
    PokemonBaseFriendshipPipe,
    PokemonGrowExpPipe,
    PokemonheldItemsPipe,
    PokemonGenderPipe,
    TranslateModule,
  ],
  templateUrl: './pokemon-detail-info.component.html',
  styleUrl: './pokemon-detail-info.component.scss',
})
export class PokemonDetailInfoComponent {
  private _pokemon!: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }

  @Input() set pokemon(pokemon: {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  }) {
    this._pokemon = pokemon
  }

  get pokemon(): {
    pokemonSpecieResult: PokeApiPokemonSpecieResponse
    pokemonResult: PokeApiPokemonResponse
  } {
    return this._pokemon
  }

  private _types!: {
    type1: PokeApiTypeResponse
    type2: PokeApiTypeResponse
  }

  @Input() set types(types: {
    type1: PokeApiTypeResponse
    type2: PokeApiTypeResponse
  }) {
    this._types = types
    this.calculateTypes()
  }

  get types(): {
    type1: PokeApiTypeResponse
    type2: PokeApiTypeResponse
  } {
    return this._types
  }

  public from4x!: NamedAPIResource[]
  public from2x!: NamedAPIResource[]
  public from05x!: NamedAPIResource[]
  public from025x!: NamedAPIResource[]
  public from0x!: NamedAPIResource[]

  public readonly themeService = inject(ThemeService)

  private calculateTypes(): void {
    if (!this.types?.type1 || !this.types?.type2) {
      return
    }

    this.from4x = this.types.type1.damage_relations.double_damage_from.filter(
      (type1Element: NamedAPIResource) =>
        this.types.type2.damage_relations.double_damage_from.find(
          (type2Element: NamedAPIResource) =>
            type2Element.url === type1Element.url
        )
    )

    this.from0x = [
      ...this.types.type1.damage_relations.no_damage_from,
      ...this.types.type2.damage_relations.no_damage_from,
    ]

    this.from025x = this.types.type1.damage_relations.half_damage_from.filter(
      (type1Element: NamedAPIResource) =>
        this.types.type2.damage_relations.half_damage_from.find(
          (type2Element: NamedAPIResource) =>
            type2Element.url === type1Element.url
        )
    )

    this.from05x = [
      ...this.types.type1.damage_relations.half_damage_from,
      ...this.types.type2.damage_relations.half_damage_from,
    ]
      .filter(function (elem, index, self) {
        return index === self.findIndex((value) => value.name === elem.name)
      })
      .filter(
        (type1Element: NamedAPIResource) =>
          ![
            ...this.types.type1.damage_relations.double_damage_from,
            ...this.types.type2.damage_relations.double_damage_from,
          ].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )
      .filter(
        (type1Element: NamedAPIResource) =>
          ![...this.from0x, ...this.from025x].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )

    this.from2x = [
      ...this.types.type1.damage_relations.double_damage_from,
      ...this.types.type2.damage_relations.double_damage_from,
    ]
      .filter(function (elem, index, self) {
        return index === self.findIndex((value) => value.name === elem.name)
      })
      .filter(
        (type1Element: NamedAPIResource) =>
          ![
            ...this.types.type1.damage_relations.half_damage_from,
            ...this.types.type2.damage_relations.half_damage_from,
          ].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )
      .filter(
        (type1Element: NamedAPIResource) =>
          ![...this.from0x, ...this.from4x].find(
            (type2Element: NamedAPIResource) =>
              type2Element.url === type1Element.url
          )
      )
  }
}
