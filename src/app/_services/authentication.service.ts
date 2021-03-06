import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import {User} from '../_models/user';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserInfo} from '../_models/user-info';

@Injectable({ providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getUserList() {
    return this.http.get<any>(`${environment.apiUrl}/user/all`);
  }

  checkForUsername(username: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/available`, {username});
  }

  register(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/register`, {username, password})
      .pipe(map(user => {
        if (user && user.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/user/login`, {username, password})
      .pipe(map(user => {
        if (user && user.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  postUserInfo(info: UserInfo) {
    return this.http.post(`${environment.apiUrl}/user/info`, {info});
  }

}
