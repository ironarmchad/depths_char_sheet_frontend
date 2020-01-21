import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAbilitiesEditComponent } from './super-abilities-edit.component';

describe('SuperAbilitiesEditComponent', () => {
  let component: SuperAbilitiesEditComponent;
  let fixture: ComponentFixture<SuperAbilitiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAbilitiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAbilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
