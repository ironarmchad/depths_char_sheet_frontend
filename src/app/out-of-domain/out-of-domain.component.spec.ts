import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfDomainComponent } from './out-of-domain.component';

describe('OutOfDomainComponent', () => {
  let component: OutOfDomainComponent;
  let fixture: ComponentFixture<OutOfDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
