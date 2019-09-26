import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointBuyComponent } from './point-buy.component';
import {CharacterEditService} from '../../_character-edit.service';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModalStub} from '../../../../_stubs/ngb-active-modal-stub';
import {StatButtonsComponent} from './stat-buttons/stat-buttons.component';

describe('PointBuyComponent', () => {
  let component: PointBuyComponent;
  let fixture: ComponentFixture<PointBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModalModule],
      declarations: [ PointBuyComponent, StatButtonsComponent ],
      providers: [
        {provide: NgbActiveModal, useClass: NgbActiveModalStub},
        CharacterEditService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
