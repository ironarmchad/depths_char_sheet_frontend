import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointBuyComponent } from './standard-array.component';

describe('StandardArrayComponent', () => {
  let component: PointBuyComponent;
  let fixture: ComponentFixture<PointBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
