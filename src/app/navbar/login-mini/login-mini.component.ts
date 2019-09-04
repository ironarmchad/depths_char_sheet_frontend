import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../_services';
import {first} from 'rxjs/operators';
import {User} from '../../_models/user';

@Component({
  selector: 'app-login-mini',
  templateUrl: './login-mini.component.html',
  styleUrls: ['./login-mini.component.scss']
})
export class LoginMiniComponent implements OnInit {
  loggedIn: boolean;
  user: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loggedIn = !!this.authenticationService.currentUserValue;

    if (this.loggedIn) { this.user = this.authenticationService.currentUserValue.username; }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Lazy grabbing for form controls
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first()).subscribe(
        () => {
          this.loggedIn = true;
          this.user = this.authenticationService.currentUserValue.username;
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
