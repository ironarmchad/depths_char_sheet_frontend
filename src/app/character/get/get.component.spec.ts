import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComponent } from './get.component';
import {CharacterService} from '../../_services/character.service';
import {CharacterServiceStub} from '../../_stubs/character-service-stub';
import {ActivatedRoute} from '@angular/router';

const fakeActivatedRoute = {
  snapshot: {
    params: {
      id: 1
    }
  }
};

describe('GetComponent', () => {
  let component: GetComponent;
  let fixture: ComponentFixture<GetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetComponent ],
      providers: [
        {provide: CharacterService, useClass: CharacterServiceStub},
        {provide: ActivatedRoute, useFactory: () => fakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
