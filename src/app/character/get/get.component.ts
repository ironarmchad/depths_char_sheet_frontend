import {Component, OnInit} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';
import {ActivatedRoute} from '@angular/router';
import {AbilityService} from '../../_services/ability.service';
import {Ability} from '../../_models/ability';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  character: Character = new Character();
  abilities: Ability[] = [];

  constructor(
    private charServ: CharacterService,
    private abilServ: AbilityService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.charServ.characterGet(id).subscribe(character => {
      this.character = character;
      if (this.character.id) {
        this.abilServ.abilityAll(this.character.id).subscribe(abilities => this.abilities = abilities);
      }
    });
  }

}
