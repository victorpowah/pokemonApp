/* eslint-disable @typescript-eslint/no-explicit-any */
import { of } from 'rxjs'
import {
  Home,
  OfficialArtwork,
  PokeApiPokemonResponse,
  Sprites,
  Versions,
} from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokemonCardComponent } from './pokemon-card.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { HttpClientModule } from '@angular/common/http'

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent
  let fixture: ComponentFixture<PokemonCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonCardComponent,
        TranslateModule.forRoot(),
        HttpClientModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize pokemonUrl to an empty string', () => {
    expect(component.pokemonUrl).toBe('')
  })

  it('should set and get pokemonUrl property', () => {
    const mockPokemonUrl = 'https://example.com/pokemon'
    component.pokemonUrl = mockPokemonUrl
    expect(component.pokemonUrl).toBe(mockPokemonUrl)
  })

  it('should call getPokemon method when setting pokemonUrl', () => {
    const getPokemonSpy = spyOn<any>(component, 'getPokemon')
    component.pokemonUrl = 'https://example.com/pokemon'
    expect(getPokemonSpy).toHaveBeenCalled()
  })

  it('should calculate pokemon HP based on pokemonResult', () => {
    const mockPokemonResult = {
      stats: [{ stat: { name: 'hp' }, base_stat: 50 }],
    } as PokeApiPokemonResponse
    component['calculatePokemonHP'](mockPokemonResult)
    expect(component.pokemonHP).toBe(50)
  })

  it('should calculate pokemon text based on pokemonSpecieResult', () => {
    const mockPokemonSpecieResult = {
      flavor_text_entries: [
        { language: { name: 'en' }, flavor_text: 'Sample text.' },
      ],
    } as PokeApiPokemonSpecieResponse
    component['calculatePokemonText'](mockPokemonSpecieResult)
    expect(component.pokemonText).toBe('Sample text.')
  })

  it('should fetch and set pokemon data in getPokemon method', () => {
    const mockPokemonUrl = 'https://example.com/pokemon'

    const mockPokemonSpecieResult: PokeApiPokemonSpecieResponse = {
      base_happiness: 70,
      capture_rate: 45,
      color: {
        name: 'green',
        url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
      },
      egg_groups: [
        { name: 'monster', url: 'https://pokeapi.co/api/v2/egg-group/1/' },
      ],
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/2/' },
      evolves_from_species: null,
      flavor_text_entries: [
        {
          flavor_text:
            "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
          version: {
            name: 'diamond',
            url: 'https://pokeapi.co/api/v2/version/12/',
          },
        },
      ],
      form_descriptions: [],
      forms_switchable: false,
      gender_rate: 87.5,
      genera: [
        {
          genus: 'Seed',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
        },
      ],
      generation: {
        name: 'generation-i',
        url: 'https://pokeapi.co/api/v2/generation/1/',
      },
      growth_rate: {
        name: 'medium',
        url: 'https://pokeapi.co/api/v2/growth-rate/2/',
      },
      habitat: null,
      has_gender_differences: false,
      hatch_counter: 20,
      id: 7,
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      name: 'squirtle',
      names: [
        {
          name: 'Squirtle',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
        },
      ],
      order: 10,
      pal_park_encounters: [],
      pokedex_numbers: [
        {
          entry_number: 7,
          pokedex: {
            name: 'national',
            url: 'https://pokeapi.co/api/v2/pokedex/1/',
          },
        },
      ],
      shape: null,
      varieties: [
        {
          is_default: true,
          pokemon: {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon/7/',
          },
        },
      ],
    }

    const mockPokemonResult: PokeApiPokemonResponse = {
      abilities: [
        {
          ability: {
            name: 'torrent',
            url: 'https://pokeapi.co/api/v2/ability/67/',
          },
          is_hidden: false,
          slot: 1,
        },
      ],
      base_experience: '64',
      cries: {
        latest:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/cries/7.wav',
        legacy: null,
      },
      forms: [
        { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon-form/7/' },
      ],
      height: 5,
      held_items: [],
      id: 7,
      is_default: true,
      location_area_encounters:
        'https://pokeapi.co/api/v2/pokemon/7/encounters',
      moves: [
        {
          move: { name: 'tackle', url: 'https://pokeapi.co/api/v2/move/33/' },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
              },
              version_group: {
                name: 'red-blue',
                url: 'https://pokeapi.co/api/v2/version-group/1/',
              },
            },
          ],
        },
      ],
      name: 'squirtle',
      order: 10,
      past_abilities: [],
      past_types: [],
      species: {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
      },
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
          },
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
          } as Home,
          'official-artwork': {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
          } as OfficialArtwork,
          showdown: {
            front_default:
              'https://play.pokemonshowdown.com/sprites/xyani/squirtle.gif',
          } as Sprites,
        },
        versions: {
          'generation-i': {
            'red-blue': {
              back_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
              back_gray: null,
              back_transparent: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
              front_gray: null,
              front_transparent: null,
            },
            yellow: {
              back_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
              back_gray: null,
              back_transparent: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
              front_gray: null,
              front_transparent: null,
            },
          },
        } as Versions,
        animated: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/7.gif',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/shiny/7.gif',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/7.gif',
          front_female: null,
        } as Sprites,
      },
      stats: [
        {
          base_stat: 44,
          effort: 0,
          stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
        },
        {
          base_stat: 48,
          effort: 0,
          stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
        {
          base_stat: 64,
          effort: 0,
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
        {
          base_stat: 43,
          effort: 0,
          stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
        },
      ],
      types: [
        {
          slot: 1,
          type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
        },
      ],
      weight: 90,
    } as PokeApiPokemonResponse

    spyOn(component['pokeApiService'], 'getPokemonSpecie').and.returnValue(
      of(mockPokemonSpecieResult)
    )
    spyOn(component['pokeApiService'], 'getPokemon').and.returnValue(
      of(mockPokemonResult)
    )

    component.pokemonUrl = mockPokemonUrl
    component['getPokemon']()

    expect(component.pokemon.pokemonSpecieResult).toEqual(
      mockPokemonSpecieResult
    )
    expect(component.pokemon.pokemonResult).toEqual(mockPokemonResult)
  })
})
