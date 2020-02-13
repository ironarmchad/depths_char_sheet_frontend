import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvOffDiceComponent } from './adv-off-dice.component';

describe('AdvOffDiceComponent', () => {
  let component: AdvOffDiceComponent;
  let fixture: ComponentFixture<AdvOffDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvOffDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvOffDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
