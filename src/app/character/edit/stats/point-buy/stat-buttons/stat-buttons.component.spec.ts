import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatButtonsComponent } from './stat-buttons.component';

describe('StatButtonsComponent', () => {
  let component: StatButtonsComponent;
  let fixture: ComponentFixture<StatButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
