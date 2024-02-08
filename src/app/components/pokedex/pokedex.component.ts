import { Component, OnInit } from '@angular/core';
import { PokeApiInfo } from '../../models/pokeApi-info.model';
import { PokeApiResponse } from '../../models/pokeApi-response.model';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit {
  types!: PokeApiInfo[];

  selectedTypes!: PokeApiInfo[];

  constructor(private readonly pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.getTypes().subscribe((types: PokeApiResponse) => {
      this.types = types.results;
    });
  }
}
