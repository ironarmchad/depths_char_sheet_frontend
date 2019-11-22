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
        res['characters'].forEach((element) => {
          characters.push(new Character().deserialize(element));
        });
        return characters;
      }));
  }
}
