import {Component, OnInit} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  character: Character = new Character();

  constructor(
    private charServ: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.charServ.characterGet(id).subscribe(res => this.character = res);
  }

}
