import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services';
import {User} from '../_models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authServ.currentUserValue;
  }

}
