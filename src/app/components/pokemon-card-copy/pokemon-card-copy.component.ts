import { Component } from '@angular/core'
import { pokemonResult, pokemonSpecieResult } from './pokemons'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-card-copy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card-copy.component.html',
  styleUrl: './pokemon-card-copy.component.scss',
})
export class PokemonCardComponentCopy  {
   pokemonResult:any;
  pokemonSpecieResult:any;

  constructor() {
    // Asigna los valores importados a las propiedades de la clase
    this.pokemonResult = pokemonResult;
    this.pokemonSpecieResult = pokemonSpecieResult;
  }
  
}
