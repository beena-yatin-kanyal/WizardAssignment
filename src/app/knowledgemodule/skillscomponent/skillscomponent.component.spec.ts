import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscomponentComponent } from './skillscomponent.component';

describe('SkillscomponentComponent', () => {
  let component: SkillscomponentComponent;
  let fixture: ComponentFixture<SkillscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
