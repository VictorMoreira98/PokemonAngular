import { Pokemon } from './../models/pokemons/pokemon.model';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(pokemons: Pokemon[], searchInput: string): any[]{     
        if(!searchInput) {
            return pokemons;
        }
    
       searchInput = searchInput.toLowerCase();
       return pokemons.filter(
           x =>x.name.toLowerCase().includes(searchInput)
       )
     }
}