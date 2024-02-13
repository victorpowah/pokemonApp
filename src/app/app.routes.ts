import { Routes } from '@angular/router'
import { PokedexComponent } from './components/pokedex/pokedex.component'
import { HomeComponent } from './components/home/home.component'
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component'
import { ItemsComponent } from './components/items/items.component'

export const routes: Routes = [
  {
    path: 'home',
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
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]
