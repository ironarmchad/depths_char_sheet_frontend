import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Ability} from '../../../../_models/ability';
import {AbilityDataService} from '../_ability-data.service';
import {AbilityService} from '../../../../_services/ability.service';

class AbilityType {
  constructor(
    public identifier,
    public longString
  ) {}
}

@Component({
  selector: 'app-new-ability',
  templateUrl: './new-ability.component.html',
  styleUrls: ['./new-ability.component.scss']
})
export class NewAbilityComponent implements OnInit {
  @Output() submitEmit = new EventEmitter<Ability>();
  ability: Ability;
  abilityType: AbilityType;
  abilityTypes = [
    new AbilityType('natural', 'Natural Ability'),
    new AbilityType('super', 'Supernatural Ability'),
    new AbilityType('item', 'Item')
  ];

  constructor(
    private activeModal: NgbActiveModal,
    private abilServ: AbilityService,
    private abilData: AbilityDataService
  ) {
  }

  ngOnInit() {
    this.ability = this.abilData.ability;
    this.abilityType = this.abilityTypes.find((element) => {
      return element.identifier = this.ability.type;
    });
  }

  onTypeChange(newType) {
    this.ability.type = newType;
  }

  onSubmit() {
    this.abilServ.abilityPatch(this.ability).subscribe( () => {
      this.submitEmit.emit(this.ability);
      this.activeModal.close();
    });
  }
}
