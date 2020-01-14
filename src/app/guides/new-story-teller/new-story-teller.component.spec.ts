import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryTellerComponent } from './new-story-teller.component';

describe('NewStoryTellerComponent', () => {
  let component: NewStoryTellerComponent;
  let fixture: ComponentFixture<NewStoryTellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryTellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
