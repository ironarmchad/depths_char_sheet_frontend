import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../_services/character.service';
import {Character} from '../../_models/character';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  character: Character = new Character();

  constructor(
    private route: ActivatedRoute,
    private charServ: CharacterService,
  ) {
  }

  ngOnInit() {
    const {id} = this.route.snapshot.params;

    this.charServ.getCharacter(id).subscribe(res => {
      this.character = res;
    });
  }

}
