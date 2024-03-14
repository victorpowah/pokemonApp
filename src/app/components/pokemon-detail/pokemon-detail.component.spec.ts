import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonDetailComponent } from './pokemon-detail.component'
import { ActivatedRoute } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core'
import { HttpClientTestingModule } from '@angular/common/http/testing' // Import HttpClientTestingModule
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent
  let fixture: ComponentFixture<PokemonDetailComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonDetailComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: ChangeDetectorRef, useValue: {} },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonDetailComponent)
    component = fixture.componentInstance
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should set the pokemonData', () => {
    const pokemonData = {
      pokemonSpecieResult: {} as PokeApiPokemonSpecieResponse,
      pokemonResult: {} as PokeApiPokemonResponse,
    }
    component.pokemon = pokemonData
    expect(component.pokemon).toEqual(pokemonData)
  })
})
