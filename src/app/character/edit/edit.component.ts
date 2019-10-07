import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../../_services/character.service';
import {CharacterEditService} from './_character-edit.service';
import {Character} from '../../_models/character';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  character: Character;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charServ: CharacterService,
    private editServ: CharacterEditService
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.charServ.characterGet(id).subscribe(res => {
      this.editServ.setCharacter(res);
      this.character = res;
    });
  }

  onSubmit() {
    this.charServ.characterPatch(this.editServ.character).subscribe();
    this.router.navigate(['character', {id: this.editServ.character.id}]);
  }

  onDelete() {
    this.charServ.characterDelete(this.editServ.character.id).subscribe();
    this.router.navigate(['character']);
  }

}
