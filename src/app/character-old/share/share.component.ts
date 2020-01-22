import {Component, OnInit} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  character: Character = new Character();
  userList: any[] = [];
  sharedList: any[] = [];

  constructor(
    private authServ: AuthenticationService,
    private charServ: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.authServ.getUserList().subscribe(res => {
      res.forEach(user => {
        if (user.id !==)
      });
      this.userList = res;
    });

    this.charServ.getCharacter(id).subscribe(res => {
      this.character = res;
      console.log(res);

      if (this.character.viewers) {
        this.updateSharedList();
      } else {
        this.character.viewers = [];
      }
    });
  }

  updateSharedList() {
    this.sharedList = [];

    this.userList.forEach(element => {
      if (this.character.viewers.includes(element.id)) {
        this.sharedList.push(element);
      }
    });
  }


  addViewer(viewerString) {
    const viewer = parseInt(viewerString, 10);

    if (!this.character.viewers) {
      this.character.viewers = [];
    }

    if (!(this.character.viewers.includes(viewer) || viewer === -1)) {
      this.character.viewers.push(viewer);
      this.sharedList.push(this.userList.find(element => element.id === viewer));
    }
  }

  removeShare(viewer) {
    for (let i = 0; i < this.character.viewers.length; i++) {
      if (this.character.viewers[i] === viewer.id) {
        this.character.viewers.splice(i, 1);
      }
    }

    this.updateSharedList();
  }

  saveViewers() {
    this.charServ.patchCharacter(this.character).subscribe(() => {
      this.router.navigate(['character']);
    });
  }
}
