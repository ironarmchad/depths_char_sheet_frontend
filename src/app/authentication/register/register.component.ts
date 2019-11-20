import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {passwordMatchValidator} from '../_directives/password-match.directive';
import {usernameUniqueValidator} from '../_directives/username-unique.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    console.log(this.authenticationService);
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, usernameUniqueValidator(this.authenticationService)],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    }, {validators: passwordMatchValidator});

    this.authenticationService.logout();
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.register(this.f.username.value, this.f.password.value).subscribe(data => {
      this.router.navigate(['']);
    }, error =>{
      this.loading = false;
    });
  }

}
