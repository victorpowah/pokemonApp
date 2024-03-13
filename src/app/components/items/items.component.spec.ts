import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ItemsComponent } from './items.component'
import { TranslateModule } from '@ngx-translate/core'
import { RouterModule } from '@angular/router'
import { PokeApiService } from '../../services/poke-api.service'

describe('ItemsComponent', () => {
  let component: ItemsComponent
  let fixture: ComponentFixture<ItemsComponent>
  let pokeApiService: jasmine.SpyObj<PokeApiService>
  beforeEach(async () => {
    const pokeApiServiceSpy = jasmine.createSpyObj('PokeApiService', [
      'getAbility',
    ])

    await TestBed.configureTestingModule({
      imports: [
        ItemsComponent,
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
      ],
      providers: [{ provide: PokeApiService, useValue: pokeApiServiceSpy }],
    }).compileComponents()
    pokeApiService = TestBed.inject(
      PokeApiService
    ) as jasmine.SpyObj<PokeApiService>
    fixture = TestBed.createComponent(ItemsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
