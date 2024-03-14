/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'
import { PokeApiService } from '../../services/poke-api.service'
import { PokemonEvolveChainComponent } from '../pokemon-evolve-chain/pokemon-evolve-chain.component'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { DestroyService } from '../../services/destroy.service'

describe('PokemonEvolveChainComponent', () => {
  let component: PokemonEvolveChainComponent
  let pokeApiService: PokeApiService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEvolveChainComponent, HttpClientTestingModule],
      providers: [
        PokemonEvolveChainComponent,
        DestroyService,
        {
          provide: PokeApiService,
          useValue: {
            getEvolutionChain: () =>
              of({
                baby_trigger_item: null,
                chain: {
                  evolution_details: [],
                  evolves_to: [],
                  is_baby: false,
                  species: {
                    name: 'pokemon_species_name',
                    url: 'pokemon_species_url',
                  },
                },
                id: 1,
              }),
            getPokemonSpecie: () =>
              of({
                base_happiness: 50,
                capture_rate: 45,
                color: { name: 'color_name', url: 'color_url' },
                egg_groups: [{ name: 'egg_group_name', url: 'egg_group_url' }],
                evolution_chain: { url: 'evolution_chain_url' },
                evolves_from_species: null,
                flavor_text_entries: [
                  {
                    flavor_text: 'flavor_text',
                    language: { name: 'language_name', url: 'language_url' },
                    version: { name: 'version_name', url: 'version_url' },
                  },
                ],
                form_descriptions: [],
                forms_switchable: false,
                gender_rate: -1,
                genera: [
                  {
                    genus: 'genus',
                    language: { name: 'language_name', url: 'language_url' },
                  },
                ],
                generation: { name: 'generation_name', url: 'generation_url' },
                growth_rate: {
                  name: 'growth_rate_name',
                  url: 'growth_rate_url',
                },
                habitat: null,
                has_gender_differences: false,
                hatch_counter: 20,
                id: 1,
                is_baby: false,
                is_legendary: false,
                is_mythical: false,
                name: 'pokemon_name',
                names: [
                  {
                    name: 'pokemon_name',
                    language: { name: 'language_name', url: 'language_url' },
                  },
                ],
                order: 1,
                pal_park_encounters: [],
                pokedex_numbers: [
                  {
                    entry_number: 1,
                    pokedex: { name: 'pokedex_name', url: 'pokedex_url' },
                  },
                ],
                shape: null,
                varieties: [
                  {
                    is_default: true,
                    pokemon: { name: 'pokemon_name', url: 'pokemon_url' },
                  },
                ],
              }),
            getPokemonById: () =>
              of({
                abilities: [
                  {
                    ability: { name: 'ability_name', url: 'ability_url' },
                    is_hidden: false,
                    slot: 1,
                  },
                  {
                    ability: {
                      name: 'hidden_ability_name',
                      url: 'hidden_ability_url',
                    },
                    is_hidden: true,
                    slot: 2,
                  },
                ],
                base_experience: '100',
                cries: { latest: 'cries_latest', legacy: null },
                forms: [],
                game_indices: [],
                height: 10,
                held_items: [],
                id: 25, // Id of the Pokémon
                is_default: true,
                location_area_encounters: 'location_area_encounters',
                moves: [],
                name: 'pikachu', // Name of the Pokémon
                order: 25,
                past_abilities: [],
                past_types: [],
                species: { name: 'pikachu', url: 'pikachu_url' },
                sprites: {
                  back_default: null,
                  back_female: null,
                  back_shiny: null,
                  back_shiny_female: null,
                  front_default: null,
                  front_female: null,
                  front_shiny: null,
                  front_shiny_female: null,
                  other: {
                    dream_world: { front_default: null, front_female: null },
                    'official-artwork': { front_default: null },
                  },
                },
                stats: [],
                types: [],
                weight: 60,
              }),
          },
        },
      ],
    }).compileComponents()

    // Inject both the component and the service
    component = TestBed.inject(PokemonEvolveChainComponent)
    pokeApiService = TestBed.inject(PokeApiService)
  })

  it('should call getEvolutionChain when pokemon input setter is triggered', () => {
    spyOn<any>(component, 'getEvolutionChain')
    const pokemonInput = {
      pokemonSpecieResult: {
        evolution_chain: { url: '' },
      } as PokeApiPokemonSpecieResponse,
      pokemonResult: {} as PokeApiPokemonResponse,
    }

    component.pokemon = pokemonInput

    expect(component['getEvolutionChain']).toHaveBeenCalled()
  })

  it('should request evolution chain and set evolutionChain, ev1, ev2, ev3 properties', (done: DoneFn) => {
    const pokemonInput = {
      pokemonSpecieResult: {
        evolution_chain: { url: '' },
      } as PokeApiPokemonSpecieResponse,
      pokemonResult: {} as PokeApiPokemonResponse,
    }

    component.pokemon = pokemonInput
    component['getEvolutionChain']()

    setTimeout(() => {
      expect(component.evolutionChain).toBeTruthy()
      expect(component.ev1).toBeTruthy()
      expect(component.ev2).toBeTruthy()
      expect(component.ev3).toBeTruthy()
      done()
    })
  })

  // Here you can add more tests as needed.
})
