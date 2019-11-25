import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../_models/character';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) {
  }

  newCharacter(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/character/new`)
      .pipe(map(res => {
        // tslint:disable-next-line:no-string-literal
        return res['char_id'];
      }));
  }

  deleteCharacter(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/character/get/${id}`);
  }

  getCharacter(id): Observable<Character> {
    return this.http.get<Character>(`${environment.apiUrl}/character/get/${id}`)
      .pipe(map(res => {
        return new Character().deserialize(res);
      }));
  }

  patchCharacter(character: Character): Observable<Character> {
    return this.http.patch<any>(`${environment.apiUrl}/character/get/${character.id}`, character)
      .pipe(map(res => {
        return new Character().deserialize(res);
      }));
  }

  getCharacterAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiUrl}/character/all`)
      .pipe(map(res => {
        const characters = [];
        // tslint:disable-next-line:no-string-literal
        if (res['characters']) {
          // tslint:disable-next-line:no-string-literal
          res['characters'].forEach((element) => {
            characters.push(new Character().deserialize(element));
          });
        }
        return characters;
      }));
  }
}
