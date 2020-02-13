import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDcDiceComponent } from './adv-dc-dice.component';

describe('AdvDcDiceComponent', () => {
  let component: AdvDcDiceComponent;
  let fixture: ComponentFixture<AdvDcDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDcDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDcDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
