import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAbilityComponent } from './stat-ability.component';

describe('StatAbilityComponent', () => {
  let component: StatAbilityComponent;
  let fixture: ComponentFixture<StatAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
