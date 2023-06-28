import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() newSearchEvent = new EventEmitter<string>();

  search = '';

  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {}

  searchClick(value: string): void {
    this.newSearchEvent.emit(value);
  }

  addCourse(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
    //this.router.navigate(['/courses/new']);
  }
}
