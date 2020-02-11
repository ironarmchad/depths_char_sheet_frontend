import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyDiceComponent } from './difficulty-dice.component';

describe('DifficultyDiceComponent', () => {
  let component: DifficultyDiceComponent;
  let fixture: ComponentFixture<DifficultyDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
