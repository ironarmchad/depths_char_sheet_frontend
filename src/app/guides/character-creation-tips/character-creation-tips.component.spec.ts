import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationTipsComponent } from './character-creation-tips.component';

describe('CharacterCreationTipsComponent', () => {
  let component: CharacterCreationTipsComponent;
  let fixture: ComponentFixture<CharacterCreationTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreationTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
