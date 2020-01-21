import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAbilitiesComponent } from './super-abilities.component';

describe('SuperAbilitiesComponent', () => {
  let component: SuperAbilitiesComponent;
  let fixture: ComponentFixture<SuperAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
