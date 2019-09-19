import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../_services';
import {CharacterService} from '../_services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  newCharForm: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private charServ: CharacterService
  ) {
  }

  ngOnInit() {
    this.newCharForm = this.formBuilder.group({
      charname: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {return this.newCharForm.controls;}

  onSubmit() {
    if (this.newCharForm.invalid) {
      return;
    }

    this.charServ.characterNew('johnny').subscribe(r => console.log(r));
  }

}
