import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySuperAbilityComponent } from './display-super-ability.component';

describe('DisplaySuperAbilityComponent', () => {
  let component: DisplaySuperAbilityComponent;
  let fixture: ComponentFixture<DisplaySuperAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySuperAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySuperAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
