import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { ItemCardComponent } from './item-card.component'
import { HttpClientTestingModule } from '@angular/common/http/testing' // Import HttpClientTestingModule
import { PokeApiService } from '../../services/poke-api.service' // Import PokeApiService

describe('ItemCardComponent', () => {
  let component: ItemCardComponent
  let fixture: ComponentFixture<ItemCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ItemCardComponent,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ], // Add HttpClientTestingModule
      providers: [PokeApiService], // Provide PokeApiService
    }).compileComponents()

    fixture = TestBed.createComponent(ItemCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set itemUrl', () => {
    const itemUrl = 'https://pokeapi.co/api/v2/item/1/'
    component.itemUrl = itemUrl
    expect(component.itemUrl).toBe(itemUrl)
  })
})
