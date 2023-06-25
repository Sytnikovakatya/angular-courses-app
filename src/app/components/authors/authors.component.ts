import { Component } from '@angular/core';
import { Author } from '@interfaces/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  authorName = '';
  authors: Author[] = [];
}
