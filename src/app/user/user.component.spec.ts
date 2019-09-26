import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {AuthenticationService} from '../_services';
import {HttpClientModule} from '@angular/common/http';

const fakeAuthenticationService = {
  currentUserValue: {
    username: 'test'
  }
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ UserComponent ],
      providers: [
        {provide: AuthenticationService, useFactory: () => fakeAuthenticationService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
