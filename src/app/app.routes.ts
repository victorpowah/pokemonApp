import { Routes } from '@angular/router'
import { PokedexComponent } from './components/pokedex/pokedex.component'
import {  PokemonCardComponentCopy } from './components/pokemon-card-copy/pokemon-card-copy.component'

export const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexComponent,
   
  },
  {
    path: 'card-test',
    component: PokemonCardComponentCopy
  }
]
