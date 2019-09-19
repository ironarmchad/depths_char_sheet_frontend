import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
  }

}
