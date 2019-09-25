import {Component, OnInit} from '@angular/core';
import {Stats} from '../../stats';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CharacterEditService} from '../../_character-edit.service';


@Component({
  selector: 'app-point-buy',
  templateUrl: './point-buy.component.html',
  styleUrls: ['./point-buy.component.scss']
})
export class PointBuyComponent implements OnInit {
  closeReason: string;
  statBlock: Stats;

  constructor(private activeModal: NgbActiveModal, private charEditServ: CharacterEditService) {
  }

  ngOnInit() {
    this.statBlock = new Stats();
  }

  onStatChange(stat: string, value: string) {
    this.statBlock[stat] = parseInt(value, 10);
  }

  onSubmit() {
    const newChar = Object.assign({}, this.charEditServ.character);
    this.statBlock.updateCharacter(newChar);
    this.charEditServ.setCharacter(newChar);
  }

}
