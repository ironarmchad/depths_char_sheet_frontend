import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {CompendiumPage} from '../_models/compendium-page';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompendiumService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCompendium(title) {
    return this.http.get<CompendiumPage>(`${environment.apiUrl}/compendium/get/${title}`)
      .pipe(map(res => {
        const newCompend = new CompendiumPage().deserialize(res);
        return newCompend;
      }));
  }

  getCompendiumAll(): Observable<CompendiumPage[]> {
    return this.http.get(`${environment.apiUrl}/compendium/all`)
      .pipe(map(res => {
        const compendPages = [];
        // tslint:disable-next-line:no-string-literal
        res['pages'].forEach((element) => {
          compendPages.push(new CompendiumPage().deserialize(element));
        });
        return compendPages;
      }));
  }
}
