/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonDetailMainComponent } from './pokemon-detail-main.component'
import { DestroyService } from '../../services/destroy.service'
import { TranslateModule } from '@ngx-translate/core'
import {
  Ability,
  PokeApiPokemonResponse,
} from '../../models/pokeApi-pokemon-respose.model'
import { SelectedStatus } from '../../models/pokemon-detail/pokemon-detail-const.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'

describe('PokemonDetailMainComponent', () => {
  let component: PokemonDetailMainComponent
  let fixture: ComponentFixture<PokemonDetailMainComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonDetailMainComponent, TranslateModule.forRoot()],
      providers: [
        DestroyService, // Provide the DestroyService
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonDetailMainComponent)
    component = fixture.componentInstance
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should set selectedStat and maxBaseStat in showStats method', () => {
    const mockStat: SelectedStatus = SelectedStatus.BASE
    component.showStats(mockStat)
    expect(component.selectedStat).toEqual(mockStat)
    expect(component.maxBaseStat).toBe(0)
  })

  it('should set abilitySelected and make dialog visible in showDialog method', () => {
    const mockAbility: Ability = {
      ability: { name: 'test-ability', url: 'test-url' },
    } as Ability
    component.showDialog(mockAbility)
    expect(component.abilitySelected).toEqual(mockAbility)
    expect(component.visible).toBe(true)
  })
  it('changeVarietyFn method should set selectedForm, maxBaseStat, and emit changeVariety event', () => {
    const mockVarietyUrl: string = 'mockVarietyUrl'
    spyOn(component.changeVariety, 'emit')
    component.changeVarietyFn(mockVarietyUrl)
    expect(component.selectedForm).toBe(mockVarietyUrl)
    expect(component.maxBaseStat).toBe(0)
    expect(component.changeVariety.emit).toHaveBeenCalledWith(mockVarietyUrl)
  })

  it('should not initialize properties if pokemonResult and pokemonSpecieResult are not available', () => {
    component.pokemon = {} as any

    component['initializePokemon']()

    expect(component.pokemonGenera).toBe('')
    expect(component.selectedForm).toBe('')
    // Ensure that calculateStats is not called
    spyOn<any>(component, 'calculateStats')
    expect(component['calculateStats']).not.toHaveBeenCalled()
  })

  it('should initialize pokemonGenera, selectedForm, and call calculateStats', () => {
    // Ensure calculateStats is called
    spyOn<any>(component, 'calculateStats')

    component.pokemon = {
      pokemonResult: {
        stats: [
          { base_stat: 55, effort: 0, stat: { name: 'hp', url: 'hp_url' } },
          {
            base_stat: 40,
            effort: 0,
            stat: { name: 'attack', url: 'attack_url' },
          },
          {
            base_stat: 35,
            effort: 0,
            stat: { name: 'defense', url: 'defense_url' },
          },
          {
            base_stat: 50,
            effort: 0,
            stat: { name: 'special-attack', url: 'special-attack_url' },
          },
          {
            base_stat: 50,
            effort: 0,
            stat: { name: 'special-defense', url: 'special-defense_url' },
          },
          {
            base_stat: 90,
            effort: 0,
            stat: { name: 'speed', url: 'speed_url' },
          },
        ],
      } as PokeApiPokemonResponse,
      pokemonSpecieResult: {
        genera: [
          { genus: 'Pikachu', language: { name: 'en', url: 'genus_url' } },
        ],
        varieties: [
          {
            is_default: true,
            pokemon: { name: 'pikachu', url: 'pikachu_url' },
          },
        ],
      } as PokeApiPokemonSpecieResponse,
    }

    component['initializePokemon']()

    // Ensure pokemonGenera is correctly set
    expect(component.pokemonGenera).toBe('Pikachu')

    // Ensure selectedForm is correctly set to the first variety's pokemon url
    expect(component.selectedForm).toBe('pikachu_url')

    expect(component['calculateStats']).toHaveBeenCalled()
  })
})
