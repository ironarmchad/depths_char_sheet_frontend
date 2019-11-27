import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStatAbilityComponent } from './display-stat-ability.component';

describe('DisplayStatAbilityComponent', () => {
  let component: DisplayStatAbilityComponent;
  let fixture: ComponentFixture<DisplayStatAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStatAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStatAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
