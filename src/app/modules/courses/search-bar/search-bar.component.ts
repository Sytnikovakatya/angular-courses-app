import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() newSearchEvent = new EventEmitter<string>();
  @Output() newSortEvent = new EventEmitter<string>();

  search = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  searchClick(value: string): void {
    this.newSearchEvent.emit(value);
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  changeSortValue(select: NgForm) {
    this.newSortEvent.emit(select.value.value);
  }
}
