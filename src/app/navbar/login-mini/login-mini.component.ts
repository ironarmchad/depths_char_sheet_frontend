import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services';
import {first} from 'rxjs/operators';
import {User} from '../../_models/user';

@Component({
  selector: 'app-login-mini',
  templateUrl: './login-mini.component.html',
  styleUrls: ['./login-mini.component.scss']
})
export class LoginMiniComponent implements OnInit {
  user: User;
  loggedIn: boolean;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;

    // Login Form
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Lazy grabbing for form controls
  get f() {
    return this.loginForm.controls;
  }

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
        this.user = this.authenticationService.currentUserValue;
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }

  goRegister() {
    this.router.navigate(['auth', 'register']);
  }


  logout() {
    this.authenticationService.logout();
    this.user = null;
    this.loggedIn = false;
  }

  user_info() {
    this.router.navigate(['user']);
  }
}
