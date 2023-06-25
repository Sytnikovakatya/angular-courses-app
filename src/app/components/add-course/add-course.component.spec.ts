import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AddCourseComponent } from './add-course.component';

@Component({
  selector: 'app-input',
  template: '<div>Mock Input Component</div>',
})
class MockInputComponent {
  @Input() placeholder: string;
  @Input() bindModelData: string;
  @Input() type: string;
}

@Component({
  selector: 'app-button',
  template: '<div>Mock Button Component</div>',
})
class MockButtonComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() class: string;
  @Input() fontawesome: string;
}

@Component({
  selector: 'app-duration',
  template: '<div>Mock Duration Component</div>',
})
class MockDurationComponent {
  @Input() bindModelData: number;
}

@Component({
  selector: 'app-date-input',
  template: '<div>Mock Date Input Component</div>',
})
class MockDateInputComponent {
  @Input() bindModelData: string;
}

@Component({
  selector: 'app-authors',
  template: '<div>Mock Authors Component</div>',
})
class MockAuthorsComponent {}

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AddCourseComponent,
        MockInputComponent,
        MockButtonComponent,
        MockDurationComponent,
        MockDateInputComponent,
        MockAuthorsComponent,
      ],
    });
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the close method and print console.log', () => {
    spyOn(console, 'log');
    component.close();
    expect(console.log).toHaveBeenCalledWith('Close page');
  });

  it('should call the saveCourse method and print console.log', () => {
    spyOn(console, 'log');
    component.saveCourse();
    expect(console.log).toHaveBeenCalledWith({
      id: 7,
      name: component.title,
      date: component.date,
      length: component.duration,
      description: component.description,
    });
    expect(console.log).toHaveBeenCalledWith('Save new Course');
  });
});
