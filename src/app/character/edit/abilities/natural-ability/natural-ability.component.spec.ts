import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalAbilityComponent } from './natural-ability.component';

describe('NaturalAbilityComponent', () => {
  let component: NaturalAbilityComponent;
  let fixture: ComponentFixture<NaturalAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
