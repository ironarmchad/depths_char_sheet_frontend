import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterComponent} from './character.component';
import {CharCardComponent} from './char-card/char-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterStub} from '../_stubs/router-stub';
import {RouterTestingModule} from '@angular/router/testing';
import {CharacterService} from '../_services/character.service';
import {HttpClientModule} from '@angular/common/http';

const fakeActivatedRoute = {
  snapshot: {
    queryParams: {
      returnUrl: '/'
    }
  }
};


describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        CharacterComponent,
        CharCardComponent
      ],
      providers: [
        CharacterService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useFactory: () => fakeActivatedRoute}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
