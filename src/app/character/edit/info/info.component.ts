import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Character} from '../../../_models/character';
import {AuthenticationService} from '../../../_services/authentication.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  userList: any[] = [];
  @Input() character: Character = new Character();
  @Output() save = new EventEmitter();

  constructor(
    private authServ: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.authServ.getUserList().subscribe(res => {
      this.userList = res;
    });
  }


  saveState() {
    this.save.emit();
  }
}
