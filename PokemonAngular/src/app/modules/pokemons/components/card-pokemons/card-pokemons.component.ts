import { PokemonsService } from './../../../../shared/services/pokemons/pokemons.service';
import { Pokemon } from './../../../../shared/models/pokemons/pokemon.model';
import { GamesService } from './../../../../shared/services/games/games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-pokemons',
  templateUrl: './card-pokemons.component.html',
  styleUrls: ['./card-pokemons.component.css']
})
export class CardPokemonsComponent implements OnInit {

  constructor(private gameService : GamesService, private pokemonService : PokemonsService,  private route: ActivatedRoute) { }

  pokemons : Pokemon[]

  public searchInput: string; 

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.gameService.readById(id).subscribe(pokemon => {
       this.pokemons  = pokemon;

       for (let index = 0; index < pokemon.length; index++) {
        this.pokemonService.readPhotoPokemon(pokemon[index].name).subscribe(photo =>{
          this.pokemons[index].photo = photo['front_default']
        })}
    })
  }


}
