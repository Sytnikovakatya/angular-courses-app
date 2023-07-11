import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AuthorsComponent } from './authors.component';

@Component({
  selector: 'app-input',
  template: '<div>Mock Input Component</div>',
})
class MockInputComponent {
  @Input() placeholder: string;
  @Input() bindModelData: string;
}

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent, MockInputComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
