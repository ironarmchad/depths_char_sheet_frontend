import { Component, OnInit } from '@angular/core';
import {CompendiumService} from '../_services/compendium.service';
import {Router} from '@angular/router';
import {CompendiumPage} from '../_models/compendium-page';


@Component({
  selector: 'app-compendium',
  templateUrl: './compendium.component.html',
  styleUrls: ['./compendium.component.scss']
})
export class CompendiumComponent implements OnInit {
  pages: CompendiumPage[] = [];
  compendiumName: string;

  constructor(
    private router: Router,
    private compServ: CompendiumService
  ) { }

  ngOnInit() {
    this.compendiumName = '';
    this.compServ.getCompendiumAll().subscribe(res => {
      this.pages = res;
    });
  }
}
