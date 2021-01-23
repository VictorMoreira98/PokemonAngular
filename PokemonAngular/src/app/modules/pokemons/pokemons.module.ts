import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CardPokemonsComponent } from './components/card-pokemons/card-pokemons.component';


@NgModule({
  declarations: [PokemonsComponent, CardPokemonsComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class PokemonsModule { }
