import { Pokemon } from './../../models/pokemons/pokemon.model';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  api: string = environment.pokemon.api;

  public searchInput: string;

  pokemonCount: number;
  readPhotoPokemonObs: { [key: string]: Observable<any> } = {'' : null};

  readPhotoPokemon(id, index): Observable<any> {
    const url = `${this.api}/pokemon/${id}`;
   
    if (!this.readPhotoPokemonObs[id]) {
      this.readPhotoPokemonObs[id] = this.http.get<any>(url).pipe(
        map((obj) => obj['sprites']),
        shareReplay(1),
        catchError((e) => this.errorHandler(e))
      );
    }
    return this.readPhotoPokemonObs[id];
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Alguns Pokémons sem Imagem!', true);
    return;
  }
}
