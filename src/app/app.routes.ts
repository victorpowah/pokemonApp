import { Routes } from '@angular/router'
import { PokedexComponent } from './components/pokedex/pokedex.component'
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
   
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
   
  },{
   
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
   
  }
]
