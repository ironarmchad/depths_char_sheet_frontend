import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() {
  }

  get midnightPurple(): string {
    return '#250563';
  }
}
