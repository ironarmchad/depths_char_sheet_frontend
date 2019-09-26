import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectEditComponent } from './direct-edit.component';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {CharacterEditService} from '../../_character-edit.service';
import {NgbActiveModalStub} from '../../../../_stubs/ngb-active-modal-stub';
import {FormsModule} from '@angular/forms';

describe('DirectEditComponent', () => {
  let component: DirectEditComponent;
  let fixture: ComponentFixture<DirectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModalModule, FormsModule],
      declarations: [ DirectEditComponent ],
      providers: [
        CharacterEditService,
        {provide: NgbActiveModal, useClass: NgbActiveModalStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
