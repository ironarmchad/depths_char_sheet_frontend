import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpposedDiceComponent } from './opposed-dice.component';

describe('OpposedDiceComponent', () => {
  let component: OpposedDiceComponent;
  let fixture: ComponentFixture<OpposedDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpposedDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpposedDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
