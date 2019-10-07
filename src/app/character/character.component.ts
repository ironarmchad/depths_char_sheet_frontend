import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../_services/character.service';
import {Character} from '../_models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: [Character];
  newCharForm: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private charServ: CharacterService,
  ) {
  }

  ngOnInit() {
    // Characters pane
    this.charServ.characterAll().subscribe(r => this.characters = r);

    // New Character form
    this.newCharForm = this.formBuilder.group({
      charname: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {return this.newCharForm.controls; }

  onSubmit() {
    if (this.newCharForm.invalid) {
      return;
    }

    this.charServ.characterNew(this.f.charname.value).subscribe( res => {
      this.router.navigate(['character', res.id, 'edit']);

    });
  }
}
