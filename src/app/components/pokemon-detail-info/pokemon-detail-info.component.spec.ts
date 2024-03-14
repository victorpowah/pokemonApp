import { CommonModule } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  PokeApiPokemonResponse,
  Sprites,
} from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeApiTypeResponse } from '../../models/pokeApi-type-response.model'
import { PokemonDetailInfoComponent } from './pokemon-detail-info.component'
import { TranslateModule } from '@ngx-translate/core'

const pokemonSpecieResultMock: PokeApiPokemonSpecieResponse = {
  base_happiness: 70,
  capture_rate: 45,
  color: { name: 'blue', url: 'color_url' },
  egg_groups: [
    { name: 'group1', url: 'group1_url' },
    { name: 'group2', url: 'group2_url' },
  ],
  evolution_chain: { url: 'evolution_chain_url' },
  evolves_from_species: null,
  flavor_text_entries: [
    {
      flavor_text: 'Text',
      language: { name: 'en', url: 'en_url' },
      version: { name: 'version', url: 'version_url' },
    },
  ],
  form_descriptions: [],
  forms_switchable: true,
  gender_rate: 1,
  genera: [{ genus: 'Genus', language: { name: 'en', url: 'en_url' } }],
  generation: { name: 'generation', url: 'generation_url' },
  growth_rate: { name: 'growth', url: 'growth_url' },
  habitat: null,
  has_gender_differences: false,
  hatch_counter: 20,
  id: 25,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  name: 'pikachu',
  names: [{ language: { name: 'en', url: 'en_url' }, name: 'Pikachu' }],
  order: 50,
  pal_park_encounters: [],
  pokedex_numbers: [
    { entry_number: 25, pokedex: { name: 'pokedex', url: 'pokedex_url' } },
  ],
  shape: null,
  varieties: [
    { is_default: true, pokemon: { name: 'pikachu', url: 'pikachu_url' } },
  ],
}

const pokemonResultMock: PokeApiPokemonResponse = {
  abilities: [
    {
      ability: { name: 'ability', url: 'ability_url' },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: null,
  cries: { latest: 'latest', legacy: null },
  forms: [
    { name: 'form1', url: 'form1_url' },
    { name: 'form2', url: 'form2_url' },
  ],
  game_indices: [],
  height: 1,
  held_items: [],
  id: 25,
  is_default: true,
  location_area_encounters: 'location_area_encounters_url',
  moves: [
    { move: { name: 'move', url: 'move_url' }, version_group_details: [] },
  ],
  name: 'pikachu',
  order: 1,
  past_abilities: [],
  past_types: [],
  species: { name: 'species', url: 'species_url' },
  sprites: {
    front_default: 'front_default_url',
    front_shiny: 'front_shiny_url',
  } as Sprites,
  stats: [
    { base_stat: 100, effort: 50, stat: { name: 'stat', url: 'stat_url' } },
  ],
  types: [
    { slot: 1, type: { name: 'type1', url: 'type1_url' } },
    { slot: 2, type: { name: 'type2', url: 'type2_url' } },
  ],
  weight: 10,
}

const typeResponseMock: PokeApiTypeResponse = {
  damage_relations: {
    double_damage_from: [{ name: 'type1-double', url: 'type1-double-url' }],
    double_damage_to: [{ name: 'type1-double', url: 'type1-double-url' }],
    half_damage_from: [{ name: 'type1-half', url: 'type1-half-url' }],
    half_damage_to: [{ name: 'type1-half', url: 'type1-half-url' }],
    no_damage_from: [{ name: 'type1-no', url: 'type1-no-url' }],
    no_damage_to: [{ name: 'type1-no', url: 'type1-no-url' }],
  },
  game_indices: [],
  generation: { name: 'generation', url: 'generation-url' },
  id: 1,
  move_damage_class: {
    name: 'move_damage_class',
    url: 'move_damage_class_url',
  },
  moves: [],
  name: 'type1',
  names: [],
  past_damage_relations: [],
  pokemon: [],
}

describe('PokemonDetailInfoComponent', () => {
  let component: PokemonDetailInfoComponent
  let fixture: ComponentFixture<PokemonDetailInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        PokemonDetailInfoComponent,
        TranslateModule.forRoot(),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set pokemon', () => {
    const pokemon = {
      pokemonSpecieResult: pokemonSpecieResultMock,
      pokemonResult: pokemonResultMock,
    }
    component.pokemon = pokemon
    expect(component.pokemon).toEqual(pokemon)
  })

  it('should set types', () => {
    const types = { type1: typeResponseMock, type2: typeResponseMock }
    component.types = types
    expect(component.types).toEqual(types)
  })

  it('should calculate types properly', () => {
    component.types = { type1: typeResponseMock, type2: typeResponseMock }
    component['calculateTypes']()

    // Expected results based on provided mock data
    expect(component.from4x).toEqual([
      { name: 'type1-double', url: 'type1-double-url' },
    ])
    expect(component.from2x).toEqual([])
    expect(component.from05x).toEqual([])
    expect(component.from025x).toEqual([
      { name: 'type1-half', url: 'type1-half-url' },
    ])
    expect(component.from0x).toEqual([
      { name: 'type1-no', url: 'type1-no-url' },
      { name: 'type1-no', url: 'type1-no-url' },
    ])
  })

  it('should not throw error when types are not set', () => {
    expect(() => component['calculateTypes']()).not.toThrow()
    // Ensure no error is thrown when types are not set
  })

  it('should inject theme service properly', () => {
    expect(component.themeService).toBeTruthy()
    // Ensure theme service is injected properly
  })
})
