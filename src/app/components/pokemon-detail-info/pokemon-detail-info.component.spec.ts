import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { PokemonDetailInfoComponent } from './pokemon-detail-info.component'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeApiTypeResponse } from '../../models/pokeApi-type-response.model'

describe('PokemonDetailInfoComponent', () => {
  let component: PokemonDetailInfoComponent
  let fixture: ComponentFixture<PokemonDetailInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailInfoComponent, TranslateModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonDetailInfoComponent)
    component = fixture.componentInstance

    // Provide input to the component
    component.pokemon = {
      pokemonSpecieResult:
        pokemonSpecieResult as unknown as PokeApiPokemonSpecieResponse,
      pokemonResult: pokemonResult as unknown as PokeApiPokemonResponse,
    }

    component.types = {
      type1: type1 as PokeApiTypeResponse,
      type2: type2 as PokeApiTypeResponse,
    }

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
const pokemonSpecieResult = {
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: 16,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
            },
            turn_upside_down: false,
          },
        ],
        evolves_to: [
          {
            evolution_details: [
              {
                gender: null,
                held_item: null,
                item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_affection: null,
                min_beauty: null,
                min_happiness: null,
                min_level: 32,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                trigger: {
                  name: 'level-up',
                  url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                },
                turn_upside_down: false,
              },
            ],
            evolves_to: [],
            is_baby: false,
            species: {
              name: 'venusaur',
              url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
            },
          },
        ],
        is_baby: false,
        species: {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
        },
      },
    ],
    is_baby: false,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
  },
  id: 1,
}
const pokemonResult = {
  abilities: [
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 263,
  cries: {
    latest:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg',
    legacy:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/3.ogg',
  },
  forms: [
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/3/',
    },
  ],
  game_indices: [
    {
      game_index: 154,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/',
      },
    },
    {
      game_index: 154,
      version: {
        name: 'blue',
        url: 'https://pokeapi.co/api/v2/version/2/',
      },
    },
    {
      game_index: 154,
      version: {
        name: 'yellow',
        url: 'https://pokeapi.co/api/v2/version/3/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'gold',
        url: 'https://pokeapi.co/api/v2/version/4/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'silver',
        url: 'https://pokeapi.co/api/v2/version/5/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'crystal',
        url: 'https://pokeapi.co/api/v2/version/6/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'ruby',
        url: 'https://pokeapi.co/api/v2/version/7/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'emerald',
        url: 'https://pokeapi.co/api/v2/version/9/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'pearl',
        url: 'https://pokeapi.co/api/v2/version/13/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'black',
        url: 'https://pokeapi.co/api/v2/version/17/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'white',
        url: 'https://pokeapi.co/api/v2/version/18/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      game_index: 3,
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
  ],
  height: 20,
  held_items: [],
  id: 3,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/3/encounters',
  moves: [
    {
      move: {
        name: 'swords-dance',
        url: 'https://pokeapi.co/api/v2/move/14/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'cut',
        url: 'https://pokeapi.co/api/v2/move/15/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bind',
        url: 'https://pokeapi.co/api/v2/move/20/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'vine-whip',
        url: 'https://pokeapi.co/api/v2/move/22/',
      },
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
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'headbutt',
        url: 'https://pokeapi.co/api/v2/move/29/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'tackle',
        url: 'https://pokeapi.co/api/v2/move/33/',
      },
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
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'body-slam',
        url: 'https://pokeapi.co/api/v2/move/34/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'take-down',
        url: 'https://pokeapi.co/api/v2/move/36/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-edge',
        url: 'https://pokeapi.co/api/v2/move/38/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'growl',
        url: 'https://pokeapi.co/api/v2/move/45/',
      },
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
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'roar',
        url: 'https://pokeapi.co/api/v2/move/46/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'hyper-beam',
        url: 'https://pokeapi.co/api/v2/move/63/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'strength',
        url: 'https://pokeapi.co/api/v2/move/70/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mega-drain',
        url: 'https://pokeapi.co/api/v2/move/72/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'leech-seed',
        url: 'https://pokeapi.co/api/v2/move/73/',
      },
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
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'growth',
        url: 'https://pokeapi.co/api/v2/move/74/',
      },
      version_group_details: [
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'razor-leaf',
        url: 'https://pokeapi.co/api/v2/move/75/',
      },
      version_group_details: [
        {
          level_learned_at: 30,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'solar-beam',
        url: 'https://pokeapi.co/api/v2/move/76/',
      },
      version_group_details: [
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 71,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'poison-powder',
        url: 'https://pokeapi.co/api/v2/move/77/',
      },
      version_group_details: [
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 14,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sleep-powder',
        url: 'https://pokeapi.co/api/v2/move/79/',
      },
      version_group_details: [
        {
          level_learned_at: 55,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 14,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'petal-dance',
        url: 'https://pokeapi.co/api/v2/move/80/',
      },
      version_group_details: [
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'string-shot',
        url: 'https://pokeapi.co/api/v2/move/81/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'earthquake',
        url: 'https://pokeapi.co/api/v2/move/89/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'toxic',
        url: 'https://pokeapi.co/api/v2/move/92/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rage',
        url: 'https://pokeapi.co/api/v2/move/99/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mimic',
        url: 'https://pokeapi.co/api/v2/move/102/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-team',
        url: 'https://pokeapi.co/api/v2/move/104/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'defense-curl',
        url: 'https://pokeapi.co/api/v2/move/111/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
      ],
    },
    {
      move: {
        name: 'light-screen',
        url: 'https://pokeapi.co/api/v2/move/113/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'reflect',
        url: 'https://pokeapi.co/api/v2/move/115/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bide',
        url: 'https://pokeapi.co/api/v2/move/117/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'amnesia',
        url: 'https://pokeapi.co/api/v2/move/133/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'flash',
        url: 'https://pokeapi.co/api/v2/move/148/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rest',
        url: 'https://pokeapi.co/api/v2/move/156/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'substitute',
        url: 'https://pokeapi.co/api/v2/move/164/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'snore',
        url: 'https://pokeapi.co/api/v2/move/173/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'curse',
        url: 'https://pokeapi.co/api/v2/move/174/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'protect',
        url: 'https://pokeapi.co/api/v2/move/182/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'scary-face',
        url: 'https://pokeapi.co/api/v2/move/184/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sludge-bomb',
        url: 'https://pokeapi.co/api/v2/move/188/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mud-slap',
        url: 'https://pokeapi.co/api/v2/move/189/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'outrage',
        url: 'https://pokeapi.co/api/v2/move/200/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'giga-drain',
        url: 'https://pokeapi.co/api/v2/move/202/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'endure',
        url: 'https://pokeapi.co/api/v2/move/203/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'charm',
        url: 'https://pokeapi.co/api/v2/move/204/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'false-swipe',
        url: 'https://pokeapi.co/api/v2/move/206/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'swagger',
        url: 'https://pokeapi.co/api/v2/move/207/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fury-cutter',
        url: 'https://pokeapi.co/api/v2/move/210/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'attract',
        url: 'https://pokeapi.co/api/v2/move/213/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sleep-talk',
        url: 'https://pokeapi.co/api/v2/move/214/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'return',
        url: 'https://pokeapi.co/api/v2/move/216/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'frustration',
        url: 'https://pokeapi.co/api/v2/move/218/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'safeguard',
        url: 'https://pokeapi.co/api/v2/move/219/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sweet-scent',
        url: 'https://pokeapi.co/api/v2/move/230/',
      },
      version_group_details: [
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 30,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'synthesis',
        url: 'https://pokeapi.co/api/v2/move/235/',
      },
      version_group_details: [
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'hidden-power',
        url: 'https://pokeapi.co/api/v2/move/237/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sunny-day',
        url: 'https://pokeapi.co/api/v2/move/241/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-smash',
        url: 'https://pokeapi.co/api/v2/move/249/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'facade',
        url: 'https://pokeapi.co/api/v2/move/263/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'nature-power',
        url: 'https://pokeapi.co/api/v2/move/267/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'helping-hand',
        url: 'https://pokeapi.co/api/v2/move/270/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'ingrain',
        url: 'https://pokeapi.co/api/v2/move/275/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'knock-off',
        url: 'https://pokeapi.co/api/v2/move/282/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'secret-power',
        url: 'https://pokeapi.co/api/v2/move/290/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'weather-ball',
        url: 'https://pokeapi.co/api/v2/move/311/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bullet-seed',
        url: 'https://pokeapi.co/api/v2/move/331/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'block',
        url: 'https://pokeapi.co/api/v2/move/335/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'frenzy-plant',
        url: 'https://pokeapi.co/api/v2/move/338/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'magical-leaf',
        url: 'https://pokeapi.co/api/v2/move/345/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'natural-gift',
        url: 'https://pokeapi.co/api/v2/move/363/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'worry-seed',
        url: 'https://pokeapi.co/api/v2/move/388/',
      },
      version_group_details: [
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'poison-jab',
        url: 'https://pokeapi.co/api/v2/move/398/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'seed-bomb',
        url: 'https://pokeapi.co/api/v2/move/402/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'energy-ball',
        url: 'https://pokeapi.co/api/v2/move/412/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'earth-power',
        url: 'https://pokeapi.co/api/v2/move/414/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'giga-impact',
        url: 'https://pokeapi.co/api/v2/move/416/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-climb',
        url: 'https://pokeapi.co/api/v2/move/431/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'leaf-storm',
        url: 'https://pokeapi.co/api/v2/move/437/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'power-whip',
        url: 'https://pokeapi.co/api/v2/move/438/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'captivate',
        url: 'https://pokeapi.co/api/v2/move/445/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grass-knot',
        url: 'https://pokeapi.co/api/v2/move/447/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'venoshock',
        url: 'https://pokeapi.co/api/v2/move/474/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'acid-spray',
        url: 'https://pokeapi.co/api/v2/move/491/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'round',
        url: 'https://pokeapi.co/api/v2/move/496/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'echoed-voice',
        url: 'https://pokeapi.co/api/v2/move/497/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grass-pledge',
        url: 'https://pokeapi.co/api/v2/move/520/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bulldoze',
        url: 'https://pokeapi.co/api/v2/move/523/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'work-up',
        url: 'https://pokeapi.co/api/v2/move/526/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'petal-blizzard',
        url: 'https://pokeapi.co/api/v2/move/572/',
      },
      version_group_details: [
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grassy-terrain',
        url: 'https://pokeapi.co/api/v2/move/580/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'confide',
        url: 'https://pokeapi.co/api/v2/move/590/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'stomping-tantrum',
        url: 'https://pokeapi.co/api/v2/move/707/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grassy-glide',
        url: 'https://pokeapi.co/api/v2/move/803/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'terrain-pulse',
        url: 'https://pokeapi.co/api/v2/move/805/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'tera-blast',
        url: 'https://pokeapi.co/api/v2/move/851/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'trailblaze',
        url: 'https://pokeapi.co/api/v2/move/885/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
  ],
  name: 'venusaur',
  order: 3,
  past_abilities: [],
  past_types: [],
  species: {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
    back_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png',
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png',
    back_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    front_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png',
    front_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png',
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
        front_female: null,
      },
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png',
        front_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/3.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/3.png',
        front_shiny_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/3.png',
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png',
      },
      showdown: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/3.gif',
        back_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/female/3.gif',
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/3.gif',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif',
        front_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/female/3.gif',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/3.gif',
        front_shiny_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/female/3.gif',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/3.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/3.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/3.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/3.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/3.png',
        },
        yellow: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/3.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/3.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/3.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/3.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/3.png',
        },
      },
      'generation-ii': {
        crystal: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/3.png',
          back_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/3.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/3.png',
          front_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/3.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/3.png',
        },
        gold: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/3.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/3.png',
        },
        silver: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/3.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/3.png',
        },
      },
      'generation-iii': {
        emerald: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/3.png',
        },
        'firered-leafgreen': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/3.png',
        },
        'ruby-sapphire': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/3.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/3.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/3.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/3.png',
        },
        'heartgold-soulsilver': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/3.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/3.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/3.png',
        },
        platinum: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/3.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/3.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/3.png',
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif',
            back_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/3.gif',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/3.gif',
            back_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/3.gif',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif',
            front_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/3.gif',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/3.gif',
            front_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/3.gif',
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/3.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/3.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/3.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/3.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/3.png',
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/3.png',
        },
        'x-y': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/3.png',
        },
      },
      'generation-vii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png',
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/3.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/3.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/3.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/3.png',
        },
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/3.png',
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 80,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 82,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 83,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 100,
      effort: 2,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 100,
      effort: 1,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 80,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
  weight: 1000,
}
const type1 = {
  damage_relations: {
    double_damage_from: [
      {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/type/5/',
      },
      {
        name: 'psychic',
        url: 'https://pokeapi.co/api/v2/type/14/',
      },
    ],
    double_damage_to: [
      {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
      {
        name: 'fairy',
        url: 'https://pokeapi.co/api/v2/type/18/',
      },
    ],
    half_damage_from: [
      {
        name: 'fighting',
        url: 'https://pokeapi.co/api/v2/type/2/',
      },
      {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
      {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/type/7/',
      },
      {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
      {
        name: 'fairy',
        url: 'https://pokeapi.co/api/v2/type/18/',
      },
    ],
    half_damage_to: [
      {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
      {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/type/5/',
      },
      {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/6/',
      },
      {
        name: 'ghost',
        url: 'https://pokeapi.co/api/v2/type/8/',
      },
    ],
    no_damage_from: [],
    no_damage_to: [
      {
        name: 'steel',
        url: 'https://pokeapi.co/api/v2/type/9/',
      },
    ],
  },
  game_indices: [
    {
      game_index: 3,
      generation: {
        name: 'generation-i',
        url: 'https://pokeapi.co/api/v2/generation/1/',
      },
    },
    {
      game_index: 3,
      generation: {
        name: 'generation-ii',
        url: 'https://pokeapi.co/api/v2/generation/2/',
      },
    },
    {
      game_index: 3,
      generation: {
        name: 'generation-iii',
        url: 'https://pokeapi.co/api/v2/generation/3/',
      },
    },
    {
      game_index: 3,
      generation: {
        name: 'generation-iv',
        url: 'https://pokeapi.co/api/v2/generation/4/',
      },
    },
    {
      game_index: 3,
      generation: {
        name: 'generation-v',
        url: 'https://pokeapi.co/api/v2/generation/5/',
      },
    },
    {
      game_index: 3,
      generation: {
        name: 'generation-vi',
        url: 'https://pokeapi.co/api/v2/generation/6/',
      },
    },
  ],
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/',
  },
  id: 4,
  move_damage_class: {
    name: 'physical',
    url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
  },
  moves: [
    {
      name: 'poison-sting',
      url: 'https://pokeapi.co/api/v2/move/40/',
    },
    {
      name: 'acid',
      url: 'https://pokeapi.co/api/v2/move/51/',
    },
    {
      name: 'poison-powder',
      url: 'https://pokeapi.co/api/v2/move/77/',
    },
    {
      name: 'toxic',
      url: 'https://pokeapi.co/api/v2/move/92/',
    },
    {
      name: 'smog',
      url: 'https://pokeapi.co/api/v2/move/123/',
    },
    {
      name: 'sludge',
      url: 'https://pokeapi.co/api/v2/move/124/',
    },
    {
      name: 'poison-gas',
      url: 'https://pokeapi.co/api/v2/move/139/',
    },
    {
      name: 'acid-armor',
      url: 'https://pokeapi.co/api/v2/move/151/',
    },
    {
      name: 'sludge-bomb',
      url: 'https://pokeapi.co/api/v2/move/188/',
    },
    {
      name: 'poison-fang',
      url: 'https://pokeapi.co/api/v2/move/305/',
    },
    {
      name: 'poison-tail',
      url: 'https://pokeapi.co/api/v2/move/342/',
    },
    {
      name: 'gastro-acid',
      url: 'https://pokeapi.co/api/v2/move/380/',
    },
    {
      name: 'toxic-spikes',
      url: 'https://pokeapi.co/api/v2/move/390/',
    },
    {
      name: 'poison-jab',
      url: 'https://pokeapi.co/api/v2/move/398/',
    },
    {
      name: 'cross-poison',
      url: 'https://pokeapi.co/api/v2/move/440/',
    },
    {
      name: 'gunk-shot',
      url: 'https://pokeapi.co/api/v2/move/441/',
    },
    {
      name: 'venoshock',
      url: 'https://pokeapi.co/api/v2/move/474/',
    },
    {
      name: 'sludge-wave',
      url: 'https://pokeapi.co/api/v2/move/482/',
    },
    {
      name: 'coil',
      url: 'https://pokeapi.co/api/v2/move/489/',
    },
    {
      name: 'acid-spray',
      url: 'https://pokeapi.co/api/v2/move/491/',
    },
    {
      name: 'clear-smog',
      url: 'https://pokeapi.co/api/v2/move/499/',
    },
    {
      name: 'belch',
      url: 'https://pokeapi.co/api/v2/move/562/',
    },
    {
      name: 'venom-drench',
      url: 'https://pokeapi.co/api/v2/move/599/',
    },
    {
      name: 'acid-downpour--physical',
      url: 'https://pokeapi.co/api/v2/move/628/',
    },
    {
      name: 'acid-downpour--special',
      url: 'https://pokeapi.co/api/v2/move/629/',
    },
    {
      name: 'baneful-bunker',
      url: 'https://pokeapi.co/api/v2/move/661/',
    },
    {
      name: 'toxic-thread',
      url: 'https://pokeapi.co/api/v2/move/672/',
    },
    {
      name: 'purify',
      url: 'https://pokeapi.co/api/v2/move/685/',
    },
    {
      name: 'max-ooze',
      url: 'https://pokeapi.co/api/v2/move/764/',
    },
    {
      name: 'shell-side-arm',
      url: 'https://pokeapi.co/api/v2/move/801/',
    },
    {
      name: 'corrosive-gas',
      url: 'https://pokeapi.co/api/v2/move/810/',
    },
    {
      name: 'dire-claw',
      url: 'https://pokeapi.co/api/v2/move/827/',
    },
    {
      name: 'barb-barrage',
      url: 'https://pokeapi.co/api/v2/move/839/',
    },
    {
      name: 'mortal-spin',
      url: 'https://pokeapi.co/api/v2/move/866/',
    },
    {
      name: 'noxious-torque',
      url: 'https://pokeapi.co/api/v2/move/898/',
    },
    {
      name: 'malignant-chain',
      url: 'https://pokeapi.co/api/v2/move/919/',
    },
  ],
  name: 'poison',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'どく',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '독',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '毒',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Poison',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Gift',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Veneno',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Veleno',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Poison',
    },
    {
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      name: 'どく',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '毒',
    },
  ],
  past_damage_relations: [
    {
      damage_relations: {
        double_damage_from: [
          {
            name: 'ground',
            url: 'https://pokeapi.co/api/v2/type/5/',
          },
          {
            name: 'psychic',
            url: 'https://pokeapi.co/api/v2/type/14/',
          },
          {
            name: 'bug',
            url: 'https://pokeapi.co/api/v2/type/7/',
          },
        ],
        double_damage_to: [
          {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
          {
            name: 'bug',
            url: 'https://pokeapi.co/api/v2/type/7/',
          },
        ],
        half_damage_from: [
          {
            name: 'fighting',
            url: 'https://pokeapi.co/api/v2/type/2/',
          },
          {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
          {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        ],
        half_damage_to: [
          {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
          {
            name: 'ground',
            url: 'https://pokeapi.co/api/v2/type/5/',
          },
          {
            name: 'rock',
            url: 'https://pokeapi.co/api/v2/type/6/',
          },
          {
            name: 'ghost',
            url: 'https://pokeapi.co/api/v2/type/8/',
          },
        ],
        no_damage_from: [],
        no_damage_to: [],
      },
      generation: {
        name: 'generation-i',
        url: 'https://pokeapi.co/api/v2/generation/1/',
      },
    },
  ],
  pokemon: [
    {
      pokemon: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'weedle',
        url: 'https://pokeapi.co/api/v2/pokemon/13/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'kakuna',
        url: 'https://pokeapi.co/api/v2/pokemon/14/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'beedrill',
        url: 'https://pokeapi.co/api/v2/pokemon/15/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'ekans',
        url: 'https://pokeapi.co/api/v2/pokemon/23/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'arbok',
        url: 'https://pokeapi.co/api/v2/pokemon/24/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nidoran-f',
        url: 'https://pokeapi.co/api/v2/pokemon/29/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nidorina',
        url: 'https://pokeapi.co/api/v2/pokemon/30/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nidoqueen',
        url: 'https://pokeapi.co/api/v2/pokemon/31/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nidoran-m',
        url: 'https://pokeapi.co/api/v2/pokemon/32/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nidorino',
        url: 'https://pokeapi.co/api/v2/pokemon/33/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nidoking',
        url: 'https://pokeapi.co/api/v2/pokemon/34/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'zubat',
        url: 'https://pokeapi.co/api/v2/pokemon/41/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'golbat',
        url: 'https://pokeapi.co/api/v2/pokemon/42/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'oddish',
        url: 'https://pokeapi.co/api/v2/pokemon/43/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gloom',
        url: 'https://pokeapi.co/api/v2/pokemon/44/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'vileplume',
        url: 'https://pokeapi.co/api/v2/pokemon/45/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'venonat',
        url: 'https://pokeapi.co/api/v2/pokemon/48/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'venomoth',
        url: 'https://pokeapi.co/api/v2/pokemon/49/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'bellsprout',
        url: 'https://pokeapi.co/api/v2/pokemon/69/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'weepinbell',
        url: 'https://pokeapi.co/api/v2/pokemon/70/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'victreebel',
        url: 'https://pokeapi.co/api/v2/pokemon/71/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'tentacool',
        url: 'https://pokeapi.co/api/v2/pokemon/72/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'tentacruel',
        url: 'https://pokeapi.co/api/v2/pokemon/73/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'grimer',
        url: 'https://pokeapi.co/api/v2/pokemon/88/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'muk',
        url: 'https://pokeapi.co/api/v2/pokemon/89/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'gastly',
        url: 'https://pokeapi.co/api/v2/pokemon/92/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'haunter',
        url: 'https://pokeapi.co/api/v2/pokemon/93/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gengar',
        url: 'https://pokeapi.co/api/v2/pokemon/94/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'koffing',
        url: 'https://pokeapi.co/api/v2/pokemon/109/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'weezing',
        url: 'https://pokeapi.co/api/v2/pokemon/110/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'spinarak',
        url: 'https://pokeapi.co/api/v2/pokemon/167/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'ariados',
        url: 'https://pokeapi.co/api/v2/pokemon/168/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'crobat',
        url: 'https://pokeapi.co/api/v2/pokemon/169/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'qwilfish',
        url: 'https://pokeapi.co/api/v2/pokemon/211/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'dustox',
        url: 'https://pokeapi.co/api/v2/pokemon/269/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'roselia',
        url: 'https://pokeapi.co/api/v2/pokemon/315/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gulpin',
        url: 'https://pokeapi.co/api/v2/pokemon/316/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'swalot',
        url: 'https://pokeapi.co/api/v2/pokemon/317/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'seviper',
        url: 'https://pokeapi.co/api/v2/pokemon/336/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'budew',
        url: 'https://pokeapi.co/api/v2/pokemon/406/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'roserade',
        url: 'https://pokeapi.co/api/v2/pokemon/407/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'stunky',
        url: 'https://pokeapi.co/api/v2/pokemon/434/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'skuntank',
        url: 'https://pokeapi.co/api/v2/pokemon/435/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'skorupi',
        url: 'https://pokeapi.co/api/v2/pokemon/451/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'drapion',
        url: 'https://pokeapi.co/api/v2/pokemon/452/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'croagunk',
        url: 'https://pokeapi.co/api/v2/pokemon/453/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'toxicroak',
        url: 'https://pokeapi.co/api/v2/pokemon/454/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'venipede',
        url: 'https://pokeapi.co/api/v2/pokemon/543/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'whirlipede',
        url: 'https://pokeapi.co/api/v2/pokemon/544/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'scolipede',
        url: 'https://pokeapi.co/api/v2/pokemon/545/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'trubbish',
        url: 'https://pokeapi.co/api/v2/pokemon/568/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'garbodor',
        url: 'https://pokeapi.co/api/v2/pokemon/569/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'foongus',
        url: 'https://pokeapi.co/api/v2/pokemon/590/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'amoonguss',
        url: 'https://pokeapi.co/api/v2/pokemon/591/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'skrelp',
        url: 'https://pokeapi.co/api/v2/pokemon/690/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'dragalge',
        url: 'https://pokeapi.co/api/v2/pokemon/691/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'mareanie',
        url: 'https://pokeapi.co/api/v2/pokemon/747/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'toxapex',
        url: 'https://pokeapi.co/api/v2/pokemon/748/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'salandit',
        url: 'https://pokeapi.co/api/v2/pokemon/757/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'salazzle',
        url: 'https://pokeapi.co/api/v2/pokemon/758/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nihilego',
        url: 'https://pokeapi.co/api/v2/pokemon/793/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'poipole',
        url: 'https://pokeapi.co/api/v2/pokemon/803/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'naganadel',
        url: 'https://pokeapi.co/api/v2/pokemon/804/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'toxel',
        url: 'https://pokeapi.co/api/v2/pokemon/848/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'toxtricity-amped',
        url: 'https://pokeapi.co/api/v2/pokemon/849/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'eternatus',
        url: 'https://pokeapi.co/api/v2/pokemon/890/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sneasler',
        url: 'https://pokeapi.co/api/v2/pokemon/903/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'overqwil',
        url: 'https://pokeapi.co/api/v2/pokemon/904/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'shroodle',
        url: 'https://pokeapi.co/api/v2/pokemon/944/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'grafaiai',
        url: 'https://pokeapi.co/api/v2/pokemon/945/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'varoom',
        url: 'https://pokeapi.co/api/v2/pokemon/965/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'revavroom',
        url: 'https://pokeapi.co/api/v2/pokemon/966/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'glimmet',
        url: 'https://pokeapi.co/api/v2/pokemon/969/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'glimmora',
        url: 'https://pokeapi.co/api/v2/pokemon/970/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'clodsire',
        url: 'https://pokeapi.co/api/v2/pokemon/980/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'iron-moth',
        url: 'https://pokeapi.co/api/v2/pokemon/994/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'okidogi',
        url: 'https://pokeapi.co/api/v2/pokemon/1014/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'munkidori',
        url: 'https://pokeapi.co/api/v2/pokemon/1015/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'fezandipiti',
        url: 'https://pokeapi.co/api/v2/pokemon/1016/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'pecharunt',
        url: 'https://pokeapi.co/api/v2/pokemon/1025/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'venusaur-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10033/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gengar-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10038/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'beedrill-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10090/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'grimer-alola',
        url: 'https://pokeapi.co/api/v2/pokemon/10112/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'muk-alola',
        url: 'https://pokeapi.co/api/v2/pokemon/10113/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'salazzle-totem',
        url: 'https://pokeapi.co/api/v2/pokemon/10129/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'slowbro-galar',
        url: 'https://pokeapi.co/api/v2/pokemon/10165/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'weezing-galar',
        url: 'https://pokeapi.co/api/v2/pokemon/10167/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'slowking-galar',
        url: 'https://pokeapi.co/api/v2/pokemon/10172/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'toxtricity-low-key',
        url: 'https://pokeapi.co/api/v2/pokemon/10184/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'eternatus-eternamax',
        url: 'https://pokeapi.co/api/v2/pokemon/10190/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'venusaur-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10195/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gengar-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10202/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'garbodor-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10207/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'toxtricity-amped-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10219/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'toxtricity-low-key-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10228/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'qwilfish-hisui',
        url: 'https://pokeapi.co/api/v2/pokemon/10234/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'sneasel-hisui',
        url: 'https://pokeapi.co/api/v2/pokemon/10235/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'wooper-paldea',
        url: 'https://pokeapi.co/api/v2/pokemon/10253/',
      },
      slot: 1,
    },
  ],
}
const type2 = {
  damage_relations: {
    double_damage_from: [
      {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/',
      },
      {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
      {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/type/7/',
      },
      {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
      {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/15/',
      },
    ],
    double_damage_to: [
      {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/type/5/',
      },
      {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/6/',
      },
      {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/11/',
      },
    ],
    half_damage_from: [
      {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/type/5/',
      },
      {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/11/',
      },
      {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
      {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/',
      },
    ],
    half_damage_to: [
      {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/',
      },
      {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
      {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/type/7/',
      },
      {
        name: 'steel',
        url: 'https://pokeapi.co/api/v2/type/9/',
      },
      {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
      {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
      {
        name: 'dragon',
        url: 'https://pokeapi.co/api/v2/type/16/',
      },
    ],
    no_damage_from: [],
    no_damage_to: [],
  },
  game_indices: [
    {
      game_index: 22,
      generation: {
        name: 'generation-i',
        url: 'https://pokeapi.co/api/v2/generation/1/',
      },
    },
    {
      game_index: 22,
      generation: {
        name: 'generation-ii',
        url: 'https://pokeapi.co/api/v2/generation/2/',
      },
    },
    {
      game_index: 12,
      generation: {
        name: 'generation-iii',
        url: 'https://pokeapi.co/api/v2/generation/3/',
      },
    },
    {
      game_index: 12,
      generation: {
        name: 'generation-iv',
        url: 'https://pokeapi.co/api/v2/generation/4/',
      },
    },
    {
      game_index: 11,
      generation: {
        name: 'generation-v',
        url: 'https://pokeapi.co/api/v2/generation/5/',
      },
    },
    {
      game_index: 11,
      generation: {
        name: 'generation-vi',
        url: 'https://pokeapi.co/api/v2/generation/6/',
      },
    },
  ],
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/',
  },
  id: 12,
  move_damage_class: {
    name: 'special',
    url: 'https://pokeapi.co/api/v2/move-damage-class/3/',
  },
  moves: [
    {
      name: 'vine-whip',
      url: 'https://pokeapi.co/api/v2/move/22/',
    },
    {
      name: 'absorb',
      url: 'https://pokeapi.co/api/v2/move/71/',
    },
    {
      name: 'mega-drain',
      url: 'https://pokeapi.co/api/v2/move/72/',
    },
    {
      name: 'leech-seed',
      url: 'https://pokeapi.co/api/v2/move/73/',
    },
    {
      name: 'razor-leaf',
      url: 'https://pokeapi.co/api/v2/move/75/',
    },
    {
      name: 'solar-beam',
      url: 'https://pokeapi.co/api/v2/move/76/',
    },
    {
      name: 'stun-spore',
      url: 'https://pokeapi.co/api/v2/move/78/',
    },
    {
      name: 'sleep-powder',
      url: 'https://pokeapi.co/api/v2/move/79/',
    },
    {
      name: 'petal-dance',
      url: 'https://pokeapi.co/api/v2/move/80/',
    },
    {
      name: 'spore',
      url: 'https://pokeapi.co/api/v2/move/147/',
    },
    {
      name: 'cotton-spore',
      url: 'https://pokeapi.co/api/v2/move/178/',
    },
    {
      name: 'giga-drain',
      url: 'https://pokeapi.co/api/v2/move/202/',
    },
    {
      name: 'synthesis',
      url: 'https://pokeapi.co/api/v2/move/235/',
    },
    {
      name: 'ingrain',
      url: 'https://pokeapi.co/api/v2/move/275/',
    },
    {
      name: 'needle-arm',
      url: 'https://pokeapi.co/api/v2/move/302/',
    },
    {
      name: 'aromatherapy',
      url: 'https://pokeapi.co/api/v2/move/312/',
    },
    {
      name: 'grass-whistle',
      url: 'https://pokeapi.co/api/v2/move/320/',
    },
    {
      name: 'bullet-seed',
      url: 'https://pokeapi.co/api/v2/move/331/',
    },
    {
      name: 'frenzy-plant',
      url: 'https://pokeapi.co/api/v2/move/338/',
    },
    {
      name: 'magical-leaf',
      url: 'https://pokeapi.co/api/v2/move/345/',
    },
    {
      name: 'leaf-blade',
      url: 'https://pokeapi.co/api/v2/move/348/',
    },
    {
      name: 'worry-seed',
      url: 'https://pokeapi.co/api/v2/move/388/',
    },
    {
      name: 'seed-bomb',
      url: 'https://pokeapi.co/api/v2/move/402/',
    },
    {
      name: 'energy-ball',
      url: 'https://pokeapi.co/api/v2/move/412/',
    },
    {
      name: 'leaf-storm',
      url: 'https://pokeapi.co/api/v2/move/437/',
    },
    {
      name: 'power-whip',
      url: 'https://pokeapi.co/api/v2/move/438/',
    },
    {
      name: 'grass-knot',
      url: 'https://pokeapi.co/api/v2/move/447/',
    },
    {
      name: 'wood-hammer',
      url: 'https://pokeapi.co/api/v2/move/452/',
    },
    {
      name: 'seed-flare',
      url: 'https://pokeapi.co/api/v2/move/465/',
    },
    {
      name: 'grass-pledge',
      url: 'https://pokeapi.co/api/v2/move/520/',
    },
    {
      name: 'horn-leech',
      url: 'https://pokeapi.co/api/v2/move/532/',
    },
    {
      name: 'leaf-tornado',
      url: 'https://pokeapi.co/api/v2/move/536/',
    },
    {
      name: 'cotton-guard',
      url: 'https://pokeapi.co/api/v2/move/538/',
    },
    {
      name: 'forests-curse',
      url: 'https://pokeapi.co/api/v2/move/571/',
    },
    {
      name: 'petal-blizzard',
      url: 'https://pokeapi.co/api/v2/move/572/',
    },
    {
      name: 'grassy-terrain',
      url: 'https://pokeapi.co/api/v2/move/580/',
    },
    {
      name: 'spiky-shield',
      url: 'https://pokeapi.co/api/v2/move/596/',
    },
    {
      name: 'bloom-doom--physical',
      url: 'https://pokeapi.co/api/v2/move/644/',
    },
    {
      name: 'bloom-doom--special',
      url: 'https://pokeapi.co/api/v2/move/645/',
    },
    {
      name: 'strength-sap',
      url: 'https://pokeapi.co/api/v2/move/668/',
    },
    {
      name: 'solar-blade',
      url: 'https://pokeapi.co/api/v2/move/669/',
    },
    {
      name: 'leafage',
      url: 'https://pokeapi.co/api/v2/move/670/',
    },
    {
      name: 'trop-kick',
      url: 'https://pokeapi.co/api/v2/move/688/',
    },
    {
      name: 'sappy-seed',
      url: 'https://pokeapi.co/api/v2/move/738/',
    },
    {
      name: 'max-overgrowth',
      url: 'https://pokeapi.co/api/v2/move/773/',
    },
    {
      name: 'drum-beating',
      url: 'https://pokeapi.co/api/v2/move/778/',
    },
    {
      name: 'snap-trap',
      url: 'https://pokeapi.co/api/v2/move/779/',
    },
    {
      name: 'branch-poke',
      url: 'https://pokeapi.co/api/v2/move/785/',
    },
    {
      name: 'apple-acid',
      url: 'https://pokeapi.co/api/v2/move/787/',
    },
    {
      name: 'grav-apple',
      url: 'https://pokeapi.co/api/v2/move/788/',
    },
    {
      name: 'grassy-glide',
      url: 'https://pokeapi.co/api/v2/move/803/',
    },
    {
      name: 'jungle-healing',
      url: 'https://pokeapi.co/api/v2/move/816/',
    },
    {
      name: 'chloroblast',
      url: 'https://pokeapi.co/api/v2/move/835/',
    },
    {
      name: 'spicy-extract',
      url: 'https://pokeapi.co/api/v2/move/858/',
    },
    {
      name: 'flower-trick',
      url: 'https://pokeapi.co/api/v2/move/870/',
    },
    {
      name: 'trailblaze',
      url: 'https://pokeapi.co/api/v2/move/885/',
    },
    {
      name: 'matcha-gotcha',
      url: 'https://pokeapi.co/api/v2/move/902/',
    },
    {
      name: 'syrup-bomb',
      url: 'https://pokeapi.co/api/v2/move/903/',
    },
    {
      name: 'ivy-cudgel',
      url: 'https://pokeapi.co/api/v2/move/904/',
    },
  ],
  name: 'grass',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'くさ',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '풀',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '草',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Plante',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Pflanze',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Planta',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Erba',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Grass',
    },
    {
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      name: 'くさ',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '草',
    },
  ],
  past_damage_relations: [],
  pokemon: [
    {
      pokemon: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'oddish',
        url: 'https://pokeapi.co/api/v2/pokemon/43/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'gloom',
        url: 'https://pokeapi.co/api/v2/pokemon/44/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'vileplume',
        url: 'https://pokeapi.co/api/v2/pokemon/45/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'paras',
        url: 'https://pokeapi.co/api/v2/pokemon/46/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'parasect',
        url: 'https://pokeapi.co/api/v2/pokemon/47/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'bellsprout',
        url: 'https://pokeapi.co/api/v2/pokemon/69/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'weepinbell',
        url: 'https://pokeapi.co/api/v2/pokemon/70/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'victreebel',
        url: 'https://pokeapi.co/api/v2/pokemon/71/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'exeggcute',
        url: 'https://pokeapi.co/api/v2/pokemon/102/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'exeggutor',
        url: 'https://pokeapi.co/api/v2/pokemon/103/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'tangela',
        url: 'https://pokeapi.co/api/v2/pokemon/114/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'chikorita',
        url: 'https://pokeapi.co/api/v2/pokemon/152/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'bayleef',
        url: 'https://pokeapi.co/api/v2/pokemon/153/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'meganium',
        url: 'https://pokeapi.co/api/v2/pokemon/154/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'bellossom',
        url: 'https://pokeapi.co/api/v2/pokemon/182/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'hoppip',
        url: 'https://pokeapi.co/api/v2/pokemon/187/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'skiploom',
        url: 'https://pokeapi.co/api/v2/pokemon/188/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'jumpluff',
        url: 'https://pokeapi.co/api/v2/pokemon/189/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sunkern',
        url: 'https://pokeapi.co/api/v2/pokemon/191/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sunflora',
        url: 'https://pokeapi.co/api/v2/pokemon/192/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'celebi',
        url: 'https://pokeapi.co/api/v2/pokemon/251/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'treecko',
        url: 'https://pokeapi.co/api/v2/pokemon/252/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'grovyle',
        url: 'https://pokeapi.co/api/v2/pokemon/253/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sceptile',
        url: 'https://pokeapi.co/api/v2/pokemon/254/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'lotad',
        url: 'https://pokeapi.co/api/v2/pokemon/270/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'lombre',
        url: 'https://pokeapi.co/api/v2/pokemon/271/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'ludicolo',
        url: 'https://pokeapi.co/api/v2/pokemon/272/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'seedot',
        url: 'https://pokeapi.co/api/v2/pokemon/273/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'nuzleaf',
        url: 'https://pokeapi.co/api/v2/pokemon/274/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'shiftry',
        url: 'https://pokeapi.co/api/v2/pokemon/275/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'shroomish',
        url: 'https://pokeapi.co/api/v2/pokemon/285/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'breloom',
        url: 'https://pokeapi.co/api/v2/pokemon/286/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'roselia',
        url: 'https://pokeapi.co/api/v2/pokemon/315/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'cacnea',
        url: 'https://pokeapi.co/api/v2/pokemon/331/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'cacturne',
        url: 'https://pokeapi.co/api/v2/pokemon/332/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'lileep',
        url: 'https://pokeapi.co/api/v2/pokemon/345/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'cradily',
        url: 'https://pokeapi.co/api/v2/pokemon/346/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'tropius',
        url: 'https://pokeapi.co/api/v2/pokemon/357/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'turtwig',
        url: 'https://pokeapi.co/api/v2/pokemon/387/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'grotle',
        url: 'https://pokeapi.co/api/v2/pokemon/388/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'torterra',
        url: 'https://pokeapi.co/api/v2/pokemon/389/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'budew',
        url: 'https://pokeapi.co/api/v2/pokemon/406/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'roserade',
        url: 'https://pokeapi.co/api/v2/pokemon/407/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'wormadam-plant',
        url: 'https://pokeapi.co/api/v2/pokemon/413/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'cherubi',
        url: 'https://pokeapi.co/api/v2/pokemon/420/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'cherrim',
        url: 'https://pokeapi.co/api/v2/pokemon/421/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'carnivine',
        url: 'https://pokeapi.co/api/v2/pokemon/455/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'snover',
        url: 'https://pokeapi.co/api/v2/pokemon/459/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'abomasnow',
        url: 'https://pokeapi.co/api/v2/pokemon/460/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'tangrowth',
        url: 'https://pokeapi.co/api/v2/pokemon/465/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'leafeon',
        url: 'https://pokeapi.co/api/v2/pokemon/470/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'shaymin-land',
        url: 'https://pokeapi.co/api/v2/pokemon/492/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'snivy',
        url: 'https://pokeapi.co/api/v2/pokemon/495/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'servine',
        url: 'https://pokeapi.co/api/v2/pokemon/496/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'serperior',
        url: 'https://pokeapi.co/api/v2/pokemon/497/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'pansage',
        url: 'https://pokeapi.co/api/v2/pokemon/511/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'simisage',
        url: 'https://pokeapi.co/api/v2/pokemon/512/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sewaddle',
        url: 'https://pokeapi.co/api/v2/pokemon/540/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'swadloon',
        url: 'https://pokeapi.co/api/v2/pokemon/541/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'leavanny',
        url: 'https://pokeapi.co/api/v2/pokemon/542/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'cottonee',
        url: 'https://pokeapi.co/api/v2/pokemon/546/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'whimsicott',
        url: 'https://pokeapi.co/api/v2/pokemon/547/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'petilil',
        url: 'https://pokeapi.co/api/v2/pokemon/548/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'lilligant',
        url: 'https://pokeapi.co/api/v2/pokemon/549/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'maractus',
        url: 'https://pokeapi.co/api/v2/pokemon/556/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'deerling',
        url: 'https://pokeapi.co/api/v2/pokemon/585/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'sawsbuck',
        url: 'https://pokeapi.co/api/v2/pokemon/586/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'foongus',
        url: 'https://pokeapi.co/api/v2/pokemon/590/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'amoonguss',
        url: 'https://pokeapi.co/api/v2/pokemon/591/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ferroseed',
        url: 'https://pokeapi.co/api/v2/pokemon/597/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ferrothorn',
        url: 'https://pokeapi.co/api/v2/pokemon/598/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'virizion',
        url: 'https://pokeapi.co/api/v2/pokemon/640/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'chespin',
        url: 'https://pokeapi.co/api/v2/pokemon/650/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'quilladin',
        url: 'https://pokeapi.co/api/v2/pokemon/651/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'chesnaught',
        url: 'https://pokeapi.co/api/v2/pokemon/652/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'skiddo',
        url: 'https://pokeapi.co/api/v2/pokemon/672/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'gogoat',
        url: 'https://pokeapi.co/api/v2/pokemon/673/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'phantump',
        url: 'https://pokeapi.co/api/v2/pokemon/708/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'trevenant',
        url: 'https://pokeapi.co/api/v2/pokemon/709/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'pumpkaboo-average',
        url: 'https://pokeapi.co/api/v2/pokemon/710/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gourgeist-average',
        url: 'https://pokeapi.co/api/v2/pokemon/711/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'rowlet',
        url: 'https://pokeapi.co/api/v2/pokemon/722/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'dartrix',
        url: 'https://pokeapi.co/api/v2/pokemon/723/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'decidueye',
        url: 'https://pokeapi.co/api/v2/pokemon/724/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'fomantis',
        url: 'https://pokeapi.co/api/v2/pokemon/753/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'lurantis',
        url: 'https://pokeapi.co/api/v2/pokemon/754/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'morelull',
        url: 'https://pokeapi.co/api/v2/pokemon/755/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'shiinotic',
        url: 'https://pokeapi.co/api/v2/pokemon/756/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'bounsweet',
        url: 'https://pokeapi.co/api/v2/pokemon/761/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'steenee',
        url: 'https://pokeapi.co/api/v2/pokemon/762/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'tsareena',
        url: 'https://pokeapi.co/api/v2/pokemon/763/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'dhelmise',
        url: 'https://pokeapi.co/api/v2/pokemon/781/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'tapu-bulu',
        url: 'https://pokeapi.co/api/v2/pokemon/787/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'kartana',
        url: 'https://pokeapi.co/api/v2/pokemon/798/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'grookey',
        url: 'https://pokeapi.co/api/v2/pokemon/810/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'thwackey',
        url: 'https://pokeapi.co/api/v2/pokemon/811/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'rillaboom',
        url: 'https://pokeapi.co/api/v2/pokemon/812/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'gossifleur',
        url: 'https://pokeapi.co/api/v2/pokemon/829/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'eldegoss',
        url: 'https://pokeapi.co/api/v2/pokemon/830/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'applin',
        url: 'https://pokeapi.co/api/v2/pokemon/840/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'flapple',
        url: 'https://pokeapi.co/api/v2/pokemon/841/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'appletun',
        url: 'https://pokeapi.co/api/v2/pokemon/842/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'zarude',
        url: 'https://pokeapi.co/api/v2/pokemon/893/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'calyrex',
        url: 'https://pokeapi.co/api/v2/pokemon/898/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'sprigatito',
        url: 'https://pokeapi.co/api/v2/pokemon/906/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'floragato',
        url: 'https://pokeapi.co/api/v2/pokemon/907/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'meowscarada',
        url: 'https://pokeapi.co/api/v2/pokemon/908/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'smoliv',
        url: 'https://pokeapi.co/api/v2/pokemon/928/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'dolliv',
        url: 'https://pokeapi.co/api/v2/pokemon/929/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'arboliva',
        url: 'https://pokeapi.co/api/v2/pokemon/930/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'bramblin',
        url: 'https://pokeapi.co/api/v2/pokemon/946/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'brambleghast',
        url: 'https://pokeapi.co/api/v2/pokemon/947/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'toedscool',
        url: 'https://pokeapi.co/api/v2/pokemon/948/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'toedscruel',
        url: 'https://pokeapi.co/api/v2/pokemon/949/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'capsakid',
        url: 'https://pokeapi.co/api/v2/pokemon/951/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'scovillain',
        url: 'https://pokeapi.co/api/v2/pokemon/952/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'brute-bonnet',
        url: 'https://pokeapi.co/api/v2/pokemon/986/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'wo-chien',
        url: 'https://pokeapi.co/api/v2/pokemon/1001/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'iron-leaves',
        url: 'https://pokeapi.co/api/v2/pokemon/1010/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'dipplin',
        url: 'https://pokeapi.co/api/v2/pokemon/1011/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'poltchageist',
        url: 'https://pokeapi.co/api/v2/pokemon/1012/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sinistcha',
        url: 'https://pokeapi.co/api/v2/pokemon/1013/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ogerpon',
        url: 'https://pokeapi.co/api/v2/pokemon/1017/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'hydrapple',
        url: 'https://pokeapi.co/api/v2/pokemon/1019/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'shaymin-sky',
        url: 'https://pokeapi.co/api/v2/pokemon/10006/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'rotom-mow',
        url: 'https://pokeapi.co/api/v2/pokemon/10012/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'pumpkaboo-small',
        url: 'https://pokeapi.co/api/v2/pokemon/10027/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'pumpkaboo-large',
        url: 'https://pokeapi.co/api/v2/pokemon/10028/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'pumpkaboo-super',
        url: 'https://pokeapi.co/api/v2/pokemon/10029/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gourgeist-small',
        url: 'https://pokeapi.co/api/v2/pokemon/10030/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gourgeist-large',
        url: 'https://pokeapi.co/api/v2/pokemon/10031/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'gourgeist-super',
        url: 'https://pokeapi.co/api/v2/pokemon/10032/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'venusaur-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10033/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'abomasnow-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10060/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'sceptile-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10065/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'exeggutor-alola',
        url: 'https://pokeapi.co/api/v2/pokemon/10114/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'lurantis-totem',
        url: 'https://pokeapi.co/api/v2/pokemon/10128/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'zarude-dada',
        url: 'https://pokeapi.co/api/v2/pokemon/10192/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'venusaur-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10195/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'rillaboom-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10209/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'flapple-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10216/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'appletun-gmax',
        url: 'https://pokeapi.co/api/v2/pokemon/10217/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'voltorb-hisui',
        url: 'https://pokeapi.co/api/v2/pokemon/10231/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'electrode-hisui',
        url: 'https://pokeapi.co/api/v2/pokemon/10232/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'lilligant-hisui',
        url: 'https://pokeapi.co/api/v2/pokemon/10237/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'decidueye-hisui',
        url: 'https://pokeapi.co/api/v2/pokemon/10244/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ogerpon-wellspring-mask',
        url: 'https://pokeapi.co/api/v2/pokemon/10273/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ogerpon-hearthflame-mask',
        url: 'https://pokeapi.co/api/v2/pokemon/10274/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ogerpon-cornerstone-mask',
        url: 'https://pokeapi.co/api/v2/pokemon/10275/',
      },
      slot: 1,
    },
  ],
}
