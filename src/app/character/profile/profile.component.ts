import {Component, OnInit} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  character: Character;

  constructor(
    private charServ: CharacterService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.charServ.getCharacter(id).subscribe(res => {
      this.character = res;
    });
  }

  onSave() {
    this.charServ.patchCharacter(this.character).subscribe();
  }

  useFpAbility(usedFp: number) {
    this.character.stats.fpCurrent -= usedFp;
  }

}
