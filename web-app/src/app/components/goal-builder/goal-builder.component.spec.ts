import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalBuilderComponent } from './goal-builder.component';

describe('GoalBuilderComponent', () => {
  let component: GoalBuilderComponent;
  let fixture: ComponentFixture<GoalBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
