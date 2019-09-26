import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreComponent} from './core.component';
import {CharacterEditService} from '../_character-edit.service';
import {CharacterEditServiceStub} from '../../../_stubs/character-edit-service-stub';
import {FormsModule} from '@angular/forms';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CoreComponent],
      providers: [
        CharacterEditService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
