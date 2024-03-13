import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonDetailMainComponent } from './pokemon-detail-main.component'
import { DestroyService } from '../../services/destroy.service'
import { TranslateModule } from '@ngx-translate/core'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import {
  Ability,
  PokeApiPokemonResponse,
} from '../../models/pokeApi-pokemon-respose.model'
import { SelectedStatus } from '../../models/pokemon-detail/pokemon-detail-const.model'

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
})
