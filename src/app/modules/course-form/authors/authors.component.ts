/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  forwardRef,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import { Observable, Subscription, map, startWith } from 'rxjs';
import { Store } from '@ngrx/store';

import { Author } from '@shared/interfaces/author';
import { Course } from '@shared/interfaces/course.interface';

import { selectEditCourse } from '@store/courses/courses.selectors';
import { AppState } from '@store/app.state';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true,
    },
  ],
})
export class AuthorsComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() authorList: Author[] = [];

  @Output() checkedAuthorsEvent = new EventEmitter<Author[]>();

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;
  announcer = inject(LiveAnnouncer);

  subscription: Subscription;
  getCourseAuthors$: Observable<Course | null>;

  chipSelectedAuthors: Author[] = [];
  filteredAuthors: Observable<string[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  authorCtrl = new FormControl('');

  private onChange = (value: Author[]) => {};
  private onTouched = () => {};
  touched = false;

  constructor(private store: Store<AppState>) {
    this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
      startWith(null),
      map((authorName: string | null) => this._filter(authorName))
    );
    this.getCourseAuthors$ = this.store.select(selectEditCourse);
  }

  ngOnInit(): void {
    this.subscription = this.getCourseAuthors$.subscribe(course => {
      const authors = course?.authors;
      if (authors) authors.forEach(author => this.chipSelectedAuthors.push(author));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(value: Author[]): void {
    this.chipSelectedAuthors = value || [];
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 1) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    } else return null;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  addAuthor(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.selectAuthorByName(value.trim());
    }
    event.chipInput!.clear();
    this.authorCtrl.setValue(null);

    this.onChange(this.chipSelectedAuthors);
    this.markAsTouched();
  }

  removeAuthor(author: Author): void {
    const index = this.chipSelectedAuthors.indexOf(author);

    if (index >= 0) {
      this.chipSelectedAuthors.splice(index, 1);
      this.announcer.announce(`Removed ${author.name}`);
      this.sendAuthorList();
      this.onChange(this.chipSelectedAuthors);
      this.markAsTouched();
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectAuthorByName(event.option.value);
    this.authorInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);
  }

  private _filter(authorName: string | null): string[] {
    let result: string[] = [];

    let allAuthorsSelected = this.authorList.filter(author => this.chipSelectedAuthors.indexOf(author) < 0);
    if (authorName) {
      result = this.filterAuthors(allAuthorsSelected, authorName);
    } else {
      result = allAuthorsSelected.map(author => author.name);
    }
    return result;
  }

  private filterAuthors(authorList: Author[], authorName: string): string[] {
    let filteredAuthorList: Author[] = [];

    const filterValue = authorName.toLowerCase();

    let authorsMatchingAuthorName = authorList.filter(author => author.name.toLowerCase().indexOf(filterValue) === 0);
    if (authorsMatchingAuthorName.length) {
      filteredAuthorList = authorsMatchingAuthorName;
    } else {
      filteredAuthorList = authorList;
    }
    return filteredAuthorList.map(author => author.name);
  }

  private selectAuthorByName(authorName: string): void {
    let foundAuthor = this.authorList.filter(author => author.name == authorName);
    if (foundAuthor.length) {
      this.chipSelectedAuthors.push(foundAuthor[0]);
    } else {
      let highestEmployeeId = Math.max(...this.chipSelectedAuthors.map(author => author.id), 0);
      this.chipSelectedAuthors.push({ name: authorName, id: highestEmployeeId + 1 });
    }
    this.sendAuthorList();
  }

  sendAuthorList(): void {
    this.checkedAuthorsEvent.emit(this.chipSelectedAuthors);
  }
}
