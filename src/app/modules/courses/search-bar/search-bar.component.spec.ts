import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';

import { CoursesService } from '@services/courses/courses.service';

import { SearchBarComponent } from './search-bar.component';

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

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [SearchBarComponent, MockInputComponent, MockButtonComponent],
      providers: [CoursesService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the search value on searchClick', () => {
    spyOn(component.newSearchEvent, 'emit');
    const searchValue = 'Angular';
    fixture.detectChanges();

    component.searchClick(searchValue);

    expect(component.newSearchEvent.emit).toHaveBeenCalledWith(searchValue);
  });
});
