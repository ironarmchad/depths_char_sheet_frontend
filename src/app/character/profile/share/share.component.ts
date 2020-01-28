import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit, OnDestroy {
  sharedList: any[] = [];
  userList: any[];

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.userList = current.userList;
  }

  ngOnInit() {
    this.updateSharedList();
  }

  ngOnDestroy(): void {
    this.current.patchCharacter();
  }

  updateSharedList() {
    this.sharedList = [];

    this.current.userList.forEach(user => {
      if (this.current.character.viewers.includes(user.id)) {
        this.sharedList.push(user);
      }
    });
  }

  addViewer(viewerString) {
    const viewer = parseInt(viewerString, 10);

    if (!this.current.character.viewers) {
      this.current.character.viewers = [];
    }

    if (!(this.current.character.viewers.includes(viewer) || viewer === -1)) {
      this.current.character.viewers.push(viewer);
    }

    this.updateSharedList();
  }

  removeShare(index) {
    this.current.character.viewers.splice(index, 1);

    this.updateSharedList();
  }

}
