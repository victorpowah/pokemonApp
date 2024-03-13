import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemonDetailInfoComponent } from './pokemon-detail-info.component'
import { TranslateModule } from '@ngx-translate/core'

describe('PokemonDetailInfoComponent', () => {
  let component: PokemonDetailInfoComponent
  let fixture: ComponentFixture<PokemonDetailInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailInfoComponent, TranslateModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonDetailInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
