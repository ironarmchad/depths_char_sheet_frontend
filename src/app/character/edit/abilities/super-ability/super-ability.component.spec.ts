import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAbilityComponent } from './super-ability.component';

describe('SuperAbilityComponent', () => {
  let component: SuperAbilityComponent;
  let fixture: ComponentFixture<SuperAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
