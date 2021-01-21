
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { ListGamesComponent } from './components/list-games/list-games.component';


@NgModule({
  declarations: [GamesComponent, ListGamesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
    
    
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule { }
