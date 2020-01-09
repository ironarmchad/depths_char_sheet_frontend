import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  character: Character = new Character();

  constructor(
    private charServ: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.charServ.getCharacter(id).subscribe(res => {
      this.character = res;
      console.log(this.character);
    });
  }

}
