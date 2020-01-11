import {Component, OnInit} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  character: Character = new Character();

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
    this.charServ.patchCharacter(this.character).subscribe(res => {
      this.character = res;
    });
  }
}
