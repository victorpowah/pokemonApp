import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemonCardComponent } from './pokemon-card.component'
import { TranslateModule } from '@ngx-translate/core'

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent
  let fixture: ComponentFixture<PokemonCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent, TranslateModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
