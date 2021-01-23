import { Pokemon } from './../../models/pokemons/pokemon.model';
import { GameObjJson } from '../../models/games/game.model';
import { environment } from '../../../../environments/environment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  api: string = environment.pokemon.api;

  pokemon: Pokemon[];

  read(): Observable<GameObjJson> {
    const url = `${this.api}/generation`
    return this.http.get<GameObjJson>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Pokemon[]> {
    const url = `${this.api}/generation/${id}`
    return this.http.get<Pokemon[]>(url).pipe(
      map((obj) =>  obj['pokemon_species']

      ),
      catchError((e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return;
  }

}
