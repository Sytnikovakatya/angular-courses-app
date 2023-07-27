import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';

@Component({
  selector: 'app-input',
  template: '<div>Mock Input Component</div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MockInputComponent,
      multi: true,
    },
  ],
})
class MockInputComponent extends DefaultValueAccessor {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() bindModelData: string;
  @Input() valid: boolean | undefined;
}

@Component({
  selector: 'app-button',
  template: '<div>Mock Button Component</div>',
})
class MockButtonComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() class: string;
  @Input() disabled: boolean;
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, StoreModule.forRoot(provideMockStore)],
      declarations: [LoginComponent, MockInputComponent, MockButtonComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
