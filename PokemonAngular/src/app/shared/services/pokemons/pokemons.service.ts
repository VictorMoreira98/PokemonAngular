import { Pokemon } from './../../models/pokemons/pokemon.model';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  api: string = environment.pokemon.api;

  public searchInput: string; 

  pokemonCount : number



  readPhotoPokemon(id): Observable<any> {
    const url = `${this.api}/pokemon/${id}`
    return this.http.get<any>(url).pipe(
      map((obj) => obj['sprites']),
      catchError((e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Alguns Pokémons sem Imagem!", true);
    return;
  }
}
