import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDefDiceComponent } from './adv-def-dice.component';

describe('AdvDefDiceComponent', () => {
  let component: AdvDefDiceComponent;
  let fixture: ComponentFixture<AdvDefDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDefDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDefDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
