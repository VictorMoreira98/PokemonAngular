import { SearchPipe } from './../../shared/pipes/search';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


import { CardPokemonsComponent } from './components/card-pokemons/card-pokemons.component';


@NgModule({
  declarations: [PokemonsComponent, CardPokemonsComponent, SearchPipe],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class PokemonsModule { }
