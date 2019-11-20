import {Component, OnInit} from '@angular/core';
import {CompendiumService} from '../../_services/compendium.service';
import {CompendiumPage} from '../../_models/compendium-page';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  compendiumPage = new CompendiumPage();

  constructor(
    private route: ActivatedRoute,
    private compServ: CompendiumService
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const {id} = params;

    this.compServ.getCompendium(id).subscribe(res => {
      this.compendiumPage = res;
    });
  }
}
