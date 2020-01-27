import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../../_services/character.service';
import {CurrentCharacterService} from './_current-character.service';
import {interval, Subscription} from 'rxjs';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  saveTimer: Subscription;

  constructor(
    private route: ActivatedRoute,
    private authServ: AuthenticationService,
    private charServ: CharacterService,
    private current: CurrentCharacterService
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;
    const source = interval(120000);

    this.authServ.currentUser.subscribe(res => {
      this.current.user = res;
    });

    this.authServ.getUserList().subscribe(userList => {
      userList.forEach(user => {
        if (this.current.user.username !== user.username) {
          this.current.userList.push(user);
        }
      });
    });

    this.charServ.getCharacter(id).subscribe(res => {
      this.current.character = res;
      this.saveTimer = source.subscribe(val => this.charServ.patchCharacter(this.current.character).subscribe());
    });
  }

  ngOnDestroy(): void {
    this.saveTimer.unsubscribe();
  }

}
