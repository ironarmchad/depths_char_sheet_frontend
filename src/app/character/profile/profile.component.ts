import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../../_services/character.service';
import {CurrentCharacterService} from '../_current-character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private charServ: CharacterService,
    private current: CurrentCharacterService
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;


    this.charServ.getCharacter(id).subscribe(res => {
      this.current.character = res;
    });
  }

}
