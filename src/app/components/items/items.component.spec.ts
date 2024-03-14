import { ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

import { ItemsComponent } from './items.component'
import { PokeApiService } from '../../services/poke-api.service'
import { DestroyService } from '../../services/destroy.service'
import { PokeApiResponse } from '../../models/pokeApi-response.model'
import { PaginatorState } from 'primeng/paginator'
import { TranslateModule } from '@ngx-translate/core'

describe('ItemsComponent', () => {
  let component: ItemsComponent
  let fixture: ComponentFixture<ItemsComponent>
  let pokeApiService: jasmine.SpyObj<PokeApiService>
  let destroyService: DestroyService

  beforeEach(() => {
    pokeApiService = jasmine.createSpyObj('PokeApiService', ['getItems'])
    destroyService = new DestroyService()

    TestBed.configureTestingModule({
      imports: [ItemsComponent, TranslateModule.forRoot()],
      providers: [
        { provide: PokeApiService, useValue: pokeApiService },
        { provide: DestroyService, useValue: destroyService },
      ],
    })

    fixture = TestBed.createComponent(ItemsComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch items on ngOnInit', () => {
    const mockItemsResponse: PokeApiResponse = {
      count: 0,
      next: '',
      previous: '',
      results: [],
    }
    pokeApiService.getItems.and.returnValue(of(mockItemsResponse))

    component.ngOnInit()

    expect(component.items).toEqual(mockItemsResponse)
  })

  // Add more tests as needed
  it('should change row', () => {
    component.changeRow()
    expect(component.rows).toBe(20)
  })

  describe('onPageChange', () => {
    it('should set this.first to event.first if event.first is truthy', () => {
      const event = { first: 5, rows: 10 }
      component.onPageChange(event)
      expect(component.first).toEqual(5)
    })

    it('should set this.first to 0 if event.first is falsy', () => {
      const event = { first: 0, rows: 10 }
      component.onPageChange(event)
      expect(component.first).toEqual(0)
    })

    it('should set this.rows to event.rows if event.rows is truthy', () => {
      const event = { first: 5, rows: 10 }
      component.onPageChange(event)
      expect(component.rows).toEqual(10)
    })

    it('should set this.rows to 0 if event.rows is falsy', () => {
      const event = { first: 5, rows: 0 }
      component.onPageChange(event)
      expect(component.rows).toEqual(0)
    })
  })
})
