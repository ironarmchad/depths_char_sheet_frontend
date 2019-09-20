import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Character} from '../_models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {
  }

  characterNew(name) {
    return this.http.post<Character>(`${environment.apiUrl}/character/new`, {name});
  }

  characterAll() {
    return this.http.get<[Character]>(`${environment.apiUrl}/character/all`)
      // tslint:disable-next-line:no-string-literal
      .pipe(map(res => res['characters'].map(char => new Character().deserialize(char))));
  }
}
