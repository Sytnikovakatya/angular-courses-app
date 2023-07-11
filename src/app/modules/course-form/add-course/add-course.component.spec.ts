import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
class MockAuthorsComponent {
  @Input() bindModelData: string;
}

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
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
});
