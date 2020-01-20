import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPointBuyComponent } from './stats-point-buy.component';

describe('StatsPointBuyComponent', () => {
  let component: StatsPointBuyComponent;
  let fixture: ComponentFixture<StatsPointBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsPointBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPointBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
