import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvBothDiceComponent } from './adv-both-dice.component';

describe('AdvBothDiceComponent', () => {
  let component: AdvBothDiceComponent;
  let fixture: ComponentFixture<AdvBothDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvBothDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvBothDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
