import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonCardComponent } from './pokemon-card.component'
import { TranslateModule } from '@ngx-translate/core'

import { HttpClientModule } from '@angular/common/http'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent
  let fixture: ComponentFixture<PokemonCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonCardComponent,
        TranslateModule.forRoot(),
        HttpClientModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set pokemonUrl', () => {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/1/'
    component.pokemonUrl = pokemonUrl
    expect(component.pokemonUrl).toBe(pokemonUrl)
  })

  it('should calculate pokemonHP', () => {
    const pokemonHP = 10
    component.pokemonHP = pokemonHP
    expect(component.pokemonHP).toBe(pokemonHP)
  })
  it('should calculate pokemonText', () => {
    const pokemonText = 'Text'
    component.pokemonText = pokemonText
    expect(component.pokemonText).toBe(pokemonText)
  })
})
