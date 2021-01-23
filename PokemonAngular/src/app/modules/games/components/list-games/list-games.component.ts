import { nameGames } from './../../../../shared/utils/name-games';


import { GamesService } from '../../../../shared/services/games/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/games/game.model';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  games : Game[]
  generation : string[]

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {


    this.gameService.read().subscribe(games => {

      this.games = games.results

      this.generation = nameGames;

    })
  }

}
