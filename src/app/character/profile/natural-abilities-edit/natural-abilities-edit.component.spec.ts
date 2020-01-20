import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalAbilitiesEditComponent } from './natural-abilities-edit.component';

describe('NaturalAbilitiesEditComponent', () => {
  let component: NaturalAbilitiesEditComponent;
  let fixture: ComponentFixture<NaturalAbilitiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalAbilitiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalAbilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
