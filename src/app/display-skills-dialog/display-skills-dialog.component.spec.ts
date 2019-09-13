import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySkillsDialogComponent } from './display-skills-dialog.component';

describe('DisplaySkillsDialogComponent', () => {
  let component: DisplaySkillsDialogComponent;
  let fixture: ComponentFixture<DisplaySkillsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySkillsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySkillsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
