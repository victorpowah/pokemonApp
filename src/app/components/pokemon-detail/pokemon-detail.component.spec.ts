/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectorRef } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { PokemonDetailComponent } from './pokemon-detail.component'
import { PokeApiPokemonResponse } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiPokemonSpecieResponse } from '../../models/pokeApi-pokemon-specie-response.model'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent
  let fixture: ComponentFixture<PokemonDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
        { provide: ChangeDetectorRef, useValue: {} },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call getPokemon on ngOnInit', () => {
    spyOn<any>(component, 'getPokemon')
    component.ngOnInit()
    expect(component['getPokemon']).toHaveBeenCalled()
  })

  it('should call cdref.detectChanges on ngAfterContentChecked', () => {
    spyOn(component['cdref'], 'detectChanges')
    component.ngAfterContentChecked()
    expect(component['cdref'].detectChanges).toHaveBeenCalled()
  })

  it('should set the color class on initializePokemon', () => {
    const setColorClassSpy = spyOn(component['themeService'], 'setColorClass')
    component.pokemon = {
      pokemonSpecieResult: {
        color: { name: 'red' },
      } as PokeApiPokemonSpecieResponse,
      pokemonResult: {} as PokeApiPokemonResponse,
    }
    component['initializePokemon']()
    expect(setColorClassSpy).toHaveBeenCalledWith('red')
  })

  describe('changeVariety', () => {
    it('should call getPokemon method of pokeApiService with the correct varietyUrl', () => {
      component.pokemon = {
        pokemonSpecieResult: {} as PokeApiPokemonSpecieResponse,
        pokemonResult: {} as PokeApiPokemonResponse,
      }
      const varietyUrl = 'https://pokeapi.co/api/v2/pokemon/1'
      const mockPokemonResult = {
        name: 'bulbasaur',
        height: 7,
        weight: 69,
      } as PokeApiPokemonResponse

      const pokeApiServiceSpy = spyOn(
        component['pokeApiService'],
        'getPokemon'
      ).and.returnValue(of(mockPokemonResult))

      component.changeVariety(varietyUrl)

      expect(pokeApiServiceSpy).toHaveBeenCalledWith(varietyUrl)
    })

    it('should assign the correct value to this.pokemon.pokemonResult after receiving the response', () => {
      component.pokemon = {
        pokemonSpecieResult: {} as PokeApiPokemonSpecieResponse,
        pokemonResult: {} as PokeApiPokemonResponse,
      }
      const varietyUrl = 'https://pokeapi.co/api/v2/pokemon/1'
      const mockPokemonResult = {
        name: 'bulbasaur',
        height: 7,
        weight: 69,
      } as PokeApiPokemonResponse

      spyOn(component['pokeApiService'], 'getPokemon').and.returnValue(
        of(mockPokemonResult)
      )

      component.changeVariety(varietyUrl)
      expect(component.pokemon.pokemonResult).toEqual(mockPokemonResult)
    })
  })
})
