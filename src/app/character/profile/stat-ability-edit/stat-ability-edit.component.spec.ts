import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAbilityEditComponent } from './stat-ability-edit.component';

describe('StatAbilityEditComponent', () => {
  let component: StatAbilityEditComponent;
  let fixture: ComponentFixture<StatAbilityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatAbilityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAbilityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
