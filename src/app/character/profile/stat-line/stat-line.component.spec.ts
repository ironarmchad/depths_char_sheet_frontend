import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLineComponent } from './stat-line.component';

describe('StatLineComponent', () => {
  let component: StatLineComponent;
  let fixture: ComponentFixture<StatLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
