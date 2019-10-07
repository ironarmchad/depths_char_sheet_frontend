import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CharacterEditService} from '../../_character-edit.service';
import {Stats} from '../../../../_models/stats';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-direct-edit',
  templateUrl: './direct-edit.component.html',
  styleUrls: ['./direct-edit.component.scss']
})
export class DirectEditComponent implements OnInit {
  statBlock: Stats;
  pointBuyValue: number;

  constructor(private activeModal: NgbActiveModal,
              private charEditServ: CharacterEditService
  ) {
  }

  ngOnInit() {
    this.statBlock = new Stats()
    this.statBlock.getFromCharacter(this.charEditServ.character);
    this.pointBuyValue = this.statBlock.calculatePointValue();
  }

  onBlur() {
    this.pointBuyValue = this.statBlock.calculatePointValue();
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    const newChar = Object.assign({}, this.charEditServ.character);
    this.statBlock.updateCharacter(newChar);
    newChar.pointValue = this.statBlock.calculatePointValue();
    this.charEditServ.setCharacter(newChar);
    this.activeModal.close();
  }
}
