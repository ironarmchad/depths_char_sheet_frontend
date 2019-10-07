import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAbilityComponent } from './new-ability.component';

describe('NewAbilityComponent', () => {
  let component: NewAbilityComponent;
  let fixture: ComponentFixture<NewAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
