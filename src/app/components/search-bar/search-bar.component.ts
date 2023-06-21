import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() newSearchEvent = new EventEmitter<string>();

  search = '';

  constructor(private coursesService: CoursesService) {}

  searchClick(value: string): void {
    this.newSearchEvent.emit(value);
  }

  addCourse(): void {
    this.coursesService.addToCourses({
      id: 4,
      name: 'React',
      date: new Date().toDateString(),
      length: 120,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
  }
}
