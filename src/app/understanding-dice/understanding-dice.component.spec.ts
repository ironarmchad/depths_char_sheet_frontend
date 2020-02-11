import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDiceComponent } from './understanding-dice.component';

describe('UnderstandingDiceComponent', () => {
  let component: UnderstandingDiceComponent;
  let fixture: ComponentFixture<UnderstandingDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
