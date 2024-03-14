import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokedexComponent } from './pokedex.component'
import { PokeApiService } from '../../services/poke-api.service'
import { DestroyService } from '../../services/destroy.service'
import { of } from 'rxjs'
import { TranslateModule } from '@ngx-translate/core'
import { PokeApiPokedexResponse } from '../../models/pokeApi-pokedex-response.model'
import { DropdownChangeEvent } from 'primeng/dropdown'

describe('PokedexComponent', () => {
  let component: PokedexComponent
  let fixture: ComponentFixture<PokedexComponent>
  let pokeApiService: jasmine.SpyObj<PokeApiService>
  let destroyService: DestroyService

  beforeEach(() => {
    pokeApiService = jasmine.createSpyObj('PokeApiService', [
      'getPokedexs',
      'getPokedex',
    ])
    destroyService = new DestroyService()

    TestBed.configureTestingModule({
      imports: [PokedexComponent, TranslateModule.forRoot()],
      providers: [
        { provide: PokeApiService, useValue: pokeApiService },
        { provide: DestroyService, useValue: destroyService },
      ],
    })

    fixture = TestBed.createComponent(PokedexComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch pokedexs on ngOnInit', () => {
    const mockPokedexsResponse = {
      count: 0,
      next: '',
      previous: '',
      results: [],
    }
    const mockPokedexResponse: PokeApiPokedexResponse = {
      id: 0,
      name: '',
      descriptions: [],
      names: [],
      pokemon_entries: [],
      is_main_series: false,
      region: null,
    }

    pokeApiService.getPokedexs.and.returnValue(of(mockPokedexsResponse))
    pokeApiService.getPokedex.and.returnValue(of(mockPokedexResponse))

    component.ngOnInit()

    expect(component.pokedexs).toEqual(mockPokedexsResponse.results)
    expect(component.selectedPokedex).toEqual(mockPokedexResponse)
    expect(component.selectedPokedexDrop).toEqual(
      mockPokedexsResponse.results[0]
    )
  })
  it('should change row', () => {
    component.changeRow()
    expect(component.rows).toBe(20)
  })
  it('should set selectedPokedex to undefined if event value is falsy', () => {
    // Arrange
    const event = { value: null } as DropdownChangeEvent

    // Act
    component.changePokedex(event)

    // Assert
    expect(component.selectedPokedex).toBeUndefined()
  })

  it('should get and set selectedPokedex when event value is truthy', () => {
    // Arrange
    const event = { value: { url: 'someUrl' } } as DropdownChangeEvent
    const mockPokedexResponse = {
      /* mock Pokedex response */
    } as PokeApiPokedexResponse
    pokeApiService.getPokedex.and.returnValue(of(mockPokedexResponse))

    // Act
    component.changePokedex(event)

    // Assert
    expect(component.selectedPokedex).toEqual(mockPokedexResponse)
  })

  it('onPageChange should update first and rows correctly when event.first is truthy', () => {
    const event = { first: 10, rows: 20 }
    component.onPageChange(event)
    expect(component.first).toBe(10)
    expect(component.rows).toBe(20)
  })

  it('onPageChange should update first and rows correctly when event.first is falsy', () => {
    const event = { first: 0, rows: 20 }
    component.onPageChange(event)
    expect(component.first).toBe(0)
    expect(component.rows).toBe(20)
  })

  it('onPageChange should update first and rows correctly when event.rows is truthy', () => {
    const event = { first: 10, rows: 20 }
    component.onPageChange(event)
    expect(component.first).toBe(10)
    expect(component.rows).toBe(20)
  })

  it('onPageChange should update first and rows correctly when event.rows is falsy', () => {
    const event = { first: 10, rows: 0 }
    component.onPageChange(event)
    expect(component.first).toBe(10)
    expect(component.rows).toBe(0)
  })
})
