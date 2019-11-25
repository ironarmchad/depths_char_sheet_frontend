import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAbilitiesComponent } from './stat-abilities.component';

describe('StatAbilitiesComponent', () => {
  let component: StatAbilitiesComponent;
  let fixture: ComponentFixture<StatAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
