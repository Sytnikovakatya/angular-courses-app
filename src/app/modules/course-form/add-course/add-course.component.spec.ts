import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { DurationPipe } from '@shared/pipes/duration/duration.pipe';

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
  @Input() disabled: boolean;
}

@Component({
  selector: 'app-duration',
  template: '<div>Mock Duration Component</div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MockDurationComponent,
      multi: true,
    },
  ],
})
class MockDurationComponent extends DefaultValueAccessor {
  @Input() valid: boolean | undefined;
  @Input() hasError: boolean | undefined;
}

@Component({
  selector: 'app-date-input',
  template: '<div>Mock Date Input Component</div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MockDateInputComponent,
      multi: true,
    },
  ],
})
class MockDateInputComponent extends DefaultValueAccessor {
  @Input() valid: boolean | undefined;
  @Input() hasError: boolean | undefined;
}

@Component({
  selector: 'app-authors',
  template: '<div>Mock Authors Component</div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MockAuthorsComponent,
      multi: true,
    },
  ],
})
class MockAuthorsComponent extends DefaultValueAccessor {}

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(provideMockStore),
      ],
      declarations: [
        AddCourseComponent,
        MockInputComponent,
        MockButtonComponent,
        MockDurationComponent,
        MockDateInputComponent,
        MockAuthorsComponent,
        DurationPipe,
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
