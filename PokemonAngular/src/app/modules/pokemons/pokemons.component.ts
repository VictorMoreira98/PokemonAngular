import { nameGames } from './../../shared/utils/name-games';
import { GamesService } from './../../shared/services/games/games.service';
import { PokemonsService } from './../../shared/services/pokemons/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor(public gamesService: GamesService, private route : ActivatedRoute, public pokemonService : PokemonsService) { }

  generation : string

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.generation = nameGames[id-1]
  }

}
