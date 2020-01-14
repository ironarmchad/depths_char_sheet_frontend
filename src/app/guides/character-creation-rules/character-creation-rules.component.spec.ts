import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationRulesComponent } from './character-creation-rules.component';

describe('CharacterCreationRulesComponent', () => {
  let component: CharacterCreationRulesComponent;
  let fixture: ComponentFixture<CharacterCreationRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreationRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
