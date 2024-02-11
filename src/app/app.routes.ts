import { Routes } from '@angular/router'
import { PokedexComponent } from './components/pokedex/pokedex.component'
import { HomeComponent } from './components/home/home.component'
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]
