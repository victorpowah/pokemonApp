import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonEvolveChainComponent } from './pokemon-evolve-chain.component'
import { PokeApiEvolutionChainResponse } from '../../models/pokeApi-evolution-chain-response.model'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'

describe('PokemonEvolveChainComponent', () => {
  let component: PokemonEvolveChainComponent
  let fixture: ComponentFixture<PokemonEvolveChainComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEvolveChainComponent, HttpClientTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonEvolveChainComponent)
    component = fixture.componentInstance

    // Provide input to the component using a mock EvolutionChain object
    const mockEvolutionChain: PokeApiEvolutionChainResponse = {
      baby_trigger_item: null,
      chain: {
        evolution_details: [],
        evolves_to: [],
        is_baby: false,
        species: {
          name: 'a',
          url: 'a',
        },
      },
      id: 1,
    }
    component.pokemon = {
      pokemonSpecieResult: {
        base_happiness: 1,
        capture_rate: 1,
        color: {
          name: 'a',
          url: 'a',
        },
        egg_groups: [
          {
            name: 'a',
            url: 'a',
          },
        ],
        evolution_chain: {
          url: 'a',
        },
        evolves_from_species: null,
        flavor_text_entries: [
          {
            flavor_text: 'a',
            language: {
              name: 'a',
              url: 'a',
            },
            version: {
              name: 'a',
              url: 'a',
            },
          },
        ],
        form_descriptions: [],
        forms_switchable: true,
        gender_rate: 1,
        genera: [
          {
            genus: 'a',
            language: {
              name: 'a',
              url: 'a',
            },
          },
        ],
        generation: {
          name: 'a',
          url: 'a',
        },
        growth_rate: {
          name: 'a',
          url: 'a',
        },
      } as PokeApiPokemonSpecieResponse,
      pokemonResult: {} as PokeApiPokemonResponse,
    }
    component.evolutionChain = mockEvolutionChain

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
