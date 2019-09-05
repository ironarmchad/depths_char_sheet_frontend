import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models/user';
import {UserService} from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
