import { Pokemon } from './../../models/pokemons/pokemon.model';
import { GameObjJson } from '../../models/games/game.model';
import { environment } from '../../../../environments/environment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map, catchError, shareReplay, share } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    //this.readObs = this.read();
    //this.readByIdObs = this.readById();
  }

  api: string = environment.pokemon.api;

  pokemon: Pokemon[];
  readObs: Observable<GameObjJson>;
  readByIdObs: Observable<Pokemon[]>;

  read = (): Observable<GameObjJson> => {
    const url = `${this.api}/generation`;
    if (!this.readObs) {
      this.readObs = this.http.get<GameObjJson>(url).pipe(
        shareReplay(1),
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
    return this.readObs;
  };

  readById = (id: number): Observable<Pokemon[]> => {
    const url = `${this.api}/generation/${id}`;

    if (!this.readByIdObs) {
      this.readByIdObs = this.http.get<Pokemon[]>(url).pipe(
        map((obj) => obj['pokemon_species']),
        shareReplay(1),
        catchError((e) => this.errorHandler(e))
      );
    }
    return this.readByIdObs;
  };

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return;
  }
}
