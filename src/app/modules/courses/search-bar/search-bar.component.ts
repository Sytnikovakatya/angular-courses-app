import { Component, OnDestroy, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() newSearchEvent = new EventEmitter<string>();
  @Output() newSortEvent = new EventEmitter<string>();

  search = '';
  subscription: Subscription;

  inputValue: Subject<string> = new Subject<string>();
  trigger$: Observable<string> = this.inputValue.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter((termSearch: string) => {
      return termSearch.trim().length >= 3 || termSearch.length === 0;
    })
  );

  searhForm = this.fb.group({
    term: ['', [Validators.minLength(3)]],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscription = this.trigger$.subscribe(currentValue => {
      this.newSearchEvent.emit(currentValue);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleSearchInput(value: string): void {
    this.inputValue.next(value);
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  changeSortValue(select: NgForm): void {
    this.newSortEvent.emit(select.value.value);
  }
}
