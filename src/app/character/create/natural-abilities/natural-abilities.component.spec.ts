import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalAbilitiesComponent } from './natural-abilities.component';

describe('NaturalAbilitiesComponent', () => {
  let component: NaturalAbilitiesComponent;
  let fixture: ComponentFixture<NaturalAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
