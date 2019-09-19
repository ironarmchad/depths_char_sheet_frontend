import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMiniComponent } from './login-mini.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from '../../_services';

class RouterStub {
  navigate(params) {}
}

describe('LoginMiniComponent', () => {
  let component: LoginMiniComponent;
  let fixture: ComponentFixture<LoginMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [ LoginMiniComponent],
      providers: [
        AuthenticationService,
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
