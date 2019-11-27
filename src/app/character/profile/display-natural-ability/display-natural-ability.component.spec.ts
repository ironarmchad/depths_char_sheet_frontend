import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNaturalAbilityComponent } from './display-natural-ability.component';

describe('DisplayNaturalAbilityComponent', () => {
  let component: DisplayNaturalAbilityComponent;
  let fixture: ComponentFixture<DisplayNaturalAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNaturalAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNaturalAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
