import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFormComponent } from './workout-form.component';

describe('WorkoutFromComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutFormComponent],
    });
    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
