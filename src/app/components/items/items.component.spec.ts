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
})
