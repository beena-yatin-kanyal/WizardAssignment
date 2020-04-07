import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardfinishedComponent } from './wizardfinished.component';

describe('WizardfinishedComponent', () => {
  let component: WizardfinishedComponent;
  let fixture: ComponentFixture<WizardfinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardfinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardfinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
