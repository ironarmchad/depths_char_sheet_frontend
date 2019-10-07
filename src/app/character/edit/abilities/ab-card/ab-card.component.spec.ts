import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbCardComponent } from './ab-card.component';

describe('AbCardComponent', () => {
  let component: AbCardComponent;
  let fixture: ComponentFixture<AbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
