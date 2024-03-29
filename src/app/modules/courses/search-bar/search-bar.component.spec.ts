import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

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
  @Input() placeholder: string;
  @Input() bindModelData: string;
  @Input() type: string;
  @Input() term: string;
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

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [SearchBarComponent, MockInputComponent, MockButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to add course page', () => {
    const routerSpy = spyOn(component['router'], 'navigate');

    component.addCourse();

    expect(routerSpy).toHaveBeenCalledWith(['/courses/new']);
  });

  it('should unsubscribe from subscription on component destroy', () => {
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });
});
