import {Component, Input, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser: string;
  isMenuCollapsed: boolean;
  user: User;

  constructor(private authServ: AuthenticationService) {
  }

  ngOnInit() {
    this.isMenuCollapsed = true;
    this.user = this.authServ.currentUserValue;
  }

}
