import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AbilitiesModalComponent } from './abilities-modal.component'
import { PokeApiService } from '../../services/poke-api.service'
import { of } from 'rxjs'
import { Ability } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiAbilityResponse } from '../../models/pokeApi-ability-response.model'
import { TranslateModule } from '@ngx-translate/core'

describe('AbilitiesModalComponent', () => {
  let component: AbilitiesModalComponent
  let fixture: ComponentFixture<AbilitiesModalComponent>
  let pokeApiService: jasmine.SpyObj<PokeApiService>

  beforeEach(async () => {
    const pokeApiServiceSpy = jasmine.createSpyObj('PokeApiService', [
      'getAbility',
    ])

    await TestBed.configureTestingModule({
      imports: [AbilitiesModalComponent, TranslateModule.forRoot()],
      providers: [{ provide: PokeApiService, useValue: pokeApiServiceSpy }],
    }).compileComponents()

    pokeApiService = TestBed.inject(
      PokeApiService
    ) as jasmine.SpyObj<PokeApiService>
    fixture = TestBed.createComponent(AbilitiesModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call getAbility when @Input ability is set', () => {
    const testAbility = { ability: { name: 'test-ability', url: 'test-url' } }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    spyOn<any>(component, 'getAbility')

    component.ability = testAbility as Ability
    fixture.detectChanges()

    expect(component['getAbility']).toHaveBeenCalledTimes(1)
  })

  it('should emit visibleChange when closeModal is called', () => {
    spyOn(component.visibleChange, 'emit')

    component.closeModal()

    expect(component.visibleChange.emit).toHaveBeenCalledWith(false)
  })

  it('should make API call and set effect strings when getAbility is called', () => {
    const abilityUrl = 'test-url'
    const mockAbilityResponse = {
      effect_entries: [
        {
          language: { name: 'en' },
          effect: 'Test Effect',
          short_effect: 'Test Short Effect',
        },
      ],
    } as PokeApiAbilityResponse

    pokeApiService.getAbility.and.returnValue(of(mockAbilityResponse))

    component.ability = {
      ability: { name: 'test-ability', url: abilityUrl },
    } as Ability
    fixture.detectChanges()

    expect(pokeApiService.getAbility).toHaveBeenCalledWith(abilityUrl)
    expect(component.effectString).toBe('Test Effect')
    expect(component.shortEffectString).toBe('Test Short Effect')
  })

  // Additional tests could include error handling and checking for non-English effects
})
