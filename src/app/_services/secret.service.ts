import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor(private http: HttpClient) { }

  secret() {
    return this.http.get(`${environment.apiUrl}/secret`);
  }

}
