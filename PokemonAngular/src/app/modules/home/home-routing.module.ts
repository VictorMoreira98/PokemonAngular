import { PokemonsModule } from './../pokemons/pokemons.module';
import { PokemonsComponent } from './../pokemons/pokemons.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon', loadChildren: () => import('../pokemons/pokemons.module').then(m => m.PokemonsModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
