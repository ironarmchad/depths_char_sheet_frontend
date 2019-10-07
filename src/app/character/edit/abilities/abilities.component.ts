import {Component, OnInit} from '@angular/core';
import {AbilityService} from '../../../_services/ability.service';
import {CharacterEditService} from '../_character-edit.service';
import {Ability} from '../../../_models/ability';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AbilityDataService} from './_ability-data.service';
import {NewAbilityComponent} from './new-ability/new-ability.component';
import {Character} from '../../../_models/character';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  abilities: Ability[];
  character: Character;
  newAbilForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private abilServ: AbilityService,
    private modalServ: NgbModal,
    private charEditServ: CharacterEditService,
    private abilDataServ: AbilityDataService
  ) {
  }

  ngOnInit() {
    this.charEditServ.char.subscribe(char => {
      this.character = char;
      // If block is necessary as this subscribe seems to run twice, once with null and the second time with a character
      if (this.character.id) {
        this.refreshAbilities();
      }
    });

    // New Ability Form
    this.newAbilForm = this.formBuilder.group({
      abilname: ['', Validators.required]
    });
  }

  get f() {
    return this.newAbilForm.controls;
  }

  refreshAbilities() {
    this.abilServ.abilityAll(this.character.id).subscribe(abilities => this.abilities = abilities);
  }

  newAbility() {
    if (this.newAbilForm.invalid) {
      return;
    }

    this.abilServ.abilityNew(this.character.id, this.f.abilname.value).subscribe(res => {
      this.openAbilityEdit(res);
    });
  }

  openAbilityEdit(ability: Ability) {
    this.abilDataServ.setAbility(ability);
    const modal = this.modalServ.open(NewAbilityComponent, {size: 'lg'});
    modal.result.then(() => {
      this.refreshAbilities();
    });
  }

  onDelete(ability: Ability) {
    this.abilServ.abilityDelete(ability.id).subscribe(() => {
      this.abilServ.abilityAll(this.character.id).subscribe(abils => {
        this.abilities = abils;
      });
    });
  }
}
