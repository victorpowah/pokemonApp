import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokedexComponent } from './pokedex.component'
import { TranslateModule } from '@ngx-translate/core'

describe('PokedexComponent', () => {
  let component: PokedexComponent
  let fixture: ComponentFixture<PokedexComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexComponent, TranslateModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(PokedexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
