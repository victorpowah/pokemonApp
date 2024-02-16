import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemonEvolveChainComponent } from './pokemon-evolve-chain.component'

describe('PokemonEvolveChainComponent', () => {
  let component: PokemonEvolveChainComponent
  let fixture: ComponentFixture<PokemonEvolveChainComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEvolveChainComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonEvolveChainComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
