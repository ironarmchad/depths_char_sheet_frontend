import {Component, OnInit} from '@angular/core';
import {Stats} from '../../../../_models/stats';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CharacterEditService} from '../../_character-edit.service';


@Component({
  selector: 'app-point-buy',
  templateUrl: './point-buy.component.html',
  styleUrls: ['./point-buy.component.scss']
})
export class PointBuyComponent implements OnInit {
  statBlock: Stats;
  pointBuyValue: number;

  constructor(private activeModal: NgbActiveModal, private charEditServ: CharacterEditService) {
  }

  ngOnInit() {
    this.statBlock = new Stats();
    this.pointBuyValue = 110;
  }

  onStatChange(stat: string, value: string) {
    this.statBlock[stat] = parseInt(value, 10);
    this.pointBuyValue = 110 - this.statBlock.calculatePointValue();
  }

  onSubmit() {
    const newChar = Object.assign({}, this.charEditServ.character);
    this.statBlock.updateCharacter(newChar);
    newChar.pointValue = this.statBlock.calculatePointValue();
    this.charEditServ.setCharacter(newChar);
    this.activeModal.close();
  }

}
