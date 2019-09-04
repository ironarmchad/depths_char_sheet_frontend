import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMiniComponent } from './login-mini.component';

describe('LoginMiniComponent', () => {
  let component: LoginMiniComponent;
  let fixture: ComponentFixture<LoginMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMiniComponent ]
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
