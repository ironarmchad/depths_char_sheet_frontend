import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../_models/character';
import {Ability} from '../_models/ability';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(private http: HttpClient) {
  }

  abilityGet(id) {
    return this.http.get<Ability>(`${environment.apiUrl}/ability/get/${id}`)
      .pipe(map(res => new Ability().deserialize(res)));
  }

  abilityNew(charId: number, name: string) {
    return this.http.post<Ability>(`${environment.apiUrl}/ability/new/${charId}`, {name})
      .pipe(map(res => new Ability().deserialize(res)));
  }

  abilityPatch(ability: Ability) {
    return this.http.patch<Ability>(`${environment.apiUrl}/ability/get/${ability.id}`, {ability});
  }

  abilityDelete(id) {
    return this.http.delete(`${environment.apiUrl}/ability/get/${id}`);
  }

  abilityAll(charId) {
    return this.http.get<[Ability]>(`${environment.apiUrl}/ability/all/${charId}`)
    // tslint:disable-next-line:no-string-literal
      .pipe(map(res => res['abilities'].map(char => new Character().deserialize(char))));
  }
}
